const sortedSelector = () => {
  return (
    <>
      <p className='sorted title'>Сортировать по</p>
      <select className='sorted selector'>
        <option>Популярные по убиванию</option>

        <option>Популярные по возрастанию</option>
      </select>
    </>
  );
};

export default sortedSelector;
