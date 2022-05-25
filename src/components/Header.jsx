import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/Header.css';

const Header = () => {
  return (
    <section className='Header'>
      <Link to='/'>
        <h2>CINEX</h2>
      </Link>
    </section>
  )
}

export { Header };