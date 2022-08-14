import { withAuthentication } from 'common/hocs';

import UserBorrow from 'modules/user_borrow';

const IndexAuthenticated = withAuthentication(UserBorrow);
IndexAuthenticated.layout = 'admin';

export default IndexAuthenticated;
