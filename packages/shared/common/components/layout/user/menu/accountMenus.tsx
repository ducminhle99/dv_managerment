import { ImportOutlined, KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import IMenu from 'common/types/IMenu';
export const AccountMenus: IMenu[] = [
  {
    title: 'Van nguyen',
    path: '/profile',
    icon: <Avatar icon={<UserOutlined />} />,
  },
  {
    title: 'Edit profile',
    path: '/editProfile',
    icon: <UserOutlined />,
  },
  {
    title: 'Change Password',
    path: '',
    action: 'changePassword',
    icon: <KeyOutlined />,
  },
  {
    title: 'Sign out',
    action: 'logout',
    path: '',
    icon: <ImportOutlined />,
  },
];
