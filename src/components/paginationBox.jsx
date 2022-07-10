const paginationBox = () => {
  return (
    <>
      <div className='paginator-box'>
        <button className='btn-pagination next inactive'>Назад</button>
        <button className='btn-pagination prev active'>Вперед</button>
      </div>
      <div className='paginator-pages'>
        <p className='page-now'>2</p>из
        <p className='page-all'>1355</p>
      </div>
    </>
  );
};

export default paginationBox;
