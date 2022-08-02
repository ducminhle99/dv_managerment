import ResetPassword from 'modules/auth/resetPassword';
import { withPreAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withPreAuthentication(ResetPassword);
IndexUnAuthenticated.layout = 'public';

export default IndexUnAuthenticated;
