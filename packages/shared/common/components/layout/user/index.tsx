import Menu from './menu';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Menu />
      <main>{children}</main>
    </div>
  );
}
