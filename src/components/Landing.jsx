import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Loading } from './Loading';
import "../style/components/Landing.css";

const Landing = () => {
    const { loading } = useContext(AppContext);
    return (
        <section className="Landing">
            {!loading ? <section className='Landing-wrapped' data-aos="fade-up" >
                <h2>WELCOME</h2>
                <p>We are your best option in <span>Entertainment</span> </p>
                <Link to='billboard'><div className='Landing-button'>GET IN</div></Link>
            </section> : <Loading />}
        </section >
    )
}

export { Landing }