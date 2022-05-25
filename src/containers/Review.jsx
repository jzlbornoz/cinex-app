import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Review = () => {
  const { state } = useContext(AppContext);
  const { selected } = state;
  return (
    <section className="Review">
      {selected.map(movie => (
        <div>{movie.title}</div>
      ))}
    </section>
  )
}

export { Review }