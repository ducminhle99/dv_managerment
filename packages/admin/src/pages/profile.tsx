import ProfileAdmin from 'modules/auth/profileAdmin';
import { withAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withAuthentication(ProfileAdmin);
IndexUnAuthenticated.layout = 'admin';

export default IndexUnAuthenticated;
