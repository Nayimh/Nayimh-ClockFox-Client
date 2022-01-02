import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Reviews />
            <About />
        </div>
    );
};

export default Home;