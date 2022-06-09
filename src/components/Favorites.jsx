import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import "../style/components/Favorites.css";
import { FavoriteItem } from './FavoriteItem';
import '../style/components/Favorites.css';


const Favorites = () => {
    const { state } = useContext(AppContext);
    const { favorites } = state;
    return (
        <section className='Favorites'>
            <h2>Favorites</h2>
            <div className='Favorite-list'>
                {favorites.length > 0 ? < FavoriteItem item={favorites[0]} />
                    : <div className='Favorite-empty'><i className="fa-solid fa-bookmark" /></div>}
                {favorites.length > 1 && <FavoriteItem item={favorites[1]} />}
                {favorites.length > 2 && <div className='Favorite-link'> <Link to='/favorites/page'>Ver mas</Link></div>}
            </div>
        </section>
    )
}

export { Favorites }