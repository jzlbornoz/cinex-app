import React, { useState } from 'react';
import "../style/components/Card.css";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = ({ film }) => {
    const placeholder = (path, width) => {
        return path ? `https://image.tmdb.org/t/p/w${width}` + path : "http://www.proedsolutions.com/wp-content/themes/micron/images/placeholders/placeholder_large.jpg"
    }
    const [heart, setHeart] = useState("Card-favorite");
    const handleHeart = () => {
        if (heart == "Card-favorite" ) {
            setHeart("Card-favorite red");
        }else{
            setHeart("Card-favorite");
        };
    };

    return (

        <section className="Card" >
            <Link to='/review'>
                <LazyLoadImage src={placeholder(film.poster_path, 300)} />
                <div className='Card-title'><h3>{film.title ? film.title : film.name}</h3></div>
                <div className='Card-vote'><p>{film.vote_average}</p></div>
            </Link>
            <div className={heart} onClick={() => handleHeart()}><i className="fa-solid fa-heart" /></div>
        </section>

    )
}

export { Card }; 