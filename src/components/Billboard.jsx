import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from '../components/Card';
import '../style/components/Billboard.css'


const Billboard = () => {
    const { movies, toSelect, series} = useContext(AppContext);
    const handleSelect = item => () => {
        toSelect(item);
    }
    return (
        <section className='Billboard'>
            <p>MOVIES</p>
            <div className="Billboard-grid">
                {movies.map(movie => (
                    <div data-aos="fade-up" key={movie.id} onClick={handleSelect(movie)}>
                        <Card film={movie} />
                    </div>
                ))}
            </div>
            <p>SERIES</p>
            <div className="Billboard-grid">
                {series.map(serie => (
                    <div data-aos="fade-up" key={serie.id} onClick={handleSelect(serie)}>
                        <Card film={serie} />
                    </div>
                ))}
            </div>
        </section>
    )
}


export { Billboard };