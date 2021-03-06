import React, { useContext, useState } from 'react';
import "../style/components/Card.css";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AppContext } from '../context/AppContext';

const Card = ({ film, handleSelect, withHeart }) => {
    //withHeart es para elegir cuando poner el corazon y cuando no

    const { placeholder, addToFavorites, revomeFromFavorite } = useContext(AppContext);
    const [heartColor, setHeartColor] = useState('Card-favorite');
    // Cambia el color del corazon luego de agregarse a favoritos, luego de agregarse a favoritos

    const handleFavorite = item => {
        if (heartColor === 'Card-favorite') {
            addToFavorites(item);
        } else {
            revomeFromFavorite(item);
        }
    };

    const handleColor = () => {
        if (heartColor === 'Card-favorite') {
            setHeartColor('Card-favorite red');
        } else {
            setHeartColor('Card-favorite');
        }
    };

    const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

    // --- 

    return (
        <section className="Card">
            <Link to='/review' onClick={() => scrollTop()}>
                <LazyLoadImage src={placeholder(film.poster_path, 300)} onClick={() => handleSelect(film)} />
            </Link>
            <div className='Card-title'><h3>{film.title ? film.title : film.name}</h3></div>
            <div className='Card-vote'><p>{film.vote_average}</p></div>
            {!!withHeart && <div className={heartColor} onClick={() => handleColor()}>
                <i className="fa-solid fa-heart" onClick={() => handleFavorite(film)} />
            </div>}
        </section>
    )
}

export { Card }; 