import React from 'react';
import ListReport from './components';
import useLogic from './useLogic';

const Index = () => {
  const { messageError, data, page, total, limit, loading, handleChangePage } = useLogic();
  return (
    <ListReport
      messageError={messageError}
      data={data}
      limit={limit}
      page={page}
      total={total}
      loading={loading}
      handleChangePage={handleChangePage}
    />
  );
};

export default Index;
