import React from 'react';
import ListReport from './components';
import useLogic from './useLogic';

const Index = () => {
  const { messageError, data, page, total, limit, handleChangePage, handleAccept, handleFilter, handleSearch } = useLogic();
  return (
    <ListReport
      messageError={messageError}
      data={data}
      limit={limit}
      page={page}
      total={total}
      loading={false}
      handleChangePage={handleChangePage}
      handleAccept={handleAccept}
      handleFilter={handleFilter}
      handleSearch={handleSearch}
    />
  );
};

export default Index;
