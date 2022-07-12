import Sidebar from "./sidebar";
import ItemFilm from "./itemFilm";

/* eslint-disable */
import { allFilm } from "../redux/selectorsState";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import axios from "axios";
import { ApiRequest } from "../mockup/getResult";
import { getFilmsAction, setFilms } from "../redux/action/setFilmsAction";
/* eslint-enable */
const main = () => {
  /* eslint-disable */
  const dispatch = useDispatch();
  const films = useSelector(allFilm);
  const film = ApiRequest().then((res) => dispatch(setFilms(res)));
  /* eslint-enable */

  useEffect(() => {});
  return (
    <div className='countainer-content'>
      <Sidebar />
      <div className='container-films'>
        <h1>{console.log(films)}</h1>
        <ItemFilm />
      </div>
    </div>
  );
};

export default main;
