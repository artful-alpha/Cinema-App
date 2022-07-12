import { actionCreator } from "./actionCreator";

const getFilmsAction = "Get Films";
const setFilms = actionCreator(getFilmsAction);

export { getFilmsAction, setFilms };
