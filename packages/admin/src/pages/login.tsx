import Login from 'modules/auth/login';
import { withPreAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withPreAuthentication(Login);
IndexUnAuthenticated.layout = 'public';

export default IndexUnAuthenticated;
