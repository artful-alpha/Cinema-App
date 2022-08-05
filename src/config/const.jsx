export const typeSorted = {
  POPULARITY_DOWN: "POPULARITY_DOWN",
  POPULARITY_UP: "POPULARITY_UP",
  RATING_DOWN: "RATING_DOWN",
  RATING_UP: "RATING_UP",
};
export const userOptionsChoiceData = [
  { value: "default", title: "По-умолчанию" },
  { value: "later", title: "Смотреть позже" },
  { value: "favorites", title: "Избранные" },
];
export const defaultFilmFilterState = {
  sortedSelect: "POPULARITY_DOWN",
  yearSelect: 0,
  genreSelect: [ ],
  page: 1
};

export const pagesControl = {
  NEXT_PAGE: "NEXT_PAGE",
  PREVIUS_PAGE: "PREVIUS_PAGE"
}
export const sortOptionsData = [
  { value: typeSorted.POPULARITY_DOWN, title: "Популярные по убыванию" },
  { value: typeSorted.POPULARITY_UP, title: "Популярные по возрастанию" },
  { value: typeSorted.RATING_DOWN, title: "Рейтинг по убыванию" },
  { value: typeSorted.RATING_UP, title: "Рейтинг по возрастанию" },
];

export const yearOptionsData = [
  { value: 0, title: "По умолчанию" },
  { value: 2020, title: "2020" },
  { value: 2019, title: "2019" },
  { value: 2018, title: "2018" },
  { value: 2017, title: "2017" },
];


export const USER_CHOICE = {
  DEFAULT: "default",
  LATER: "later",
  FAVORITES: "favorites",
};
