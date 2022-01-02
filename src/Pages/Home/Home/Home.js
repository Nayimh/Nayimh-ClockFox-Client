import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Reviews />
            <About />
        </div>
    );
};

export default Home;