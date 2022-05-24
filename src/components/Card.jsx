import React from 'react';
import "../style/components/Card.css";

const Card = ({film}) => {
    const Img = "https://image.tmdb.org/t/p/w300" + film.poster_path;
    return (
        <section className="Card" data-aos="fade-up">
            <img src={Img} alt={film.title} />
            <div className='Card-title'><h3>{film.title}</h3></div>
        </section>
    )
}

export { Card }