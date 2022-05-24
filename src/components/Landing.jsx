import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "../style/components/Landing.css";

const Landing = () => {
    const { movies } = useContext(AppContext);
    return (
        <section className="Landing">
            {movies.map(movie => (
                <h3 key={movie.id}>{movie.title}</h3>
            ))}
        </section>
    )
}

export { Landing }