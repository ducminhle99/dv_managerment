import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';

export function useRouterState<T>(pathname: string, initialValue: T) {
  const [storedValue, setRootStoredValue] = useState<{ value: T; isReady: boolean }>({ value: initialValue, isReady: false });
  const router = useRouter();

  const setStoredValue = (newValue: T) => {
    setRootStoredValue((prevValue) => ({ ...prevValue, value: newValue }));
  };

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const data = router?.query as any;

    setRootStoredValue({ value: data, isReady: true });
  }, [router]);

  const setValue = (value: T) => {
    setStoredValue(value);

    Router.push({ pathname, query: { ...(value as any) } });
  };

  return [storedValue.value, setValue] as const;
}
