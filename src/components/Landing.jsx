import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Loading } from './Loading';
import { Card } from "../components/Card";
import "../style/components/Landing.css";

const Landing = () => {
    const { loading } = useContext(AppContext);
    const { trending, toSelect } = useContext(AppContext);
    const handleSelect = item => () => {
        toSelect(item);
    }
    return (
        <section className="Landing">
            {!loading ? <section className='Landing-wrapped' data-aos="fade-up" >
                <section className='Landing-menu'>
                    <Link to='/billboard/movies'><div className="Landing-movies">MOVIES</div></Link>
                    <Link to='/billboard/series'><div className="Landing-series">SERIES</div></Link>
                </section>
                <h1>Trending</h1>
                <section className='Landing-grid'>
                    {trending.map(film => (
                        <div key={film.id} onClick={handleSelect(film)}> 
                            <Card film={film} />
                        </div>
                    ))}
                </section>

            </section> : <Loading />}
        </section >
    )
}

export { Landing }