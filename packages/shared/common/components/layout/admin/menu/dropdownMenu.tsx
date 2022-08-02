import { Menu } from 'antd';
import IMenu from '../../../../types/IMenu';
const Index = ({ title, subMenuList }: { title: string; subMenuList: IMenu[] }) => {
  return (
    <Menu triggerSubMenuAction={'click'} mode="horizontal" className="ml-8 leading-none border-0">
      <Menu.SubMenu key="SubMenu" title={title} className="mb-[3px] max-h-max p-0 mt-0 flex items-center after:border-b-0">
        {subMenuList.map((subMenu, index) => (
          <Menu.Item key={index} icon={subMenu.icon}>
            {subMenu.title}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );
};

export default Index;
