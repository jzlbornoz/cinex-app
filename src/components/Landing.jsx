import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Loading } from './Loading';
import { Card } from "../components/Card";
import { Favorites } from './Favorites';
import "../style/components/Landing.css";

const Landing = () => {

    const { loading,
        trending,
        handleSelect,
        search,
        handleSearch,
        inputRef,
    } = useContext(AppContext);


    if (search.length > 0) { // Estructura de decision para que cuando se busque algo, los resultados aparezcan en toda la pantalla
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
                    <h1>RESULTS</h1>
                    <section className='Landing-grid'>
                        {trending.length >= 1 ? trending.map(film => (
                            <Card film={film} handleSelect={handleSelect} key={film.id} />
                        )) : <Loading />}
                    </section>

                </section> : <Loading />}
            </section >
        )
    } else {
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
                    <section className='Landing-favorites'>
                        <Favorites />
                    </section>
                    <h1>POPULAR</h1>
                    <section className='Landing-grid'>
                        {trending.length >= 1 ? trending.map(film => (
                            <Card film={film} handleSelect={handleSelect} key={film.id} withHear={true} />
                        )) : <Loading />}
                    </section>

                </section> : <Loading />}
            </section >
        )
    }
}



export { Landing }