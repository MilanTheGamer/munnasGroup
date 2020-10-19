import React from 'react';
import "./Drawer.scss";
import {Link} from "react-router-dom";

import Card from "./Card";

import HomeImg from "./images/home1.jpg"
import SupermarketImg from "./images/supermarket2.jpg";
import DistributionsImg from "./images/distributions.jpg"
import RestaurantImg from "./images/restaurant1.jpg";

const Drawer = ({active,setDrawer}) => {

    const closeDrawer = () => {
        setDrawer(false)
    }

    return (
        <React.Fragment>
            <div className={`drawer ${active ? "active" : null}`}>
                <Link to="/"  onClick={closeDrawer}>
                    <Card image={HomeImg} heading="Home"/>
                </Link>
                <Link to="/supermarket" onClick={closeDrawer}>
                    <Card image={SupermarketImg} heading="Supermarket" />
                </Link>
                <Link to="/distributions"onClick={closeDrawer}>
                    <Card image={DistributionsImg} heading="Distributions"/>
                </Link>
                <Link to="/restaurant"  onClick={closeDrawer}>
                    <Card image={RestaurantImg} heading="Restaurant"/>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default Drawer;