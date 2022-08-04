import changePassword from 'modules/security/changePassword';
import { withAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withAuthentication(changePassword);
IndexUnAuthenticated.layout = 'user';

export default IndexUnAuthenticated;
