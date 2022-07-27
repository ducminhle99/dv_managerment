import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef } from 'react';

const confirmationMessage = `編集中にこのページを離れると行った変更が破棄されます。
このページを離れてもよろしいですか。`;

const throwFakeErrorToFoolNextRouter = (): never => {
  throw 'Abort route change. Please ignore this error.';
};

export const useWarnIfUnsavedChanges = (notSaved: boolean, isShowConfirmChanged = false) => {
  const router = useRouter();
  const lastHistoryState = useRef<{ idx: number }>(global.history?.state);

  useEffect(() => {
    const storeLastHistoryState = (): void => {
      lastHistoryState.current = history.state;
    };
    router.events.on('routeChangeComplete', storeLastHistoryState);

    return () => {
      router.events.off('routeChangeComplete', storeLastHistoryState);
    };
  }, [router]);

  const revertTheChangeRouterJustMade = useCallback(() => {
    const state = lastHistoryState.current;
    if (state !== null && history.state !== null && state.idx !== history.state.idx) {
      history.go(lastHistoryState.current.idx < history.state.idx ? -1 : 1);
    }
  }, []);

  const killRouterEvent = useCallback(() => {
    router.events.emit('routeChangeError');

    revertTheChangeRouterJustMade();

    throwFakeErrorToFoolNextRouter();
  }, [revertTheChangeRouterJustMade, router]);

  useEffect(() => {
    if (!isShowConfirmChanged) {
      return;
    }
    let isWarned = false;

    const routeChangeStart = (url: string): void => {
      if (router.asPath !== url && notSaved && !isWarned) {
        isWarned = true;

        if (window.confirm(confirmationMessage)) {
          router.push(url);
          return;
        }

        isWarned = false;
        killRouterEvent();
      }
    };

    const beforeUnload = (e: BeforeUnloadEvent): string | null => {
      if (notSaved && !isWarned) {
        const event = e ?? window.event;
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
      return null;
    };

    router.events.on('routeChangeStart', routeChangeStart);
    window.addEventListener('beforeunload', beforeUnload);

    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
      window.removeEventListener('beforeunload', beforeUnload);
    };
  }, [notSaved, isShowConfirmChanged, killRouterEvent, router]);

  const askDiscardConfirmChange = useCallback(
    (callBackFunc: any) => {
      if (!notSaved) {
        if (typeof callBackFunc === 'function') {
          callBackFunc();
        }

        return;
      }

      if (confirm(confirmationMessage)) {
        if (typeof callBackFunc === 'function') {
          callBackFunc();
        }
      }
    },
    [notSaved]
  );

  return askDiscardConfirmChange;
};
