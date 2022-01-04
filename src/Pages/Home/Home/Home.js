import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import About from '../About/About';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header'

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner />
            <Products />
            <Reviews />
            <About />
            <Footer/>
        </div>
    );
};

export default Home;