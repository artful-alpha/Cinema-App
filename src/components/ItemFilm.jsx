/* eslint-disable */
 
import FilmImg from "./filmImg";

const itemFilm = ({title, vote_average,poster_path}) => {
  return (
    <div className='item-film'>
      <FilmImg imgUrl={poster_path} />
      <div className='film-panel'>
        <div className='film-contro-panel'>
          <p className='film-raiting'>Рейтинг: {vote_average}</p>
          <p className='film-stars'>★</p>
          <p className='film-bookmarks'>🏲</p>
        </div>
        <div className='film-desctiption'>{title}</div>
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
