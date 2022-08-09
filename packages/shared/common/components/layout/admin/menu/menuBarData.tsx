import IMenu from 'common/types/IMenu';
import DownOutlined from '@ant-design/icons/DownOutlined';
import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined';
import CompassOutlined from '@ant-design/icons/CompassOutlined';
import BankOutlined from '@ant-design/icons/BankOutlined';

export const MenuBarData: IMenu[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Device',
    path: '/devices',
  },
  {
    title: 'Borrow',
    path: '/borrow',
  },
  {
    title: 'User',
    path: '/user',
  },
  {
    title: 'Report',
    path: '/report',
  },
  {
    title: 'Setting',
    path: 'setting',
    icon: <DownOutlined className="text-[14px] text-[#170F49]" />,
    childs: [
      { title: 'Brand', path: '/brand', icon: <BankOutlined /> },
      { title: 'Category', path: '/category', icon: <AppstoreOutlined /> },
      { title: 'Position', path: '/position', icon: <CompassOutlined /> },
    ],
  },
];
