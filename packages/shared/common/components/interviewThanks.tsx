import { LogoImgCustom } from 'common/components/icons';

const InterviewThanks = () => {
  return (
    <div className="flex h-full relative overflow-hidden">
      <div className="flex flex-1 items-center justify-center">
        <div className="sm:px-2 flex relative -mt-32 sm:-mt-60">
          <div className="flex flex-col z-10 mt-5">
            <p className="font-bold sm:text-xl text-[32px] text-[#3c4043]">面談のご参加ありがとうございました。</p>
          </div>
          <div className="flex flex-col md:absolute -top-20 md:opacity-40 right-2 -ml-10">
            <LogoImgCustom className="w-24 h-24 text-[#FFBCBE] ml-24" />
            <LogoImgCustom className="w-20 h-20 text-[#FFD5D6] rotate-45 -mt-5" />
            <LogoImgCustom className="w-24 h-24 text-[#FFD5D6] ml-24 -mt-10 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewThanks;
