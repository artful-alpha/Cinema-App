/* eslint-disable */
import { typeSorted } from "../config/const";
export const getYear = (date ) => new Date(date).getFullYear();
 
export const filtredYear = (year, release_date) => {
 return  !year || getYear(release_date) == year;
}
export const filterGenres = (genresSelect, genre_ids)=>{
  return !genresSelect.length || isFilmInArr(genresSelect, genre_ids);
}

export const isFilmInArr = (arr, item) => item.find((id) => arr.includes(id));


export function sortedFilm(sort) {
  switch (sort) {
    case typeSorted.POPULARITY_DOWN:
        return ({ popularity: a }, { popularity: b }) => b - a;
    case typeSorted.POPULARITY_UP:
        return ({ popularity: a }, { popularity: b }) => a - b;
    case typeSorted.RATING_DOWN:
        return ({ vote_average: a }, { vote_average: b }) => b - a;
    case typeSorted.RATING_UP:
    default:
        return ({ vote_average: a }, { vote_average: b }) => a - b;
}
}


export const getPages = (page)=>{
  return [(page*10)-10, (page*10)]
}