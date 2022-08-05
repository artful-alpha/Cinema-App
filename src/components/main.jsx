import Sidebar from "./sidebar";

/* eslint-disable */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import useGetFilms from "../redux/selector/useGetFilms";
import { useGetPage } from "../redux/selector/useGetPage";
import { getPages } from "../utils/helpUtils";
import ItemFilm from "./ItemFilm";
 import { useGetChoiseFilms } from "../redux/selector/useGetChoiseFilms";

const main = () => {
  const nowFilterFilms = useGetFilms();
  const page = useSelector(useGetPage);
  const userChoiseFilms = useGetChoiseFilms();
  const isAuth = useSelector((state)=> state.userAuthReducer.auth)
 
  useEffect( ()=>{
    localStorage.setItem("authStatus", isAuth ) 
  }, [isAuth])

  return (
    <div className='countainer-content'>
      <Sidebar />
      <div className='container-films'>
      {nowFilterFilms.slice(...getPages(page)).map((item) => (
          <ItemFilm key={item.id} {...item}/> 
        ))}
 
      </div>
    </div>
  );
};

export default main;
