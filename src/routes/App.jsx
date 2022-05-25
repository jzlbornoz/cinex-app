import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Landing } from '../components/Landing';
import { Footer } from '../components/Footer';
import { AppContext } from '../context/AppContext';
import { useData } from '../hooks/useData';
import { Error } from '../containers/Error';
import { Review } from '../containers/Review';
import './App.css';

const App = () => {
    const value = useData();
    return (
        <AppContext.Provider value={value}>
            <BrowserRouter>
                <section className='App'>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route exact path="/review" element={<Review />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </section>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export { App };