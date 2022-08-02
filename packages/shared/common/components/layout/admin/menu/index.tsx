import DropdownAccount from './dropdownAccount';
import DropdownMenu from './dropdownMenu';
import Item from './itemMenu';
import { MenuBarData } from './menuBarData';
import { MenuUnAuthenticatedData } from './menuUnAuthenticatedData';
const menu = true ? MenuBarData : MenuUnAuthenticatedData;
const Index = () => {
  return (
    <div className="h-[76px] px-24 shadow-lg flex items-center justify-between">
      <img src="/assets/images/logo.png" className="w-[181px] h-[52px]" alt="" />

      <div className="flex">
        {menu.map((item, key) => {
          if (item.childs) {
            return <DropdownMenu subMenuList={item.childs} key={key} title={item.title} />;
          }

          return <Item path={item.path} key={key} title={item.title} />;
        })}
      </div>

      <DropdownAccount />
    </div>
  );
};

export default Index;
