import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {

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
        <div>
            <div className="text-center m-0 py-3 mt-2">
                <h1 className='fw-bold fst-italic text-primary'>Our collection: At a glace</h1>
            </div>
            <div className="col-11 mx-auto product-container my-3">
                {
                    product?.slice(0,6).map((pd) => (
                        <div key={pd.id} className="product bg-light mx-3 mb-3 border border-1 rounded-3 shadow-lg" data-aos="fade-up" data-aos-duration="3000">
                            <Link to="/store" className=" text-decoration-none text-dark">
                                <img style={{ height: "200px", width: "100%" }} className="img-fluid p-2" src={pd.image} alt="" />
                                <h5 className="text-center fw-bold mb-2">{pd.name}</h5>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;