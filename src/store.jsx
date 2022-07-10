import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import listFilm from "./redux/reducers/listFilmReducer";
const AppFilm = combineReducers({
  listFilm,
});

export const store = createStore(AppFilm, composeWithDevTools());
