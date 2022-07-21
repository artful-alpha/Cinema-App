const filmImg = ({imgUrl}) => {
  
  return <img className='film-img' src={`http://image.tmdb.org/t/p/w300/${imgUrl}`} alt='' />;
};

export default filmImg;
