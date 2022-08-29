/*eslint-disable*/

import { useDispatch, useSelector } from "react-redux";
import { setLogining } from "../redux/action/setLogining";
import { setUpdateModal } from "../redux/action/modalAction";
import Modal from "./modal";
import { Link } from "react-router-dom";
const header = (props) => {
  const auth = useSelector((state) => state.userAuthReducer.auth);
  const modalStatus = useSelector((state) => state.modalReducer.modal);
  const dispatch = useDispatch();

  const handlerClick = () => {
    auth ? dispatch(setLogining(false)) : dispatch(setUpdateModal(true));
  };

  return (
    <>
      <header>
        <nav className='nav'>
          <Link to='/' className='home'>
            Home
          </Link>
          <Link to='/search-page' className='search-page'>
            Search
          </Link>
          {modalStatus ? <Modal /> : false}

          <button onClick={handlerClick} className='nav btn-login'>
            {auth ? "Выйти" : "Войти"}
          </button>
        </nav>
      </header>
    </>
  );
};

export default header;
