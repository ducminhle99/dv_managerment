import Link from 'next/link';

export const ButtonDetail = ({ path, children }: { path: string; children: any }) => {
  return <Link href={path}>{children}</Link>;
};
