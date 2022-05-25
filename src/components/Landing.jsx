import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from '../components/Card';
import { Loading } from './Loading';
import "../style/components/Landing.css";

const Landing = () => {
    const { movies, loading, toSelect } = useContext(AppContext);
    const handleSelect = item => () => {
        toSelect(item);
    };
    return (
        <section className="Landing">
            <p>Trending</p>
            <div className="Landing-grid">
                {!loading ? movies.map(movie => (
                    <div data-aos="fade-up" key={movie.id} onClick={handleSelect(movie)}>
                        <Card film={movie} />
                    </div>
                )) : <Loading />}
            </div>
        </section>
    )
}

export { Landing }