import ResetPassword from 'modules/auth/resetPassword';
import { withPreAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withPreAuthentication(ResetPassword);

export default IndexUnAuthenticated;
