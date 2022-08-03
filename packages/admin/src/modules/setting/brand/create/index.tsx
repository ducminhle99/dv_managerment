import ButtonCreateBrandComponent from './components';
import useLogic from './useLogic';
function CreateBrand() {
  const { messageError, setMessageError, handleSubmit, loading } = useLogic();
  return <ButtonCreateBrandComponent loading={loading} submit={handleSubmit} messageError={messageError} setMessageError={setMessageError} />;
}

export default CreateBrand;
