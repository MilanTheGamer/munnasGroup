import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import {Link} from "react-router-dom";

import BrandLogo from "./icons/logo.png";
import MenuButton from "./icons/menu.svg"
import Drawer from './Drawer';

const Navbar = (props) => {
    const [fixNav,setFixNav] = useState(false);
    const [drawer,setDrawer] = useState(false);

    const onScroll = () => {
        window.scrollY >= 80 ? setFixNav(true) : setFixNav(false)
    };

    const openDrawer = () => {
        setDrawer(true)
    };

    const closeDrawer = (e) => {
        const drawerheight = document.querySelector(".drawer").clientHeight

        if(e.y >= drawerheight){
            setDrawer(false)
        };

    };

    window.onscroll = onScroll;
    window.onclick = (e) => closeDrawer(e)

    useEffect(()=>{
        onScroll()
    },[])
    
    return (
        <React.Fragment>
        <section className={`navBar ${fixNav? "fix" : null}`}>
            <Link to="/">
                <div className="brandLogo">
                    <img src={BrandLogo} />
                </div>
            </Link>
            <div className="hamButton">
                <img src={MenuButton} onClick={openDrawer}/>
            </div>
        </section>
        <Drawer active={drawer? true : false} setDrawer={setDrawer}/>
        </React.Fragment>
    );
}

export default Navbar;