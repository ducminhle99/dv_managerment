import IMenu from 'common/types/IMenu';
import { Avatar } from 'antd';
import { UserOutlined, ImportOutlined, KeyOutlined } from '@ant-design/icons';
export const AccountMenus: IMenu[] = [
  {
    title: 'Van nguyen',
    path: '/account',
    icon: <Avatar className="mt-[10px]" icon={<UserOutlined />} />,
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
