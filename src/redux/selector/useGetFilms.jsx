/* eslint-disable */
import { list_films } from "../../mockup/list_films";
import { filmsFilterState } from "./filmsFilterState";
import { useSelector } from "react-redux/es/exports";
import { sortedFilm ,filtredYear, filterGenres} from "../../utils/helpUtils";
export default function useGetFilms() {
  const { sortedSelect, yearSelect, genreSelect } =
    useSelector(filmsFilterState);

  const sortedListFilms = list_films.sort(sortedFilm(sortedSelect));

  return sortedListFilms.filter( (film)=>{
    return filtredYear(yearSelect, film.release_date) && filterGenres(genreSelect,film.genre_ids)
    
  })
}
