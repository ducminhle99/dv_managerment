import { ButtonBack, ButtonCreate } from 'common/components/buttons';
import Container from 'common/components/container';
import MessageErrors from 'common/components/msgError';
import ReportItem from './components/reportItem';
import { test } from './mock-data';
import useLogic from './useLogic';

const Report = () => {
  const { listDevice, handleRemove, handleReport, handelChangeData, messageError } = useLogic({ data: test });

  return (
    <Container title="Report" rootClassName="flex justify-center pt-[76px]" className="w-[800px]">
      {listDevice.map((data) => (
        <ReportItem key={data.deviceId} data={data} handelChangeData={handelChangeData} handleRemove={handleRemove} />
      ))}
      <MessageErrors message={messageError} className="mr-[130px]" />
      <div className="flex justify-end pr-[130px] mt-[20px]">
        <ButtonBack className="mr-5" />
        <ButtonCreate action={handleReport} title="REPORT" />
      </div>
    </Container>
  );
};

export default Report;
