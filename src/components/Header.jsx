/*eslint-disable*/

 
import { useDispatch, useSelector } from "react-redux";
import { setLogining } from "../redux/action/setLogining";
import { setUpdateModal } from "../redux/action/modalAction";
import Modal from "./modal";
const header = (props) => {
  const auth = useSelector((state)=>state.userAuthReducer.auth);
  const modalStatus = useSelector((state)=>state.modalReducer.modal)
  const dispatch = useDispatch();
  
  const handlerClick = ()=>{
    auth ?  dispatch(setLogining(false)) : dispatch(setUpdateModal(true));
  }
  
 

  return (
    <>
      <header>
        <nav className='nav'>
          <a className='home' href='HOME'>
            Home {props.res}
          </a>
          {modalStatus ?  <Modal  /> : false}

          <button onClick={handlerClick}  className='nav btn-login'>{auth ? "Выйти": "Войти"}</button>
        </nav>
      </header>
    </>
  );
};

export default header;
