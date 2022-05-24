import React from 'react';
import '../style/components/Footer.css';

const Footer = () => {
    return (
        <section className='Footer'>
            <div className="Footer-social">
                <i className="fa-brands fa-instagram fa-2xl" />
            </div>
            <div className="Footer-term">
                <p>Term of use - Privacy Policy</p>
            </div>
            <section className="Footer-git">
                <a href="https://github.com/jzlbornoz">
                <i className="fa-brands fa-github" />
                <p>jzlbornoz</p>
                </a>
            </section>
        </section>
    )
}

export { Footer }