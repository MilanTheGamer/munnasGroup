import React from 'react';
import "./ServiceCategory.scss";
import { Link } from "react-router-dom";

import SupermarketImg from "./images/supermarket2.jpg";
import DistributionsImg from "./images/distributions.jpg"
import RestaurantImg from "./images/restaurant1.jpg";

const ServiceCategory = (props) => {
    return (
            <div className="services">
                <h1>Services</h1>
                <div className="servicesBox">
                    <Link to="/supermarket">
                        <div className="serviceItem" style={{backgroundImage:`url(${SupermarketImg})`}}>
                            <div className="itemName">
                                <h2>Supermarket</h2> 
                            </div>
                        </div>
                    </Link>
                    <Link to="/distributions">
                        <div className="serviceItem" style={{backgroundImage:`url(${DistributionsImg})`}}>
                            <div className="itemName">
                                <h2>Distributions</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/restaurant">
                        <div className="serviceItem" style={{backgroundImage:`url(${RestaurantImg})`}}>
                            <div className="itemName">
                                <h2>Restaurant</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
    );
}

export default ServiceCategory;