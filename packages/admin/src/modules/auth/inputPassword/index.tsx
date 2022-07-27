import InputPasswordComponent from './components/index';
import useLogic from './useLogic';

function InputPassword() {
  const { handleSubmit, messageError, setMessageError, loading } = useLogic();

  return <InputPasswordComponent submit={handleSubmit} loading={loading} messageError={messageError} setMessageError={setMessageError} />;
}

export default InputPassword;
