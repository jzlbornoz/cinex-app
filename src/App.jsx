import React from 'react';
import { Header } from './components/Header';
import { Landing } from './components/Landing';
import { Footer } from './components/Footer';
import { AppContext } from './context/AppContext';
import { useData } from './hooks/useData';
import './App.css';

const App = () => {
    const value = useData();
    return (
        <AppContext.Provider value={value}>
            <section className='App'>
                <Header />
                <Landing />
                <Footer />
            </section>
        </AppContext.Provider>
    )
}

export { App };