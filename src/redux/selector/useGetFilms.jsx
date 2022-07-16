/* eslint-disable */
import { list_films } from "../../mockup/list_films";
import { filmsFilterState } from "./filmsFilterState";
import { useSelector } from "react-redux/es/exports";
import { sortedFilm } from "../../utils/helpUtils";
export default function useGetFilms() {
  const { sortedSelect, yearSelect, genreSelect } =
    useSelector(filmsFilterState);

  return list_films.sort(sortedFilm(sortedSelect));
}
