import FilterBox from "./filterBox";
import SortedSelector from "./sortedSelector";
import DateReliz from "./dateReliz";
import GenreFilm from "./genreFilm";
import PaginationBox from "./paginationBox";

const sidebar = () => {
  return (
    <div className='sidebar'>
      <FilterBox />

      <div className='sorted-box'>
        <SortedSelector />
        <DateReliz />
        <GenreFilm />
        <PaginationBox />
      </div>
    </div>
  );
};

export default sidebar;
