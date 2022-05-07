import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import BookShowContextProvider from '../context/BookShowContext';
import DetailsContextProvider from '../context/DetailsContext';
import ProductsContextProvider from '../context/ProductsContext';
import BookShow from './BookShow';
import Details from './Details';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';


function Container() {

    return (
        <>
            <ProductsContextProvider>
                <DetailsContextProvider>
                    <BookShowContextProvider>
                        <Router>
                            <Navbar />
                            <Routes>
                                <Route path='/tvmaze' exact element={<Home />} />
                                <Route path="/tvmaze/Details/:id" element={<Details />} />
                                <Route path="/tvmaze/Details/:id/BookShow/:id" element={<BookShow />} />
                                <Route path="/tvmaze/*" element={<NotFound />} />
                            </Routes>
                            <Footer />
                        </Router>
                    </BookShowContextProvider>
                </DetailsContextProvider>
            </ProductsContextProvider>
        </>
    );
}

export default Container