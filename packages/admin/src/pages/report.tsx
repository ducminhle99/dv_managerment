import { withAuthentication } from 'common/hocs';
import Report from 'modules/report';
import { useRouter } from 'next/router';
import ListReport from 'modules/report_list';

const Index = () => {
  const router = useRouter();
  const id = router.query['id'];
  if (id && Number(id)) {
    return <Report id={+id} />;
  }
  return <ListReport />;
};

const IndexAuthenticated = withAuthentication(Index);
IndexAuthenticated.layout = 'admin';

export default IndexAuthenticated;
