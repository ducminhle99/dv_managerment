import { translate } from 'common/utilities/helper';
import ISideBar from 'common/types/ISideBar';
import { Home, Account, Payment, Setting, User } from 'common/components/icons';
import { Role } from 'common/types/role';

export const SideBarData: ISideBar[] = [
  {
    title: translate('home_page'),
    icon: <Home />,
    path: '/',
    roles: [Role.Admin, Role.General],
  },
  {
    title: translate('company_page'),
    icon: <Account />,
    path: '/company',
    roles: [Role.Admin, Role.General],
  },
  {
    title: translate('payment_page'),
    icon: <Payment />,
    path: '#',
    roles: [Role.Admin, Role.General],
    childs: [
      { title: '決済情報一覧', path: '/payments' },
      { title: '未決済企業一覧', path: '/unsetted-company' },
      { title: '支払い履歴登録', path: '/payment-create' },
      { title: '請求書一覧', path: '/invoices' },
    ],
  },
  {
    title: translate('users_page'),
    icon: <User />,
    path: '/users',
    roles: [Role.Admin],
  },
  {
    title: translate('setting_page'),
    icon: <Setting />,
    path: '/profile',
    roles: [Role.Admin, Role.General],
  },
];
