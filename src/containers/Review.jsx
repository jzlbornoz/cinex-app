import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Error } from './Error';
import '../style/containers/Review.css'

const Review = () => {
  const { state } = useContext(AppContext);
  const { selected } = state;
  const Img = "https://image.tmdb.org/t/p/w300";
  const youtubeAPI = (title, name) => {
    if (title) {
      return `https://www.youtube.com/results?search_query=${title}`;
    } else {
      return `https://www.youtube.com/results?search_query=${name}`;
    }
  };

  if (selected.length > 0) {
    return (
      <section className="Review">
        {selected.map(movie => (
          <section className='Review-wrapped' key={movie.id + 1} data-aos="fade-up">
            <img src={Img + movie.poster_path} alt={movie.title} />
            <div className="Review-text">
              <h3>{movie.title || movie.name}</h3>
              <p><b>Release Date: </b> {!movie.release_date ? <>No results</> : movie.release_date}</p><br />
              <p><b>Original Language: </b> {!movie.original_language ? <>No results </> : movie.original_language}</p><br />
              <p><b>Popularity: </b> {!movie.popularity ? <>No results </> : movie.popularity}</p><br />
              <p><b>Vote Average:</b> {!movie.vote_average ? <>No results </> : movie.vote_average}</p>
            </div>
            <a href={youtubeAPI(movie.title, movie.name)}>
              <div className="Review-button"><p>Watch</p> <i className="fa-solid fa-play" /></div>
            </a>
          </section>
        ))}
      </section>
    )
  } else {
    return <Error />
  }

}

export { Review }