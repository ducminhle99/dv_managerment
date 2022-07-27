import { WarningIcon } from 'common/components/icons';
import { Spin } from 'antd';

const TemplateRenderData = ({ loading, hasData, children }: { loading: boolean; hasData: boolean; children?: any }) => {
  return (
    <>
      {loading ? (
        <div className="mt-40 flex justify-center">
          <Spin size="large" />
        </div>
      ) : !hasData ? (
        <div className="mt-28 mb-10 flex flex-col items-center">
          <div className="flex items-center">
            <WarningIcon />
            <p className="ml-3 text-xl text-primary font-bold">検索結果がありません</p>
          </div>
          <p className="text-lg text-black-lighter-2 mt-4">条件を変えて再度検索して下さい。</p>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default TemplateRenderData;
