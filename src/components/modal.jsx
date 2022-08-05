/*eslint-disable */
 
import { useDispatch  } from "react-redux";
import { setLogining } from "../redux/action/setLogining";
import { setUpdateModal } from "../redux/action/modalAction";
export default function modal( ) {
 
    const dispatch = useDispatch();


    const handlerLogin = (e) =>{
        e.preventDefault();
     
        dispatch(setLogining(true))
        dispatch(setUpdateModal(false))
      }
 
 

  return (
    <div className="modal">
    <div className="modal-dialog">
      <form className="modal-form" onSubmit={ handlerLogin } >
        <input type="text" placeholder="Ведите логин"/>
        <input type="text" placeholder="Ведите пароль"/>
        <button type="submit">Войти</button>
      </form>
    </div>
  </div> 
  )
}
