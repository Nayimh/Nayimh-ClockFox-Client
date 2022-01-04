import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Store from './Store';

const StoreHome = () => {
    return (
        <div>
            <Header />
            <Store />
            <Footer/>
        </div>
    );
};

export default StoreHome;