import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from '../components/Card';
import '../style/components/Billboard.css'


const Billboard = () => {
    const { movies, toSelect } = useContext(AppContext);
    const handleSelect = item => () => {
        toSelect(item);
    }
    return (
        <section className='Billboard'>
            <p>Trending</p>
            <div className="Billboard-grid">
                {movies.map(movie => (
                    <div data-aos="fade-up" key={movie.id} onClick={handleSelect(movie)}>
                        <Card film={movie} />
                    </div>
                ))}
            </div>
        </section>
    )
}


export { Billboard };