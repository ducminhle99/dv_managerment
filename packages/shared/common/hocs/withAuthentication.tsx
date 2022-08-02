import { useSelector } from '../hooks';
import AppLoading from 'common/components/appLoading';
import { useEffect } from 'react';
import Router from 'next/router';
import { replaceRouter } from 'common/utilities/helper';
import { Role } from 'common/types/role';

const adminRouter = ['/users'];

export const withAuthentication = (Component: any): any => {
  const AuthHOC = (props: any) => {
    const { authLoaded, token, role } = useSelector((state) => ({
      authLoaded: state.app.authLoaded,
      token: state.authentication.token,
      role: state.authentication?.role,
    }));

    useEffect(() => {
      if (!authLoaded) {
        return;
      }

      if (!token) {
        Router.replace('/login');
      }
    }, [token, authLoaded]);

    if (!authLoaded || !token) {
      return <AppLoading />;
    }

    if (role !== Role.Admin && adminRouter.some((item) => Router.pathname.includes(item))) {
      replaceRouter('404');
      return null;
    }

    return <Component {...props} />;
  };

  return AuthHOC;
};
