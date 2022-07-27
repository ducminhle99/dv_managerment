import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import ISideBar from 'common/types/ISideBar';
import { useMemo, useState } from 'react';
import ChildMenu, { IChildMenu } from './childMenu';

const LinkUrl = ({ isAuth, href, children }: { isAuth: boolean; href: string; children: any }) => {
  if (isAuth) {
    return <Link href={href}>{children}</Link>;
  }

  return children;
};

function SubMenu({ item, isAuth }: { item: ISideBar; lastItem: boolean; isAuth: boolean }) {
  const { pathname } = useRouter();
  const [isShowChild, setIsShowChild] = useState<boolean>(true);

  const checkMatchingChildPath = (childs: IChildMenu[] = []) => {
    return childs.some((child: IChildMenu) => child.path === pathname);
  };

  const isRouterMatching = useMemo(() => {
    if (pathname === '/' && pathname === item.path) {
      return true;
    }

    if ((pathname === '/reset-password' || pathname === '/input-password') && !isAuth) {
      return true;
    }

    if (checkMatchingChildPath(item.childs)) {
      return true;
    }

    return pathname?.includes(item.path) && item.path !== '/';
  }, [pathname, item]);

  return (
    <div className="flex flex-col py-4 group border-0 border-dotted border-primary-light-300 border-b last:border-b-0">
      <LinkUrl isAuth={isAuth} href={item.path}>
        <a
          href={item.path}
          className={clsx({
            'pointer-events-none cursor-default': item.disable,
          })}
          onClick={(e) => {
            if (item.path !== '#') {
              return;
            }
            e.preventDefault();
          }}
        >
          <div className="overflow-hidden flex flex-col items-start flex-nowrap">
            <div
              className={clsx('flex items-center')}
              onClick={() => {
                if (item.path !== '#') {
                  return;
                }
                setIsShowChild((prevState) => !prevState);
              }}
            >
              <div
                className={clsx('flex  justify-center items-center p-1 rounded-md fill-[#ccc]', {
                  'bg-primary-light-200 fill-white': isRouterMatching,
                  'group-hover:opacity-70': !isRouterMatching,
                })}
              >
                {item.icon}
              </div>
              <p
                className={clsx('text-lg ml-5 text-[#333333] font-bold whitespace-nowrap ', {
                  'text-primary-strong-100': isRouterMatching,
                  'group-hover:opacity-70': !isRouterMatching,
                })}
              >
                {item.title}
              </p>
            </div>
          </div>
        </a>
      </LinkUrl>
      <div className={clsx('transition-all duration-500 ease-in-out overflow-hidden', { 'max-h-0': !isShowChild, 'max-h-96': isShowChild })}>
        {item.childs?.map((child: IChildMenu, index: number) => (
          <ChildMenu key={index} item={child} />
        ))}
      </div>
    </div>
  );
}

export default SubMenu;
