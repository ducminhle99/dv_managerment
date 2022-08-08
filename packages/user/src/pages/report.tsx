import Report from 'modules/report';
import { withAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withAuthentication(Report);
IndexUnAuthenticated.layout = 'user';

export default IndexUnAuthenticated;
