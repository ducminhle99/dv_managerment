import Layout from 'common/components/layout/admin';
import LayoutUser from 'common/components/layout/user';
import LayoutPublic from 'common/components/layout/public';
import React from 'react';

const LayoutWrapper = ({ children }: { children: any }) => {
  if (children.type.layout === 'admin') {
    return <Layout>{children}</Layout>;
  }

  if (children.type.layout === 'public') {
    return <LayoutPublic>{children}</LayoutPublic>;
  }

  if (children.type.layout === 'user') {
    return <LayoutUser>{children}</LayoutUser>;
  }

  return <>{children}</>;
};

export default LayoutWrapper;
