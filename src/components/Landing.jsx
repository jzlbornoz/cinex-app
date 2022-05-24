import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from '../components/Card';
import "../style/components/Landing.css";

const Landing = () => {
    const { movies } = useContext(AppContext);
    return (
        <section className="Landing">
            <p>Trending</p>
            <div className="Landing-grid">
                {movies.map(movie => (
                    <Card key={movie.id} film={movie} />
                ))}
            </div>
        </section>
    )
}

export { Landing }