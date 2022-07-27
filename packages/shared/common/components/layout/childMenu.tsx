import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useMemo } from 'react';

export type IChildMenu = {
  title: string;
  path: string;
};

export default function ChildMenu({ item }: { item: IChildMenu; lastItem?: boolean }) {
  const { pathname } = useRouter();

  const isRouterMatching = useMemo(() => {
    if (pathname === '/' && pathname === item.path) {
      return true;
    }
    return pathname?.includes(item.path) && item.path !== '/';
  }, [pathname, item]);

  return (
    <div className="mb-1 mt-4 ml-12">
      <Link href={item.path}>
        <a className="">
          <p
            className={clsx('text-[#333333] font-bold whitespace-nowrap hover:opacity-70 underline-offset-4', {
              'text-primary-strong-100 ': isRouterMatching,
            })}
          >
            ・
            <span
              className={clsx('hover:underline', {
                ' underline': isRouterMatching,
              })}
            >
              {item.title}
            </span>
          </p>
        </a>
      </Link>
    </div>
  );
}
