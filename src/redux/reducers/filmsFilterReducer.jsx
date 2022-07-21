import { defaultFilmFilterState, } from "../../config/const"; //sortOptionsData
import { clearFilmsFilter } from "../action/setClearAction";
import { pageAction } from "../action/setPageAction";
import { sortedSelector } from "../action/useSortedSelector";
 
export default function filmsFilterReducer(
  state = defaultFilmFilterState,
  action
) {
  switch (action.type) {
    case pageAction :
      return {
          ...state,
          page:   action.payload  ,
      } 

    case clearFilmsFilter:
      return {
        ...state,
        ...defaultFilmFilterState
      }

    case sortedSelector:
      return {
        ...state,
        sortedSelect : action.payload
      }
    default:
      return state;
  }
}
