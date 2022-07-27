import SideBar from 'common/components/layout/company/sideBar';
import { LogoImgCustom } from 'common/components/icons';
import PageTitle from './pageTitle';
import { listPageCompanyTitleObject } from '../constants/pageTile';

const NotFound = () => {
  return (
    <div className="flex h-full relative overflow-hidden">
      <PageTitle listTitleObject={listPageCompanyTitleObject} />
      <SideBar isAuth={false} />
      <div className="flex flex-1 items-center">
        <div className="ml-44 sm:ml-[89px] sm:px-2 flex  -mt-32 relative">
          <div className="flex flex-col z-10">
            <div className="flex items-center sm:flex-col sm:justify-center">
              <h1 className="font-bold text-[122px] text-[#FE9699] leading-[122px]">500</h1>
              <div className="ml-8 flex flex-col sm:ml-0">
                <p className="font-bold text-[32px] text-[#999999] sm:text-2xl">Internal Server Error</p>
                <div className="border-0 border-t border-solid border-[#999999] inline-block mt-3 pt-3">
                  <p className="text-xl font-bold sm:text-base sm:text-center">ページが表示できません。</p>
                </div>
              </div>
            </div>
            <p className="mt-10">ご不便をおかけし申し訳ありません。復旧作業を現在行っております。</p>
          </div>
          <div className="ml-8 flex flex-col md:absolute bottom-0 md:opacity-40 right-2">
            <LogoImgCustom className="w-24 h-24 text-[#FFBCBE] ml-24" />
            <LogoImgCustom className="w-20 h-20 text-[#FFD5D6] rotate-45 -mt-5" />
            <LogoImgCustom className="w-24 h-24 text-[#FFD5D6] ml-24 -mt-10 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
