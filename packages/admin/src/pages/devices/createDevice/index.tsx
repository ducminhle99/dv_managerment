import { withAuthentication } from 'common/hocs';
import { CreateDevice } from '../../../modules/device';

const IndexAuthenticated = withAuthentication(CreateDevice);
IndexAuthenticated.layout = 'admin';

export default IndexAuthenticated;
