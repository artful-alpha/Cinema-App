/*eslint-disable*/
import { useSelector } from "react-redux";
import { userOptionsChoiceData } from "../config/const";
import { useDispatch } from "react-redux";
import { setUserChoise } from "../redux/action/setUserChoiseFilter";
export default function UserAuthSort() {
 
    const auth = useSelector((state)=>state.userAuthReducer.auth);
    const dispatch = useDispatch();
    const sortedDate = (e) =>{  dispatch(setUserChoise(e.target.value))
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
