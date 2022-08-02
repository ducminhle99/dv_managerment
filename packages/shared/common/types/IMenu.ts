export default interface IMenu {
  title: string;
  path: string;
  icon?: JSX.Element;
  childs?: IMenu[];
  roles?: number[];
  disable?: boolean;
}
