import Menu from './menu';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  );
}
