import { useToggle } from '../hooks';

// eslint-disable-next-line react/display-name
export const withForceRemount = (Component: any) => (props: any) => {
  const [isRemount, setIsRemount] = useToggle(false);

  return <Component {...props} foreRemount={setIsRemount} key={isRemount} />;
};
