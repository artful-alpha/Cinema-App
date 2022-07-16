import axios from "axios"; /* eslint-disable */
import { setFilms } from "../redux/action/setFilmsAction";
// import { setFilms } from "../redux/action/setFilmsAction";
export const ApiRequest = () => {
  return function (dispatch) {
    axios
      .get("/films")
      .then((res) => res.data.response)
      .then((response) => dispatch(setFilms(response)));
  };
};
