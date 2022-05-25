import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from '../components/Card';
import { Loading } from './Loading';
import "../style/components/Landing.css";

const Landing = () => {
    const { movies, loading } = useContext(AppContext);
    return (
        <section className="Landing">
            <p>Trending</p>
            <div className="Landing-grid">
                {!loading ? movies.map(movie => (
                    <Card key={movie.id} film={movie} />
                )) : <Loading/>}
            </div>
        </section>
    )
}

export { Landing }