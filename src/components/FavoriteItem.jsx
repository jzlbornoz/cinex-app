import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import "../style/components/FavoriteItem.css";

const FavoriteItem = ({ item }) => {
    const { placeholder } = useContext(AppContext);
    return (
        <section className="Favorite-item" >
            <img src={placeholder(item.poster_path, 300)} alt="LOGO" />
            <div className='Favorite-content'>
                <p> {item.title || item.name}</p>
                <span>{item.vote_average}</span>
            </div>
        </section>
    )
}

export { FavoriteItem };