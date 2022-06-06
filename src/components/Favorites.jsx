import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "../style/components/Favorites.css";
import { FavoriteItem } from './FavoriteItem';
import '../style/components/Favorites.css';


const Favorites = () => {

    const { state } = useContext(AppContext);
    const { favorites } = state;

    return (
        <section className='Favorites'>
            <div className='Favorite-list'>
                <h2>Favorites</h2>
                {favorites.length > 0 ? < FavoriteItem item={favorites[0]} />
                    : <div className='Favorite-empty'><i className="fa-solid fa-bookmark" /></div> }
                {favorites.length > 1 && <FavoriteItem item={favorites[1]} />}
                </div>
        </section>
    )
}

export { Favorites }