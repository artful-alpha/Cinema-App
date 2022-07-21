
/*eslint-disable */
import { typeSorted ,sortOptionsData} from "../config/const";
import { useDispatch, useSelector } from "react-redux";
import { filmsFilterState } from "../redux/selector/filmsFilterState";
import setClearFilter from "../redux/action/setClearAction";
import { setSortedSelector } from "../redux/action/useSortedSelector";
const sortedSelector = () => {
 
  const dispatch = useDispatch();

  
  const sorting = (e) => {
    console.log(e.target.value)
    dispatch(setSortedSelector(e.target.value))
  }
  return (
    <>
      <p className='sorted title'>Сортировать по</p>
      <select onChange={(e)=>sorting(e)} className='sorted selector'>
      {sortOptionsData.map((item)=> (
        <option  value={item.value}  key={item.value} >{item.title}</option>
      ) ) 
    }
      </select>
    </>
  );
};

export default sortedSelector;
