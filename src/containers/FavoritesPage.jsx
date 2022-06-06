import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from '../components/Card';
import "../style/containers/FavoritesPage.css";

const FavoritesPage = () => {
    const { state } = useContext(AppContext);
    const { favorites } = state;
    return (
        <section className="FavoritesPage">
            <h2>Favorites</h2>
            <div className='FavoritePage-wrapped'>
            {favorites.map(item => (
                <Card film={item} key={item.id} />
            ))}
            </div>
        </section>
    )
}

export { FavoritesPage }