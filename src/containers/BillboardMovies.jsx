import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Loading } from '../components/Loading';
import { Card } from '../components/Card';
import '../style/components/Billboard.css';


const BillboardMovies = () => {

    const { movies, handleSelect } = useContext(AppContext);

    if (movies.length >= 20) {
        return (
            <section className='Billboard' data-aos="fade-up">
                <h2>MOVIES</h2>
                <div className="Billboard-grid">
                    {movies.map(movie => (
                        <Card film={movie} key={movie.id} handleSelect={handleSelect} withHear={true} />
                    ))}
                </div>
            </section>
        )
    } else {
        return <Loading />
    }


}


export { BillboardMovies };