import React from 'react';
import ListBorrow from './components';
import useLogic from './useLogic';

const Index = () => {
  const borrowLogic = useLogic();
  return <ListBorrow {...borrowLogic} />;
};

export default Index;
