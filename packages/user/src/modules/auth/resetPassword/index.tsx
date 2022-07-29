import ResetPasswordComponent from 'common/components/resetPassword';
import useLogic from './useLogic';

function ResetPassword() {
  const { messageError, setMessageError, handleSubmit, loading, btnStatus } = useLogic();

  return (
    <ResetPasswordComponent
      submit={handleSubmit}
      loading={loading}
      messageError={messageError}
      setMessageError={setMessageError}
      btnStatus={btnStatus}
    />
  );
}

export default ResetPassword;
