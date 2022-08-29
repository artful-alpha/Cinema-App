import Sidebar from "./sidebar";

/* eslint-disable */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import useGetFilms from "../redux/selector/useGetFilms";
import { useGetPage } from "../redux/selector/useGetPage";
import { getPages } from "../utils/helpUtils";
import ItemFilm from "./ItemFilm";
import { useGetChoiseFilms } from "../redux/selector/useGetChoiseFilms";
import FilmPage from "./filmPage";
import SearchPage from "./searchPage";

import { Routes, Route } from "react-router-dom";

const main = () => {
  const nowFilterFilms = useGetFilms();
  const page = useSelector(useGetPage);
  const userChoiseFilms = useGetChoiseFilms();
  const isAuth = useSelector((state) => state.userAuthReducer.auth);

  useEffect(() => {
    localStorage.setItem("authStatus", isAuth);
  }, [isAuth]);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='countainer-content'>
            <Sidebar />
            <div className='container-films'>
              {nowFilterFilms.slice(...getPages(page)).map((item) => (
                <ItemFilm key={item.id} {...item} />
              ))}
            </div>
          </div>
        }></Route>

      <Route path='/film/:id' element={<FilmPage test={"test"} key='ttt' />} />
      <Route path='/search-page' element={<SearchPage></SearchPage>} />
    </Routes>
  );
};

export default main;
