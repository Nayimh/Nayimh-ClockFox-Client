import React from 'react';
import bannerImage from './../../../watch-banner.jpg';
const Banner = () => {
    return (
        <div className="col-sm-12 col-md-11 col-lg-11  mx-auto">
            <div>
                <img className="img-fluid" src={bannerImage} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;