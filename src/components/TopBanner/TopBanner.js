import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className="topBanner">
            <div className="InnerDiv">

                <h1 style={{textAlign:"center",}}>Best food waiting for your belly</h1>

                <div className="searchDiv">
                    <div className="searchBox">
                        <input type="text" className="bannerSearchInput" />
                        <button className="searchButton">Search</button>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default TopBanner;