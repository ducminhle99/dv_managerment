import { Image } from 'antd';
import Container from 'common/components/container';
import ListBorrow from './components/ListBorrow';
import ListDevice from './components/ListDevice';
import useBorrowLogic from './useBorrowLogic';
import useDeviceLogic from './useDeviceLogic';

const Index = () => {
  const borrowLogic = useBorrowLogic();
  const deviceLogic = useDeviceLogic();
  return (
    <Container title="BORROW DEVICE" rootClassName="flex justify-center" className="w-[1260px] mt-[100px]">
      <div className="flex justify-start mt-4">
        <Image className="w-40 h-auto" src="assets/images/default-avatar.jpg" alt="user photo" />
        <div className="ml-8">
          <p className="text-xl font-medium uppercase mb-4">Nguyen van a</p>
          <p className="text-xl font-medium uppercase">User Id: 001</p>
        </div>
      </div>
      <p className="uppercase text-xl font-medium my-8">list borrow device</p>
      <ListBorrow {...borrowLogic} />
      <p className="uppercase text-xl font-medium my-8">add device for user</p>
      <ListDevice {...deviceLogic} />
    </Container>
  );
};

export default Index;
