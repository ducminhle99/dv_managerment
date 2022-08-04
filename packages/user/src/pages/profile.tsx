import ProfileUser from 'modules/auth/profileUser';
import { withPreAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withPreAuthentication(ProfileUser);
IndexUnAuthenticated.layout = 'user';

export default IndexUnAuthenticated;
