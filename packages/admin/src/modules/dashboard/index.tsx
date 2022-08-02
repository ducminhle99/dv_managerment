import Container from 'common/components/container';
import * as React from 'react';
import Card from 'common/components/card';
import { BorrowIcon, UserIcon, DeviceIcon, ReportIcon } from 'common/components/icons';
import dynamic from 'next/dynamic';
import { Spin } from 'antd';

const StackedChart = dynamic(() => import('./components/stackedChart'), {
  loading: () => <Spin size="large" />,
});
const PieChart = dynamic(() => import('./components/pieChart'), {
  loading: () => <Spin size="large" className="mt-12" />,
});

export default function Dashboard() {
  return (
    <Container rootClassName="flex justify-center pt-[76px]" className="max-w-[1047px] flex flex-col items-center">
      <div className="flex flex-wrap justify-center">
        <Card title="borrow" icon={<BorrowIcon />} path="/borrow" total={1500} />
        <Card title="user" icon={<UserIcon />} path="/user" total={1500} />
        <Card title="device" icon={<DeviceIcon />} path="/device" total={1500} />
        <Card title="report" icon={<ReportIcon />} path="/report" total={1500} />
      </div>
      <StackedChart className="mt-[100px]" />
      <PieChart className="mt-[100px]" />
    </Container>
  );
}
