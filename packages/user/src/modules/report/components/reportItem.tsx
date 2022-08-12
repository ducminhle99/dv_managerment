import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { ButtonDelete } from 'common/components/buttons';
import { ReportType } from 'common/types/report';

type Report = {
  deviceId: number;
  deviceName: string;
  description?: string;
  typeReport?: ReportType;
};
interface Props {
  data: Report;
  handelChangeData: (id: number, data: Report) => void;
  handleRemove: (id: number) => void;
}
const ReportItem = ({ data, handleRemove, handelChangeData }: Props) => {
  const report: Report = { ...data };
  const selectChange = (e: RadioChangeEvent) => {
    handelChangeData(data.deviceId, { ...report, typeReport: e.target.value });
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handelChangeData(data.deviceId, { ...report, description: e.target.value });
  };

  return (
    <div className="my-10">
      <p className="text-[18px] font-medium mb-5">{data.deviceName}</p>
      <div className="flex justify-between pr-[160px] mb-[10px]">
        <p className="text-[14px] font-normal">description</p>
        <Radio.Group onChange={selectChange} value={data.typeReport} defaultValue={ReportType.MISSING}>
          <Radio value={ReportType.MISSING}>Missing</Radio>
          <Radio value={ReportType.BROKEN}>Broken</Radio>
        </Radio.Group>
      </div>
      <div className="flex justify-between">
        <TextArea className="resize-none h-[90px] rounded-md mr-[30px] w-full" value={data.description} onChange={handleChange} />
        <ButtonDelete handleDelete={() => handleRemove(data.deviceId)} />
      </div>
    </div>
  );
};

export default ReportItem;
