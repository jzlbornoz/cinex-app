import React, { useContext } from 'react';
import "../style/components/Card.css";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AppContext } from '../context/AppContext';

const Card = ({ film, handleSelect, classI }) => {

    const { handleFavorite } = useContext(AppContext);
    const placeholder = (path, width) => {
        return path ? `https://image.tmdb.org/t/p/w${width}` + path : "http://www.proedsolutions.com/wp-content/themes/micron/images/placeholders/placeholder_large.jpg"
    }

    return (
        <section className="Card" >
            <Link to='/review'>
                <LazyLoadImage src={placeholder(film.poster_path, 300)} onClick={() => handleSelect(film)} />
            </Link>
            <div className='Card-title'><h3>{film.title ? film.title : film.name}</h3></div>
            <div className='Card-vote'><p>{film.vote_average}</p></div>
            <div className={!classI ? "Card-favorite" : classI} onClick={handleFavorite(film)}>
                <i className="fa-solid fa-heart" />
            </div>
        </section>
    )
}

export { Card }; 