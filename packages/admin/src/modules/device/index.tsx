import CreateDeviceComponent from './components/createDevice';
import useLogic from './useLogic';
function Index() {
  const { handleSubmit, messageError, setMessageError, brandData, categoryData, loading } = useLogic();
  return (
    <CreateDeviceComponent
      submit={handleSubmit}
      loading={loading}
      messageError={messageError}
      brandData={brandData}
      categoryData={categoryData}
      setMessageError={setMessageError}
    />
  );
}
export default Index;
