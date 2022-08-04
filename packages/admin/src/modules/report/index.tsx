import Report from './components/report';
import useLogic from './useAccept';
import useData from './useData';
function Index({ id }: { id: number }) {
  const { data } = useData(id);
  const { handleAccept, loading, messageError } = useLogic();
  return <Report {...data} message={messageError} onAccept={() => handleAccept(id)} loading={loading} />;
}

export default Index;
