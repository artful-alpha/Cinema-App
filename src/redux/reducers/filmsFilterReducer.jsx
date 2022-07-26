import { sortedDate } from "../action/useDateRelize";
import { defaultFilmFilterState, } from "../../config/const"; //sortOptionsData
import { clearFilmsFilter } from "../action/setClearAction";
import { pageAction } from "../action/setPageAction";
import { sortedSelector } from "../action/useSortedSelector";
 
 import { toogleGenre } from "../action/setTogleGenre";
 import { updateGenre } from "../../utils/helpUtils";
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
    case sortedDate:
      return {
        ...state,
        yearSelect:  Number(action.payload) 
      }
    case toogleGenre:
      return{
      ...state,
      genreSelect: updateGenre(state.genreSelect,action.payload)
    }
    default:
      return state;
  }
}
