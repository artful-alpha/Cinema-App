/* eslint-disable */
import { list_films } from "../../mockup/list_films";
import { filmsFilterState } from "./filmsFilterState";
import { useSelector } from "react-redux/es/exports";
import { sortedFilm ,filtredYear, filterGenres} from "../../utils/helpUtils";
import { useGetChoiseFilms } from "./useGetChoiseFilms";
export default function useGetFilms() {
  const { sortedSelect, yearSelect, genreSelect } =
    useSelector(filmsFilterState);

  const choiseFilter = useSelector(state=> state.userChoiseFilterReducer.userChoiseFilter)
  const isAuth = useSelector(state=>state.userAuthReducer.auth);
  const userChoiseFilms = useGetChoiseFilms();
  const sortedListFilms = list_films.sort(sortedFilm(sortedSelect));
  const allFilms = isAuth ? userChoiseFilms : sortedListFilms;



  return allFilms.filter( (film)=>{
    return filtredYear(yearSelect, film.release_date) && filterGenres(genreSelect,film.genre_ids)  
    
  })
}
