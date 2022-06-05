import React, { useContext, useState } from 'react';
import "../style/components/Card.css";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AppContext } from '../context/AppContext';

const Card = ({ film, handleSelect }) => {

    const { handleFavorite, placeholder } = useContext(AppContext);
    const [heartColor, setHeartColor] = useState('Card-favorite'); // change the heart's color after add to favorite
    const handleColor = () => {
        setHeartColor('Card-favorite red');
    }

    return (
        <section className="Card" >
            <Link to='/review'>
                <LazyLoadImage src={placeholder(film.poster_path, 300)} onClick={() => handleSelect(film)} />
            </Link>
            <div className='Card-title'><h3>{film.title ? film.title : film.name}</h3></div>
            <div className='Card-vote'><p>{film.vote_average}</p></div>
            <div className={heartColor} onClick={handleFavorite(film)}>
                <i className="fa-solid fa-heart" onClick={() => handleColor()} />
            </div>
        </section>
    )
}

export { Card }; 