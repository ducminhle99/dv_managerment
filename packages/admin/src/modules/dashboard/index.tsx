import Container from 'common/components/container';
import * as React from 'react';
import Card from 'common/components/card';
import { BorrowIcon, UserIcon, DeviceIcon, ReportIcon } from 'common/components/icons';
import StackedChart from './components/stackedChart';
import PieChart from './components/pieChart';

export default function Dashboard() {
  return (
    <Container title="Dashboard">
      <div className="max-w-full flex flex-wrap justify-center px-[250px]">
        <Card title="borrow" icon={<BorrowIcon />} path="/device" total={1500} />
        <Card title="user" icon={<UserIcon />} path="/device" total={1500} />
        <Card title="device" icon={<DeviceIcon />} path="/device" total={1500} />
        <Card title="report" icon={<ReportIcon />} path="/device" total={1500} />
      </div>
      <div className="max-w-full flex flex-wrap justify-center px-[250px]">
        <StackedChart />
        <PieChart />
      </div>
    </Container>
  );
}
