/*eslint-disable*/
import    genre_list   from "../mockup/genre_list";
import { useDispatch } from "react-redux"; 
import CheckBox from "../components/CheckBox"

const genreFilm = () => {
 
  return (
    <div className='film-genre-box'>
      <p className='film-genre title'>Жанр:</p>

  
      {genre_list.map(item => (
        <CheckBox key={item.id} id={item.id} name={item.name}/>
        
      ))}
    </div>
  );
};

export default genreFilm;
