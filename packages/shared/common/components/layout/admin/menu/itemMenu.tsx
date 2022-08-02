import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const Index = ({ title, path }: { title: string; path: string }) => {
  const { pathname } = useRouter();

  const isRouterMatching = useMemo(() => {
    if (pathname === '/' && pathname === path) {
      return true;
    }

    if (pathname === '/reset-password' || pathname === '/input-password') {
      return true;
    }

    return pathname?.includes(path) && path !== '/';
  }, [pathname, path]);

  return (
    <div className={clsx('ml-8 first:ml-0', { 'border-0 text-primary border-b border-primary border-solid': isRouterMatching })}>
      <Link href={path}>
        <a href={path} className="text-inherit">
          <p className="hover:text-primary text-inherit ">{title}</p>
        </a>
      </Link>
    </div>
  );
};

export default Index;
