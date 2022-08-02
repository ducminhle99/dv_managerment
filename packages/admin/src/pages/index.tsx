import { withAuthentication } from 'common/hocs';
import Dashboard from '../modules/dashboard/index';

const IndexAuthenticated = withAuthentication(Dashboard);
IndexAuthenticated.layout = 'admin';

export default IndexAuthenticated;
