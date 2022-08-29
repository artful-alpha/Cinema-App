/*eslint-disable */
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { list_films } from "../mockup/list_films";
import filmImg from "./filmImg";

export default function filmPage({ test }) {
  const { id } = useParams();
  const film = list_films.find((item) => item.id == Number(id));
  // const navigator = useNavigate();
  // console.log(navigator);
  return (
    <div
      className='film-page'
      style={{
        background: `url(http://image.tmdb.org/t/p/w300/${film.poster_path})`,
      }}>
      <img src={`http://image.tmdb.org/t/p/w300/${film.poster_path}`} alt='' />
      <div className='film-page-desctiptor'>
        <p className='film-page-title'>{film.title}</p>
        <p className='film-page-vote'>Оценка: {film.vote_average}</p>
        <p className='film-overview'>{film.overview}</p>
        <p>Дата выхода {film.release_date}</p>
      </div>
    </div>
  );
}
