import React from 'react';
import Menu from './menu';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      <main className="h-full w-full">{children}</main>
    </>
  );
}
