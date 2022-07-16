import Sidebar from "./sidebar";

/* eslint-disable */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import useGetFilms from "../redux/selector/useGetFilms";

const main = () => {
  const nowFilterFilms = useGetFilms();

  return (
    <div className='countainer-content'>
      <Sidebar />
      <div className='container-films'>
        {nowFilterFilms.map((item) => (
          <p key={item.popularity}>
            {item.popularity}
            {item.title}
            <br />
          </p>
        ))}
      </div>
    </div>
  );
};

export default main;
