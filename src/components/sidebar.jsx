import FilterBox from "./filterBox";
import SortedSelector from "./sortedSelector";
import DateReliz from "./dateReliz";
import GenreFilm from "./genreFilm";
import PaginationBox from "./paginationBox";
import UserAuthSort from "./UserAuthSort";
import { useSelector } from "react-redux";
const sidebar = () => {
  const auth = useSelector( (state)=>state.userAuthReducer.auth)

  return (
    <div className='sidebar'>
      <FilterBox />

      <div className='sorted-box'>
        <SortedSelector />
      {auth ?  <UserAuthSort/> : false} 
        <DateReliz />
        <GenreFilm />
        <PaginationBox />
      </div>
    </div>
  );
};

export default sidebar;
