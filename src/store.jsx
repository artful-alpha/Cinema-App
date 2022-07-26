import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import filmsFilterReducer from "./redux/reducers/filmsFilterReducer";
import   userAuthReducer   from "./redux/reducers/userAuthReducer";
import thunk from "redux-thunk";
const AppFilm = combineReducers({
  filmsFilterReducer,
  userAuthReducer,
});

export const store = createStore(
  AppFilm,
  composeWithDevTools(applyMiddleware(thunk))
);
