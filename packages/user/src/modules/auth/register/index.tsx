import { useGetAddress } from 'common/hooks';
import CompanyRegisterComponent from './components/index';
import useLogic from './useLogic';

export default function Register() {
  const { handleSubmit, messageError, setMessageError, loading, setScreen, screen } = useLogic();
  const { address, loadingAddress, handleGetAddress } = useGetAddress();

  return (
    <CompanyRegisterComponent
      submit={handleSubmit}
      loading={loading}
      messageError={messageError}
      setMessageError={setMessageError}
      setScreen={setScreen}
      screen={screen}
      addressHandler={{ address, loadingAddress, handleGetAddress }}
    />
  );
}
