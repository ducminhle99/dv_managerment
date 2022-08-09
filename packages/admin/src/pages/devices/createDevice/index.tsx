import { withAuthentication } from 'common/hocs';
import Index from '../../../modules/device';

const IndexAuthenticated = withAuthentication(Index);
IndexAuthenticated.layout = 'admin';

export default IndexAuthenticated;
