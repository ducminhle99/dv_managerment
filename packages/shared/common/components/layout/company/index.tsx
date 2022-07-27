import Footer from '../admin/footer';
import TopBar from './topBar';
import SideBar from './sideBar';
import SimpleBar from 'simplebar-react';
import { useEffect, useRef } from 'react';
import Router from 'next/router';
import { useCompanyProfile, useSelector } from '../../../hooks';

export default function LayoutCompany({ children, isAuth: isAuthCus = true }: { children: React.ReactNode; isAuth?: boolean }) {
  const simpleBarRef = useRef<any>();
  useCompanyProfile();
  const { footerVisibility } = useSelector((state) => state.app);
  const token = useSelector((store) => store.authentication.token);

  useEffect(() => {
    setTimeout(() => {
      simpleBarRef.current.recalculate();
    }, 500);
  }, [footerVisibility]);

  const handleChangeRoute = () => {
    if (!simpleBarRef.current) {
      return;
    }

    simpleBarRef.current.getScrollElement().scrollTop = 0;
  };

  useEffect(() => {
    Router.events.on('routeChangeComplete', handleChangeRoute);

    return () => {
      Router.events.off('routeChangeComplete', handleChangeRoute);
    };
  }, []);

  const isAuth = isAuthCus && !!token;

  return (
    <div className="flex h-full relative overflow-hidden">
      <SideBar isAuth={isAuth} />
      <SimpleBar className="app-container h-full flex-1 bg-[#F8F8F8]" autoHide={false} ref={simpleBarRef} id="container">
        <div className="flex flex-col flex-1 w-full min-h-full min-w-[800px]">
          {isAuth && <TopBar />}
          <main className="flex flex-1 md:mx-5">{children}</main>
          <Footer />
        </div>
      </SimpleBar>
    </div>
  );
}
