import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import filmsFilterReducer from "./redux/reducers/filmsFilterReducer";
import   userAuthReducer   from "./redux/reducers/userAuthReducer";
import userChoiseFilterReducer from "./redux/reducers/userChoiseReducer";
import modalReducer from "./redux/reducers/modalReducer";
import thunk from "redux-thunk";
const AppFilm = combineReducers({
  filmsFilterReducer,
  userAuthReducer,
  modalReducer,
  userChoiseFilterReducer
});

export const store = createStore(
  AppFilm,
  composeWithDevTools(applyMiddleware(thunk))
);
