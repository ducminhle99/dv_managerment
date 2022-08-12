import CreateUser from 'modules/users/createUser';
import { withAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withAuthentication(CreateUser);
IndexUnAuthenticated.layout = 'admin';

export default IndexUnAuthenticated;
