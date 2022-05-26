import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../style/containers/Review.css'

const Review = () => {
  const { state } = useContext(AppContext);
  const { selected } = state;
  const Img = "https://image.tmdb.org/t/p/w300";
  return (
    <section className="Review">
      {selected.map(movie => (
        <section className='Review-wrapped' key={movie.id + 1}>
          <img src={Img + movie.poster_path} alt={movie.title} />
          <div className="Review-text">
            <h3>{movie.title}</h3>
            <p><b>Review: </b>{movie.overview}</p><br />
            <p><b>Release Date: </b> {movie.release_date}</p><br />
            <p><b>Original Language: </b> {movie.original_language}</p><br />
            <p><b>Popularity: </b> {movie.popularity}</p><br />
            <p><b>Vote Average:</b> {movie.vote_average}</p>
          </div>
        </section>
      ))}
    </section>
  )
}

export { Review }