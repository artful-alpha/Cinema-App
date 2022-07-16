/* eslint-disable */
import { typeSorted } from "../config/const";

export function sortedFilm(sort) {
  switch (sort) {
    case sort: {
      return ({ popularity: a }, { popularity: b }) =>
        Math.round(a) - Math.round(b);
    }
  }
}
