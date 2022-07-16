import { defaultFilmFilterState } from "../../config/const";

export default function filmsFilterReducer(
  state = defaultFilmFilterState,
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}
