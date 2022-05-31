import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Loading } from '../components/Loading';
import { Card } from '../components/Card';
import '../style/components/Billboard.css';


const BillboardMovies = () => {

    const { movies, toSelect, series } = useContext(AppContext);
    const handleSelect = item => () => {
        toSelect(item);
    }
    if (movies.length >= 20) {
        return (
            <section className='Billboard' data-aos="fade-up">
                <p>MOVIES</p>
                <div className="Billboard-grid">
                    {movies.map(movie => (
                        <div key={movie.id} onClick={handleSelect(movie)}>
                            <Card film={movie} />
                        </div>
                    ))}
                </div>
                <p>SERIES</p>
                <div className="Billboard-grid">
                    {series.map(serie => (
                        <div key={serie.id} onClick={handleSelect(serie)} >
                            <Card film={serie} />
                        </div>
                    ))}
                </div>
            </section>
        )
    } else {
        return <Loading />
    }


}


export { BillboardMovies };