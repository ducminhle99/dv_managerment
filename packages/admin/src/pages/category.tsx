import { withAuthentication } from 'common/hocs';
import ListCategory from 'modules/setting/category';
const Index = () => {
  return <ListCategory />;
};

const IndexAuthenticated = withAuthentication(Index);
IndexAuthenticated.layout = 'admin';

export default IndexAuthenticated;
