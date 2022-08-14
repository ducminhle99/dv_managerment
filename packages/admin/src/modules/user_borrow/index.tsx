import { Image } from 'antd';
import Container from 'common/components/container';
import React from 'react';

const Index = () => {
  return (
    <Container title="BORROW DEVICE" className="mt-[100px]">
      <div className="flex justify-start mt-4">
        <Image className="w-40 h-auto" src="assets/images/default-avatar.jpg" alt="user photo" />
        <div className="ml-8">
          <p className="text-xl font-medium uppercase mb-4">Nguyen van a</p>
          <p className="text-xl font-medium uppercase">User Id: 001</p>
        </div>
      </div>
    </Container>
  );
};

export default Index;
