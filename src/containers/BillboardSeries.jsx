import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from '../components/Card';
import '../style/components/Billboard.css';
const BillboardSeries = () => {
    const { toSelect, series } = useContext(AppContext);
    const handleSelect = item => () => {
        toSelect(item);
    }
    return (
        <section className='Billboard'>
            <p>SERIES</p>
            <div className="Billboard-grid">
                {series.map(serie => (
                    <div key={serie.id} onClick={handleSelect(serie)} >
                        <Card film={serie} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export { BillboardSeries }