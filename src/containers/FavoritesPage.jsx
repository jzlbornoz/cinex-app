import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from '../components/Card';
import "../style/containers/FavoritesPage.css";

const FavoritesPage = () => {
    const { state, handleSelect } = useContext(AppContext);
    const { favorites } = state;
    return (
        <section className="FavoritesPage">
            <h2>Favorites</h2>
            <div className='FavoritePage-wrapped'>
            {favorites.map(item => (
                <Card film={item} key={item.id} handleSelect={handleSelect}/>
            ))}
            </div>
        </section>
    )
}

export { FavoritesPage }