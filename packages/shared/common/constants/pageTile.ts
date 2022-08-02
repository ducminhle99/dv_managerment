export type TitleObject = {
  path: string;
  title: string;
};

export const listPageCompanyTitleObject: TitleObject[] = [];
export const listPageUserTitleObject: TitleObject[] = [];
export const listPageAdminTitleObject: TitleObject[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Device',
    path: '/device',
  },
  {
    title: 'Create New Device',
    path: '/device/create',
  },
  {
    title: 'Edit Device',
    path: '/device/edit',
  },
];
