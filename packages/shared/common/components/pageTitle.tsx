import Head from 'next/head';
import { TitleObject } from '../constants/pageTile';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

function PageTitle({ listTitleObject }: { listTitleObject: TitleObject[] }) {
  const router = useRouter();

  const title = useMemo(() => {
    const currentTitleObject = listTitleObject.find((titleObject) => titleObject.path === router.pathname);

    return currentTitleObject?.title || '';
  }, [router, listTitleObject]);

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default PageTitle;
