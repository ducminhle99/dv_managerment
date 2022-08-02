import { withAuthentication } from 'common/hocs';

const Index = () => {
  return <h1>OK</h1>;
};

const IndexAuthenticated = withAuthentication(Index);
IndexAuthenticated.layout = 'user';

export default IndexAuthenticated;
