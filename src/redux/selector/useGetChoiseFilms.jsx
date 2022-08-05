/*eslint-disable*/
import { USER_CHOICE } from "../../config/const";
import { useSelector } from "react-redux"
import { list_films } from "../../mockup/list_films";
export const useGetChoiseFilms = ()=>{
    const {userChoiseFilter, seeLater,favoriteFilm} = useSelector((state)=> state.userChoiseFilterReducer)

    switch (userChoiseFilter) {
        case USER_CHOICE.FAVORITES:
            return list_films.filter( item=> favoriteFilm.includes(item.id));
        case USER_CHOICE.LATER:
            return list_films.filter(item => seeLater.includes(item.id));
        default: 
        return list_films;
    }

}