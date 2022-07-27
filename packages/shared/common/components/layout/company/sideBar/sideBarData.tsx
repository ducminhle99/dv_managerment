import ISideBar from 'common/types/ISideBar';
import { Home, UserCompany, Application, Location, Folder, TickTodo, Setting, ApplicationFormIcon } from 'common/components/icons';

export const SideBarData: ISideBar[] = [
  {
    title: 'ホーム',
    icon: <Home />,
    path: '/',
  },
  {
    title: '人材管理',
    icon: <UserCompany />,
    path: '/resources',
  },
  {
    title: '申請書・書類管理',
    icon: <ApplicationFormIcon />,
    path: '#',
    childs: [
      { title: '申請書一覧', path: '/forms' },
      { title: '書類一覧', path: '/documents' },
    ],
  },
  {
    title: 'Web面談（面接）',
    icon: <Application />,
    path: '#',
    childs: [
      { title: '予定している面談一覧', path: '/interviews' },
      { title: '実施済み面談一覧', path: '/done-interviews' },
    ],
  },
  {
    title: '所属先管理',
    icon: <Location />,
    path: '/workplaces',
  },
  {
    title: '求人管理',
    icon: <Folder />,
    path: '/recruitment-management',
  },
  {
    title: '支援業務TO DO',
    icon: <TickTodo />,
    path: '/todo',
  },
  {
    title: 'アカウント設定',
    icon: <Setting />,
    path: '/profile',
  },
];
