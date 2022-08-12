import { ButtonCreate, ButtonUpdateInList } from 'common/components/buttons';
import { withAuthentication } from 'common/hocs';

const Index = () => {
  return (
    <>
      <h1>list device page</h1>
      <ButtonCreate title="ADD NEW" action="/devices/createDevice" />
      <ButtonUpdateInList title="EDIT" path="/devices/editDevice" />
    </>
  );
};

const IndexAuthenticated = withAuthentication(Index);
IndexAuthenticated.layout = 'admin';

export default IndexAuthenticated;
