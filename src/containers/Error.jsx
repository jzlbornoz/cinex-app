import React from 'react'
import { Link } from 'react-router-dom';
import "../style/containers/Error.css";

const Error = () => {
    return (
        <section className='Error'>
            <h2>Oops, tuvimos un error.</h2>
            <Link to='/billboard'>
                <div className='Error-icon'>
                    <i className="fa-solid fa-arrow-rotate-right" />
                </div>
            </Link>
        </section>
    )
}

export { Error }