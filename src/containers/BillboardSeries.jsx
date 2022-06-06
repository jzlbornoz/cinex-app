import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from '../components/Card';
import '../style/components/Billboard.css';
const BillboardSeries = () => {
    const { handleSelect, series } = useContext(AppContext);
    return (
        <section className='Billboard'>
            <h2>SERIES</h2>
            <div className="Billboard-grid">
                {series.map(serie => (
                    <Card film={serie} key={serie.id} handleSelect={handleSelect} withHear={true} />
                ))}
            </div>
        </section>
    )
}

export { BillboardSeries }