import ISideBar from 'common/types/ISideBar';
import { LoginPink } from 'common/components/icons/LoginPink';

export const SideBarUnAuthenticatedData: ISideBar[] = [
  {
    title: 'ログイン',
    icon: <LoginPink />,
    path: '/login',
  },
];
