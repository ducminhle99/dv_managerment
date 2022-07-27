import Layout from 'common/components/layout/admin';
import LayoutCompany from 'common/components/layout/company';
import React from 'react';
import PageTitle from '../components/pageTitle';
import { listPageAdminTitleObject, listPageCompanyTitleObject } from '../constants/pageTile';

const LayoutWrapper = ({ children }: { children: any }) => {
  if (children.type.layout === 'admin') {
    return (
      <Layout>
        <PageTitle listTitleObject={listPageAdminTitleObject} />
        {children}
      </Layout>
    );
  }

  if (children.type.layout === 'public') {
    return (
      <Layout isAuth={false}>
        <PageTitle listTitleObject={listPageAdminTitleObject} />
        {children}
      </Layout>
    );
  }

  if (children.type.layout === 'company') {
    return (
      <LayoutCompany isAuth={true}>
        <PageTitle listTitleObject={listPageCompanyTitleObject} />
        {children}
      </LayoutCompany>
    );
  }

  return <>{children}</>;
};

export default LayoutWrapper;
