import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import filmsFilterReducer from "./redux/reducers/filmsFilterReducer";
import thunk from "redux-thunk";
const AppFilm = combineReducers({
  filmsFilterReducer,
});

export const store = createStore(
  AppFilm,
  composeWithDevTools(applyMiddleware(thunk))
);
