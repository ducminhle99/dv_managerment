import Container from 'common/components/container';
import MessageErrors from 'common/components/msgError';
import { TableListData } from 'common/components/tableData';
interface Props {
  data: object[];
  header?: any;
  limit: number;
  total: number;
  page: number;
  loading?: boolean;
  handleChangePage: (page: number, limit: number) => void;
  messageError: string;
}

const ListReport = ({ data, limit, page, total, loading, handleChangePage, messageError }: Props) => {
  return (
    <Container>
      <MessageErrors message={messageError} />
      <TableListData data={data} header={[]} limit={limit} page={page} total={total} loading={loading} handleChangePage={handleChangePage} />
    </Container>
  );
};

export default ListReport;
