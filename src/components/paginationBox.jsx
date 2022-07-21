/*eslint-disable*/
import useGetFilms from "../redux/selector/useGetFilms";
import { useGetPage } from "../redux/selector/useGetPage";
import { useDispatch, useSelector } from "react-redux";
import { usePageState } from "../redux/selector/usePageState";
import { pagesControl } from "../config/const";
import {setPage} from "../redux/action/setPageAction";
const paginationBox = () => {
  const nowFilterFilms = useGetFilms();
  const nowPage = useSelector(useGetPage);
  const dispatch = useDispatch();

  const changePage = (newPage) => dispatch(setPage(newPage))


  const totalPage = Math.ceil(nowFilterFilms.length/10);
  return (
    <>
      <div className='paginator-box'>
        <button  disabled={nowPage <= 1} className="btn-pagination" onClick={()=>changePage(nowPage-1)}  >Назад</button>
        <button disabled={nowPage ==totalPage} onClick={()=>changePage(nowPage+1) }className='btn-pagination '>Вперед</button>
      </div>
      <div className='paginator-pages'>
        <p className='page-now'>{nowPage}</p>из
        <p className='page-all'>{totalPage}</p>
      </div>
    </>
  );
};

export default paginationBox;
