import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Loading } from './Loading';
import { Card } from "../components/Card";
import "../style/components/Landing.css";

const Landing = () => {
    const { loading,
        trending,
        toSelect,
        search,
        handleSearch,
        inputRef,
        movies,
    } = useContext(AppContext);
    const handleSelect = item => () => {
        toSelect(item);
    }
    return (
        <section className="Landing">
            {!loading ? <section className='Landing-wrapped' data-aos="fade-up" >
                <div className='Landing-header'><h2>Explore and find <br /> your best option
                    for <span>Entertainement</span>
                </h2>
                </div>
                <div className="Landing-search">
                    <input type="text" placeholder='Buscar'
                        ref={inputRef} value={search} onChange={handleSearch} />
                </div>
                <section className='Landing-menu'>
                    <Link to='/billboard/movies'><div className="Landing-movies">MOVIES</div></Link>
                    <Link to='/billboard/series'><div className="Landing-series">SERIES</div></Link>
                </section>
                <section className='Landing-grid'>
                    <div onClick={handleSelect(movies[9])}>
                        <Card film={movies[9]} />
                    </div>
                    <div onClick={handleSelect(movies[7])}>
                        <Card film={movies[7]} />
                    </div>

                </section>
                <h1>POPULAR</h1>
                <section className='Landing-grid'>
                    {trending.length >= 1 ? trending.map(film => (
                        <div key={film.id} onClick={handleSelect(film)}>
                            <Card film={film} />
                        </div>
                    )) : <Loading />}
                </section>

            </section> : <Loading />}
        </section >
    )
}

export { Landing }