import { ButtonCreate } from 'common/components/buttons';
import Container from 'common/components/container';
import BorrowList from './components/borrowList';
import ReportList from './components/reportList';
import useBorrowLogic from './useBorrowLogic';
import useReportLogic from './useReportLogic';

const Index = () => {
  const borrowLogic = useBorrowLogic();
  const reportLogic = useReportLogic();

  return (
    <Container rootClassName="flex justify-center" className="mt-[150px] w-[1260px]">
      <p className="font-medium text-[32px]">DEVICE</p>
      <BorrowList className="my-10" {...borrowLogic} />
      <div className="flex justify-center mt-4">
        <ButtonCreate title="REPORT" action={borrowLogic.handleReport} />
      </div>
      <p className="font-medium text-[32px]">REPORT</p>
      <ReportList className="my-10" {...reportLogic} />
    </Container>
  );
};

export default Index;
