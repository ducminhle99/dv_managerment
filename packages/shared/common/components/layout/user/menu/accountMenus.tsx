import IMenu from 'common/types/IMenu';
import { Avatar } from 'antd';
import { UserOutlined, ImportOutlined, KeyOutlined } from '@ant-design/icons';
export const AccountMenus: IMenu[] = [
  {
    title: 'Van nguyen',
    path: '/account',
    icon: <Avatar icon={<UserOutlined />} />,
  },
  {
    title: 'Edit profile',
    path: '/editProfile',
    icon: <UserOutlined />,
  },
  {
    title: 'Change Password',
    path: '/changePass',
    icon: <KeyOutlined />,
  },
  {
    title: 'Sign out',
    path: '/signout',
    icon: <ImportOutlined />,
  },
];
