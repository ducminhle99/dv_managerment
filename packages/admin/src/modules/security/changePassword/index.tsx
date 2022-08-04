import ChangePasswordComponent from 'common/components/changePassword';
import useLogic from './useLogic';

function ChangePassword() {
  const { handleSubmit, messageError, setMessageError, loading } = useLogic();

  return <ChangePasswordComponent submit={handleSubmit} loading={loading} messageError={messageError} setMessageError={setMessageError} />;
}

export default ChangePassword;
