/* eslint-disable */

import { useDispatch, useSelector } from "react-redux";
import FilmImg from "./filmImg";
import { setUpdateModal } from "./../redux/action/modalAction";
import { setToogleSeeLater } from "../redux/action/setToogleSeeLater";
import { setToogleFavorite } from "../redux/action/setToogleFavorite";
import { Link } from "react-router-dom";

const itemFilm = ({ id, title, vote_average, poster_path }) => {
  const isAuth = useSelector((state) => state.userAuthReducer.auth);

  const dispatch = useDispatch();

  const addSeeLater = () => {
    dispatch(setToogleSeeLater(id));
  };

  const addFavorite = () => {
    dispatch(setToogleFavorite(id));
  };

  return (
    <div className='item-film'>
      <FilmImg imgUrl={poster_path} />
      <div className='film-panel'>
        <div className='film-contro-panel'>
          <p className='film-raiting'>Рейтинг: {vote_average}</p>
          <p
            onClick={() =>
              isAuth ? addSeeLater() : dispatch(setUpdateModal(true))
            }
            className='film-stars'>
            ★
          </p>
          <p
            onClick={() =>
              isAuth ? addFavorite() : dispatch(setUpdateModal(true))
            }
            className='film-bookmarks'>
            🏲
          </p>
        </div>
        <div className='film-desctiption'>{title}</div>
        <div className='film-more'>
          <p>
            <Link to={`/film/${id}`}>Подробней</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default itemFilm;
