import clsx from 'clsx';
import Link from 'next/link';
import { useSelector } from '../hooks/useSelector';
import ISideBar from '../types/ISideBar';
import { Role } from '../types/role';
import Container from './container';

const SiteMap = ({ sideBarData, isAdmin, role }: { sideBarData: ISideBar[]; isAdmin?: boolean; role?: Role }) => {
  const token = useSelector((store) => store.authentication.token);

  return (
    <Container title="サイトマップ" className={clsx('max-w-[740px] h-full pb-24', { 'pt-[104px]': !token })}>
      <div className="bg-white rounded-md border border-solid border-[#CCCCCC] px-14 py-[50px] mt-12 flex flex-col">
        <Link href="/">
          <a className="flex ">
            <p className="-mt-3 font-bold text-2xl">.</p>
            <p className="font-bold text-sm ml-2">ホーム</p>
          </a>
        </Link>
        <div className="ml-10 ">
          {sideBarData?.map((sideBarObj, index) => {
            if (sideBarObj.path === '/') {
              return null;
            }

            if (role && sideBarObj.roles) {
              if (!sideBarObj.roles.includes(role)) {
                return null;
              }
            }

            return (
              <div key={index}>
                <Link href={sideBarObj.path}>
                  <a>
                    <p className="mt-7 font-bold text-sm">{sideBarObj.title}</p>
                  </a>
                </Link>
                {sideBarObj.childs?.map((sideBarChildObj, indexChild) => (
                  <Link href={sideBarChildObj.path} key={indexChild}>
                    <a>
                      <p className="mt-4 ml-1 text-sm">{`∟${sideBarChildObj.title}`}</p>
                    </a>
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
        {!isAdmin && (
          <Link href="#">
            <a className="flex mt-9">
              <p className="-mt-3 font-bold text-2xl">.</p>
              <p className="font-bold text-sm ml-2">お問い合わせ</p>
            </a>
          </Link>
        )}
        <Link href="/privacy-policy">
          <a className="flex mt-9">
            <p className="-mt-3 font-bold text-2xl">.</p>
            <p className="font-bold text-sm ml-2">プライバシーポリシー</p>
          </a>
        </Link>
        <Link href="/term-of-service">
          <a className="flex mt-9">
            <p className="-mt-3 font-bold text-2xl">.</p>
            <p className="font-bold text-sm ml-2">利用規約</p>
          </a>
        </Link>
        <Link href="/site-map">
          <a className="flex mt-9">
            <p className="-mt-3 font-bold text-2xl">.</p>
            <p className="font-bold text-sm ml-2">サイトマップ</p>
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default SiteMap;
