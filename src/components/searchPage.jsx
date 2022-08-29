/*eslint-disable*/
import { list_films } from "../mockup/list_films";
import GenreFilm from "./genreFilm";
import { useState } from "react";
import { useSelector } from "react-redux";
import ItemFilm from "./ItemFilm";
import { Link } from "react-router-dom";

export default function searchPage() {
  const [step, setStep] = useState(0);
  const { genreSelect } = useSelector((state) => state.filmsFilterReducer);
  const [raiting, setRaiting] = useState("");
  const [popularity, setPopularity] = useState("");
  const [numbFilm, setNubmFilm] = useState(0);
  const [filtationFilm, setFilrationFilm] = useState([]);

  const handlRaiting = (e) => {
    const value = e.target.getAttribute("data-raiting");

    setRaiting(value);
  };

  const handlPopular = (e) => {
    const value = e.target.getAttribute("data-popularity");

    setPopularity(value);
  };

  const showFilm = () => {
    setStep(step + 1);
    filtration(list_films, genreSelect, raiting, popularity);
  };

  const filtration = (list_films, genreSelect, raiting, popularity) => {
    console.log(raiting);
    const newlist = list_films
      .filter((film) => {
        return film.genre_ids.some((oneGenre) =>
          genreSelect.includes(oneGenre)
        );
      })
      .filter((film) => {
        if (raiting == "low") {
          return film.vote_average <= 5;
        } else {
          return film.vote_average > 5;
        }
      })
      .filter((film) => {
        if (popularity == "popular") {
          return film.popularity >= 100 && film.vote_count >= 200;
        }
        return true;
      });
    console.log(newlist);
    setFilrationFilm(newlist);
  };

  return (
    <div className='sorted-box'>
      {step == 0 ? (
        <fieldset>
          <GenreFilm />
          <button type='button' onClick={() => setStep(step + 1)}>
            NEXT
          </button>
        </fieldset>
      ) : (
        false
      )}

      {step == 1 ? (
        <>
          <h1>Оценка фильма</h1>
          <fieldset>
            <label htmlFor='low'>
              <input
                type='radio'
                id='low'
                data-raiting='low'
                onChange={handlRaiting}
              />
              Низкий
            </label>
            <hr />
            <label htmlFor='high'>
              <input
                type='radio'
                id='high'
                data-raiting='high'
                onChange={handlRaiting}
              />
              Высокий
            </label>
          </fieldset>
          <button type='button' onClick={() => setStep(step + 1)}>
            NEXT
          </button>
        </>
      ) : (
        false
      )}

      {step == 2 ? (
        <>
          <fieldset>
            <label htmlFor='popular'>
              <input
                type='radio'
                id='popular'
                data-popularity='popular'
                onChange={handlPopular}
              />
              Популярный
            </label>
            <hr />
            <label htmlFor='noname'>
              <input
                type='radio'
                id='noname'
                data-popularity='noname'
                onChange={handlPopular}
              />
              Ноунейм
            </label>
          </fieldset>
          <button type='button' onClick={() => showFilm()}>
            NEXT
          </button>
        </>
      ) : (
        false
      )}

      {step == 3 ? (
        <>
          <div>
            {filtationFilm.length > 0 && numbFilm < filtationFilm.length ? (
              <>
                <ItemFilm {...filtationFilm[numbFilm]} />
                <button onClick={() => setNubmFilm(numbFilm + 1)}>
                  Неподходит
                </button>
                <button>
                  <Link to={`/film/${filtationFilm[numbFilm].id}`}>
                    Подходит
                  </Link>
                </button>
                }
              </>
            ) : (
              <h2>Таких фильмов нет!</h2>
            )}
          </div>
        </>
      ) : (
        false
      )}
    </div>
  );
}
