import changePassword from 'modules/security/changePassword';
import { withAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withAuthentication(changePassword);
IndexUnAuthenticated.layout = 'admin';

export default IndexUnAuthenticated;
