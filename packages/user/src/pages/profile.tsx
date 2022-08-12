import ProfileUser from 'modules/auth/profileUser';
import { withAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withAuthentication(ProfileUser);
IndexUnAuthenticated.layout = 'user';

export default IndexUnAuthenticated;
