import CreateDeviceComponent from './components/createDevice';
import EditDeviceComponent from './components/editDevice';
import { useCreateDevice, useEditDevice } from './useLogic';
function CreateDevice() {
  const { handleSubmit, messageError, setMessageError, brandData, categoryData, loading } = useCreateDevice();
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
function EditDevice({ id }: { id: number }) {
  const { data, loading, handleSubmit, brandData, categoryData } = useEditDevice(id);
  return <EditDeviceComponent brandData={brandData} categoryData={categoryData} submit={handleSubmit} data={data} loading={loading} />;
}
export { EditDevice, CreateDevice };
