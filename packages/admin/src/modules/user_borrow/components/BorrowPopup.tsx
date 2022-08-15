import { DeleteOutlined } from '@ant-design/icons';
import { ButtonCreate } from 'common/components/buttons';
import ModalConfirm from 'common/components/modalConfirm';
import { DeviceSelect } from '../useDeviceLogic';

interface Props {
  openModal: boolean;
  showModal: (open: boolean) => void;
  listDevice: DeviceSelect[];
  removeDevice: (id: number) => void;
}
const BorrowPopup = ({ openModal, showModal, listDevice, removeDevice }: Props) => {
  return (
    <ModalConfirm
      open={openModal}
      setOpen={() => showModal(false)}
      body={
        <div className="flex flex-col items-center rounded-lg">
          <p className="font-medium uppercase text-[20px] mb-5">confirm to add borrow device</p>
          {listDevice.map((device) => (
            <div className="w-full flex justify-between item" key={device.id}>
              <p className="font-medium text-[18px] mb-5">{device.name}</p>
              <DeleteOutlined className="text-red-500 text-[20px] cursor-pointer" onClick={() => removeDevice(device.id)} />
            </div>
          ))}

          <ButtonCreate title="OK" action={() => showModal(false)} />
        </div>
      }
    />
  );
};

export default BorrowPopup;
