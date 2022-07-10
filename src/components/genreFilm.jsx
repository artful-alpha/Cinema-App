const genreFilm = () => {
  return (
    <div className='film-genre-box'>
      <p className='film-genre title'>Жанр:</p>

      <label htmlFor='Боевик'>
        <input id='Боевик' type='checkbox' />
        боевик
      </label>
      <label htmlFor='Ужасы'>
        <input id='Ужасы' type='checkbox' />
        ужасы
      </label>
      <label htmlFor='html'>
        <input id='html' type='checkbox' />
        Комедия
      </label>
    </div>
  );
};

export default genreFilm;
