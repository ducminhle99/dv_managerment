import { Avatar, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AccountMenus } from './accountMenus';
import Link from 'next/link';
import clsx from 'clsx';

const Index = () => {
  return (
    <Menu triggerSubMenuAction={'click'} mode="horizontal" className=" leading-none border-0">
      <Menu.SubMenu
        key="SubMenu"
        title="Van nguyen"
        icon={<Avatar icon={<UserOutlined />} />}
        className={clsx(
          'flex max-h-max relative shadow-[0_1px_5px_0px_#CCCCCC] border p-0 mt-0 text-[#333] w-[200px] h-[56px] rounded-[50px] justify-center  pr-2  items-center after:border-b-0'
        )}
      >
        <div className="w-[250px] absolute bg-white right-[-3.875rem] ">
          {AccountMenus.map((item, index) => (
            <Link key={index} href={item.path}>
              <a
                className={clsx(
                  'pb-0',
                  'first:pb-2',
                  'first:border-b first:border-solid first:border-[#CCCCCC] first:border-0 ',
                  'block',
                  'last:border-t last:border-solid last:border-[#CCCCCC] last:border-0',
                  'text-inherit',
                  'mx-2 ',
                  'hover:text-[#039be5] ',
                  `first:after:content-['van@gmail.com'] first:after:absolute first:after:left-[68px]  first:after:text-[#969393] first:after:top-[45px] first:after:hover:text-[#039be5]`
                )}
                href={item.path}
              >
                <Menu.Item className="text-[#333] ml-4 first:ml-0 leading-[50px] hover:text-[#039be5]  my-0 first:h-[57px] " icon={item.icon}>
                  {item.title}
                </Menu.Item>
              </a>
            </Link>
          ))}
        </div>
      </Menu.SubMenu>
    </Menu>
  );
};

export default Index;
