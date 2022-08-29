/*eslint-disable*/

import { setToogleSeeLater, toogleSeeLater } from "../action/setToogleSeeLater";
import { updateUserChoise } from "../../utils/helpUtils";
import { setToogleFavorite, toogleFavorite } from "../action/setToogleFavorite";
import { userChoise } from "../action/setUserChoiseFilter";
const initialState = {
  userChoiseFilter: "default",
  seeLater: [],
  favoriteFilm: [],
};

export default function userChoiseFilterReducer(state = initialState, action) {
  switch (action.type) {
    case userChoise:
      return { ...state, userChoiseFilter: action.payload };

    case toogleSeeLater:
      return {
        ...state,
        seeLater: updateUserChoise(state.seeLater, action.payload),
      };
    case toogleFavorite:
      return {
        ...state,
        favoriteFilm: updateUserChoise(state.favoriteFilm, action.payload),
      };
    default:
      return state;
  }
}
