import { withAuthentication } from 'common/hocs';
import { useRouter } from 'next/router';
import { EditDevice } from '../../../modules/device';

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  return <EditDevice id={+id} />;
};

const IndexAuthenticated = withAuthentication(Index);
IndexAuthenticated.layout = 'admin';

export default IndexAuthenticated;
