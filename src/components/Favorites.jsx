import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from './Card';

const Favorites = () => {

    const { handleSelect, heart } = useContext(AppContext);
    const { state } = useContext(AppContext);
    const { favorites } = state;
    const classHeart = () => {
        if (!heart) {
            return "Card-favorite";
        } else {
            return "Card-favorite red";
        }
    };

    return (
        <section className="Favorites">
            <div className='Landing-grid'>
                {favorites.length > 0 ? favorites.map(item => (
                    <Card film={item} key={item.id + 'fav12'} handleSelect={handleSelect} classI={classHeart()} />
                )) : <h3>NO HAY</h3>}
            </div>
        </section>
    )
}

export { Favorites }