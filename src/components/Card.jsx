import React from 'react';
import "../style/components/Card.css";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
 
const Card = ({ film }) => {
    const Img = "https://image.tmdb.org/t/p/w300" + film.poster_path;
    return (
        <Link to='/review'>
            <section className="Card" >
             <LazyLoadImage src={Img} />
                <div className='Card-title'><h3>{film.title}</h3></div>
            </section>
        </Link>
    )
}

export { Card }; 