import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Store.css';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Store = () => {
    //animation
    useEffect(() => {
        AOS.init();
    })
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = './products.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    return (
        <div className='col-11 mx-auto'>
            <div className="text-center mt-2 mb-4">
                <h1 className='fw-bold fst-italic text-primary'>Explore Our Collection</h1>
            </div>
            <div className="product-container mx-5 pb-4">
                {
                    product?.map((pd) => (
                        <div key={pd.id} className="bg-light showroom mx-3 mb-3 rounded-3 shadow-lg">
                            <img className="img-fluid w-80 border border-0 p-3 mb-1" src={pd.image} alt="not found" />
                            <h4 className="text-center fw-bold fst-italic my-2">{pd.name}</h4>
                            <p className="px-4 my-2">{pd.description}</p>
                            <h5 className="px-4 my-3 fw-bold fst-italic text-center">Price: {pd.price} tk</h5>
                            <div className='text-center'>
                                <Link to={`/order/${pd.id}`}>
                                    <Button variant="outline-primary" className="fw-bold mb-3 px-3 py-2">Book Now</Button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Store;