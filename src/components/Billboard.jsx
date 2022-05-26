import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Loading } from '../components/Loading';
import { Card } from '../components/Card';
import '../style/components/Billboard.css';


const Billboard = () => {

    const { movies, toSelect, series } = useContext(AppContext);
    const handleSelect = item => () => {
        toSelect(item);
    }
    if (movies.length > 4) {
        return (
            <section className='Billboard' data-aos="fade-up">
                <p>MOVIES</p>
                <div className="Billboard-grid">
                    {movies.map(movie => (
                        <Card film={movie} key={movie.id} onClick={handleSelect(movie)} />
                    ))}
                </div>
                <p>SERIES</p>
                <div className="Billboard-grid">
                    {series.map(serie => (
                        <Card film={serie} key={serie.id} onClick={handleSelect(serie)} />
                    ))}
                </div>
            </section>
        )
    } else {
        return <Loading />
    }


}


export { Billboard };