import { withAuthentication } from 'common/hocs';
import ListBorrow from 'modules/list_borrow';

const IndexAuthenticated = withAuthentication(ListBorrow);
IndexAuthenticated.layout = 'admin';

export default IndexAuthenticated;
