import Sidebar from "./sidebar";
import ItemFilm from "./itemFilm";
const main = () => {
  return (
    <div className='countainer-content'>
      <Sidebar />
      <div className='container-films'>
        <ItemFilm />
      </div>
    </div>
  );
};

export default main;
