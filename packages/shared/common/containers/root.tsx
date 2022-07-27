import { useNotification } from 'common/hooks';
import LayoutWrapper from 'common/containers/layoutWrapper';
import { useDispatch } from 'react-redux';
import { loadAuthentication } from 'store/actions';
import { useEffect } from 'react';
import PopupNotification from './popupNotification';
import { useRouter } from 'next/router';

type PropsType = {
  children: React.ReactNode;
};

export default function Root({ children }: PropsType) {
  useNotification();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(loadAuthentication());
  }, []);

  useEffect(() => {
    const simplebarContentEles = document.getElementsByClassName('simplebar-content-wrapper');

    const eleLength = simplebarContentEles.length;
    for (let index = 0; index < eleLength; index++) {
      const simplebarContentEle = simplebarContentEles[index];
      if (!simplebarContentEle) {
        return;
      }
      simplebarContentEle.setAttribute('tabindex', '-1');
    }
  }, [router]);

  return (
    <>
      <PopupNotification />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
}
