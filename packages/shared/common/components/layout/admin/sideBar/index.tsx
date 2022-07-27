import { Logo, LogoSingle } from 'common/components/icons';
import { SideBarData } from './sideBarData';
import { SideBarUnAuthenticatedData } from './sideBarUnAuthenticatedData';
import SubMenu from '../../subMenu';
import { useMediaQuery, useSelector } from 'common/hooks';
import SimpleBar from 'simplebar-react';
import { useState } from 'react';
import Link from 'next/link';

export default function SideBar({ isAuth }: { isAuth: boolean }) {
  const sideBarList = isAuth ? SideBarData : SideBarUnAuthenticatedData;
  const isLGDisplay = useMediaQuery('(max-width: 1367px)');
  const [isExpendMenu, setIsExpendMenu] = useState(false);

  const { role } = useSelector((state) => ({
    role: state.authentication.role,
  }));

  return (
    <div
      className="sideBar bg-primary-light-100 flex flex-col flex-shrink-0 justify-between "
      onMouseEnter={() => setIsExpendMenu(true)}
      onMouseLeave={() => setIsExpendMenu(false)}
      id="sideBar"
    >
      <SimpleBar className="max-h-full overflow-x-hidden">
        <div className="px-6 pb-52 overflow-x-hidden">
          <div className="pt-[52px] pb-9 border-0 border-b border-solid border-primary-light-200 mb-2">
            <Link href="/">
              <a>{isLGDisplay && !isExpendMenu ? <LogoSingle /> : <Logo />}</a>
            </Link>
          </div>
          {sideBarList.map(
            (item, key) =>
              (!isAuth || item?.roles?.includes(role)) && (
                <SubMenu key={key} item={item} lastItem={sideBarList.length == key + 1 && !isAuth} isAuth={isAuth} />
              )
          )}
        </div>
      </SimpleBar>
    </div>
  );
}
