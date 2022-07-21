export const typeSorted = {
  POPULARITY_DOWN: "POPULARITY_DOWN",
  POPULARITY_UP: "POPULARITY_UP",
  RATING_DOWN: "RATING_DOWN",
  RATING_UP: "RATING_UP",
};

export const defaultFilmFilterState = {
  sortedSelect: "POPULARITY_DOWN",
  yearSelect: 0,
  genreSelect: [],
  page: 24
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