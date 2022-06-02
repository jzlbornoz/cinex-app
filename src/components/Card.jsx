import React from 'react';
import "../style/components/Card.css";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = ({ film }) => {
    const placeholder = (path, width) => {
        return path ? `https://image.tmdb.org/t/p/w${width}` + path : "http://www.proedsolutions.com/wp-content/themes/micron/images/placeholders/placeholder_large.jpg"
    }

    return (
        <Link to='/review'>
            <section className="Card" >
                <LazyLoadImage src={placeholder(film.poster_path, 300)} />
                <div className='Card-title'><h3>{film.title ? film.title : film.name}</h3></div>
            </section>
        </Link>
    )
}

export { Card }; 