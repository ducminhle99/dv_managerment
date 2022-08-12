import { ReportType } from 'common/types/report';
import { useEffect, useState } from 'react';

type ReportReq = {
  deviceId: number;
  deviceName: string;
};
type Report = {
  deviceId: number;
  deviceName: string;
  description?: string;
  typeReport?: ReportType;
};
type listRequest = {
  data: ReportReq[];
};
export default function useLogic({ data }: listRequest) {
  const [listDevice, setListdevice] = useState<Report[]>([]);
  const [messageError, setMessageError] = useState('');
  useEffect(() => {
    if (data.length === 0) {
      setMessageError('no data');
      return;
    }
    const listReq = data.map((item) => ({
      deviceId: item.deviceId,
      deviceName: item.deviceName,
      ReportType: ReportType.MISSING,
      description: '',
    }));
    setListdevice(listReq);
  }, []);

  const handelChangeData = (id: number, report: Report) => {
    if (listDevice.length === 0) {
      setMessageError('list device is empty');
      return;
    }
    const newList = listDevice.map((device) => (device.deviceId === id ? { ...device, ...report } : device));
    setListdevice(newList);
  };
  const handleRemove = (id: number) => {
    if (listDevice.length === 0) {
      setMessageError('list device is empty');
      return;
    }
    const newList = listDevice.filter((device) => device.deviceId != id);
    setListdevice(newList);
  };
  const handleReport = () => {
    setMessageError('cannot report this list device');
  };
  return { listDevice, handelChangeData, handleRemove, handleReport, messageError };
}
