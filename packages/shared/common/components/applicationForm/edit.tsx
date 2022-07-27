import { Button, Tabs } from 'antd';
import clsx from 'clsx';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import { useEffect, useRef, useState } from 'react';
const { TabPane } = Tabs;
import { scroll } from 'common/utilities/helper';

type Props = {
  className?: {
    root?: string;
    item?: string;
  };
  htmls: string[];
  listCss: string[];
};

export default function ApplicationFormComponent({ htmls, className, listCss }: Props) {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const buttonPaginationRef = useRef<any>();

  const scrollAfterPagination = () => {
    setTimeout(() => {
      // buttonPaginationRef.current?.scrollIntoView && buttonPaginationRef.current?.scrollIntoView({ block: 'start' });
      scroll(33, { behavior: 'smooth' });
    }, 100);
  };

  const handleNextPage = () => {
    let nextPage = page + 1;
    if (nextPage > total) {
      nextPage = total;
    }
    setPage(nextPage);
    scrollAfterPagination();
  };

  const handleBackPage = () => {
    let nextPage = page - 1;
    if (nextPage < 1) {
      nextPage = 1;
    }

    setPage(nextPage);
    scrollAfterPagination();
  };

  useEffect(() => {
    setTotal(htmls?.length || 0);
  }, [htmls]);

  useEffect(() => {
    if (!Array.isArray(listCss)) {
      return;
    }

    if (!listCss[page - 1]) {
      return;
    }

    const styleSheet = document.getElementById('gformStyle');
    if (!styleSheet) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'gformStyle';
      styleSheet.innerText = listCss[page - 1];
      document.head.appendChild(styleSheet);
    } else {
      styleSheet.innerText = listCss[page - 1];
    }
  }, [listCss, page]);

  if (!htmls?.length) {
    return null;
  }

  return (
    <div>
      <Tabs
        className={clsx(className)}
        animated={{ tabPane: true }}
        activeKey={page.toString()}
        tabBarStyle={{ height: 0, marginBottom: 0 }}
        tabIndex={page}
      >
        {htmls.map((html, index) => {
          return (
            <TabPane key={(index + 1).toString()} forceRender>
              <div key={index} dangerouslySetInnerHTML={{ __html: html }} />
            </TabPane>
          );
        })}
      </Tabs>
      <div className="flex justify-between items-center mt-14">
        <Button className="px-0 py-0 hover:bg-transparent h-auto min-h-0" disabled={page <= 1} onClick={handleBackPage} type="text">
          <div className="flex items-center hover:text-primary ">
            <LeftOutlined />
            <span className="ml-4 text-[15px]">前ページ</span>
          </div>
        </Button>
        <p>{`${page}/${total}`}</p>

        <Button
          ref={buttonPaginationRef}
          className="px-0 py-0 hover:bg-transparent h-auto min-h-0"
          type="text"
          disabled={page >= total}
          onClick={handleNextPage}
        >
          <div className="flex items-center hover:text-primary ">
            <span className="mr-4 text-[15px]">次ページ</span>
            <RightOutlined />
          </div>
        </Button>
      </div>
    </div>
  );
}
