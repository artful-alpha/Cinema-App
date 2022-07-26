/*eslint-disable*/
import { useDispatch } from "react-redux";
import { yearOptionsData } from "../config/const";
import { sortedDate } from "../redux/action/useDateRelize";
import { setDateRelize } from "../redux/action/useDateRelize";

const dateReliz = () => {
  const dispath = useDispatch();

  const sortedDate = (e) =>{
    dispath(setDateRelize(e.target.value))
  }


  return (
    <div className='date-reliz-box'>
      <p className='date-reliz title'>Год выпуска</p>
      <select onChange={e=> sortedDate(e)} className='date-reliz selector'>
        {yearOptionsData.map( item=> (
          <option key={item.value} value={item.value} >{item.title}</option>
        ))}
      </select>
    </div>
  );
};

export default dateReliz;
