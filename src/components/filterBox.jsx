 /*eslint-disable */
import {useDispatch, useSelector} from "react-redux"
import {setClearFilter} from "../redux/action/setClearAction"
import {filmsFilterState} from "../redux/selector/filmsFilterState"

const filterBox = () => {
  // const state = useSelector(filmsFilterState)
  const dispatch = useDispatch();

  const clearFilter = () => dispatch(setClearFilter());


  return (
    <div className='filters-box'>
      <p className='filters title'>Фильтры:</p>
      
      <button className='reset-all-filters' onClick={ clearFilter  }>Сбросить все фильтры</button>
    </div>
  );
};

export default filterBox;
