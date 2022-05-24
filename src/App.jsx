import React from 'react';
import { Header } from './components/Header';
import { Landing } from './components/Landing';
import { Footer } from './components/Footer';

const App = () => {
    return (
        <section className='App'>
            <Header />
            <Landing />
            <Footer />
        </section>
    )
}

export { App };