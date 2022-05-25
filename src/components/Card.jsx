import React from 'react';
import "../style/components/Card.css";
import { Link } from 'react-router-dom';

const Card = ({film}) => {
    const Img = "https://image.tmdb.org/t/p/w300" + film.poster_path;
    return (
        <Link to='/review'>
        <section className="Card" >
            <img src={Img} alt={film.title} />
            <div className='Card-title'><h3>{film.title}</h3></div>
            
        </section>
        </Link>
    )
}

export { Card }