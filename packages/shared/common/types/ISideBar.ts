export default interface ISideBar {
  title: string;
  path: string;
  icon?: JSX.Element;
  childs?: ISideBar[];
  roles?: number[];
  disable?: boolean;
}
