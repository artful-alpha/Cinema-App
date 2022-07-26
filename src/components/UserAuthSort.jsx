/*eslint-disable*/
import { userOptionsChoiceData } from "../config/const";
import { useDispatch } from "react-redux";
export default function UserAuthSort() {
    const dispath = useDispatch();

    const sortedDate = (e) =>{
    console.log(e.target.value)
    }
  
  
    return (
      <div className='date-reliz-box'>
        <p className='date-reliz title'>Выбор пользователя</p>
        <select onChange={e=> sortedDate(e)} className='date-reliz selector'>
          {userOptionsChoiceData.map( item=> (
            <option key={item.value} value={item.value} >{item.title}</option>
          ))}
        </select>
      </div>
    );
}
