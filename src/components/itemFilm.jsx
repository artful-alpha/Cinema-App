import FilmImg from "./filmImg";
/* eslint-disable */
const itemFilm = ({ filmName }) => {
  return (
    <div className='item-film'>
      <FilmImg />
      <div className='film-panel'>
        <div className='film-contro-panel'>
          <p className='film-raiting'>Рейтинг: 8.4</p>
          <p className='film-stars'>★</p>
          <p className='film-bookmarks'>🏲</p>
        </div>
        <div className='film-desctiption'>{filmName}</div>
        <div className='film-more'>
          <p>
            <a href='/'>Подробней</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default itemFilm;
