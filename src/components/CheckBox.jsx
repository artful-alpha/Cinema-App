/*eslint-disable*/
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { setTogleGenre } from "../redux/action/setTogleGenre";
 
import filmsFilterReducer from "../redux/reducers/filmsFilterReducer"
export default function CheckBox({id,name}) {
  const dispatch = useDispatch();
  const isChecked = useSelector(state  => state.filmsFilterReducer.genreSelect.includes(id))
  const sortedGenre= ()=>{
    dispatch(setTogleGenre(id))
  }

  return (
    <label>
     <input  onChange= {sortedGenre} id={id} checked={isChecked} type='checkbox' />
      {name}
  </label>
  )
}
