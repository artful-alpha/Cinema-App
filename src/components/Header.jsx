/*eslint-disable*/

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogining } from "../redux/action/setLogining";

const header = (props) => {
  const auth = useSelector((state)=>state.userAuthReducer.auth);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const handlerClick = ()=>{
    auth ? dispatch(setLogining(false)) : setIsVisible(true);
  }
  
  const handlerLogin = (e) =>{
    e.preventDefault();
 
    dispatch(setLogining(true))
    setIsVisible(false)
  }

  return (
    <>
      <header>
        <nav className='nav'>
          <a className='home' href='HOME'>
            Home {props.res}
          </a>
          {isVisible ?   (<div className="modal">
            <div className="modal-dialog">
              <form className="modal-form" onSubmit={handlerLogin} >
                <input type="text" placeholder="Ведите логин"/>
                <input type="text" placeholder="Ведите пароль"/>
                <button type="submit">Войти</button>
              </form>
            </div>
          </div> ): false}

          <button onClick={handlerClick}  className='nav btn-login'>{auth ? "Выйти": "Войти"}</button>
        </nav>
      </header>
    </>
  );
};

export default header;
