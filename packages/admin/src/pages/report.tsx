import { withAuthentication } from 'common/hocs';
import Report from 'modules/report';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const id = router.query['id'];
  if (id && Number(id)) {
    return <Report id={+id} />;
  }
  return <h1>list report page</h1>;
};

const IndexAuthenticated = withAuthentication(Index);
IndexAuthenticated.layout = 'admin';

export default IndexAuthenticated;
