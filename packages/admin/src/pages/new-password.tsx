import InputPassword from 'modules/auth/inputPassword';
import { withPreAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withPreAuthentication(InputPassword);
IndexUnAuthenticated.layout = 'public';

export default IndexUnAuthenticated;
