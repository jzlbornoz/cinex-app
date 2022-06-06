import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Landing } from '../components/Landing';
import { Footer } from '../components/Footer';
import { AppContext } from '../context/AppContext';
import { useData } from '../hooks/useData';
import { Error } from '../containers/Error';
import { Review } from '../containers/Review';
import { BillboardSeries } from '../containers/BillboardSeries';
import { BillboardMovies } from '../containers/BillboardMovies';
import { FavoritesPage } from '../containers/FavoritesPage';
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
                        <Route exact path="/billboard/series" element={<BillboardSeries />} />
                        <Route exact path="/billboard/movies" element={<BillboardMovies />} />
                        <Route exact path="/review" element={<Review />} />
                        <Route exact path="/favorites/page" element={<FavoritesPage />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </section>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export { App };