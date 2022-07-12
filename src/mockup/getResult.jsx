import axios from "axios";
// import { setFilms } from "../redux/action/setFilmsAction";
export const ApiRequest = () => {
  /* eslint-disable */
  return axios
    .get("/films")
    .then((res) => res.data.response)
    .then((response) => response);
};
