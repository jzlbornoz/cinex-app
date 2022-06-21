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

    const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

    // ---

    // Estructura de decision para que cuando se busque algo, los resultados aparezcan en toda la pantalla
    if (search.length > 0) {
        return (
            <section className="Landing">

                {!loading ? <section className='Landing-wrapped' data-aos="fade-up" >
                    <div className='Landing-header'><h2>Explore and find <br /> your best option
                        for <span>Entertainement</span>
                    </h2>
                    </div>
                    <div className="Landing-search">
                        <input type="text" placeholder='Search'
                            ref={inputRef} value={search} onChange={handleSearch} />
                    </div>

                    <h1>Results</h1>
                    {trending.length >= 1 ? <section className='Landing-grid'>
                        {trending.map(film => (
                            <Card film={film} handleSelect={handleSelect} key={film.id} withHeart={true} />
                        ))}
                    </section> : <Loading />}

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
                        <Link to='/billboard/movies' onClick={() => scrollTop()} ><div className="Landing-movies">Movies</div></Link>
                        <Link to='/billboard/series' onClick={() => scrollTop()}><div className="Landing-series">Series</div></Link>
                    </section>
                    <section className='Landing-favorites'>
                        <Favorites />
                    </section>
                    <h1>Popular</h1>
                    <section className='Landing-grid'>
                        {trending.length >= 1 ? trending.map(film => (
                            <Card film={film} handleSelect={handleSelect} key={film.id} withHeart={true} />
                        )) : <Loading />}
                    </section>
                </section> : <Loading />}

            </section >
        )
    }
}

export { Landing }