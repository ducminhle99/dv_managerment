import { withAuthentication } from 'common/hocs';
import BorrowDevice from 'modules/borrowing_device';
const Index = () => {
  return <BorrowDevice />;
};

const IndexAuthenticated = withAuthentication(Index);
IndexAuthenticated.layout = 'user';

export default IndexAuthenticated;
