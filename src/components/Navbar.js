// import React, { useEffect } from 'react';
// import './Navbar.scss';

// import logo from '../components/icons/logo.png';
// import arrow from '../components/icons/down_arrow.svg';
// import menu from "../components/icons/menu.svg"


// const Navbar = () => {

//     useEffect(()=>{
//         const menu = document.querySelector(".menu");
//         const menuLinks = document.querySelector(".menuLinks");

//         menu.addEventListener('click', ()=>{
//         menuLinks.classList.toggle('active')
//         })
//     })


//     return (
//         <React.Fragment>
//             <nav className="navbar">
//                 <div className="brandName">
//                     <img src={logo} className="brandLogo" alt="logo"/>
//                 </div>
                
//                 <ul className="navLinks">
//                     <li>
//                         <div className="navItem">
//                             <label>Home</label>
//                             <img src={arrow} alt="arrow"/>
//                         </div>
//                     </li>
//                     <li>
//                         <div className="navItem">
//                             <label>OurStory</label>
//                             <img src={arrow} alt="arrow"/>
//                         </div>
//                     </li>
//                     <li>
//                         <div className="navItem">
//                             <label>Contacts</label>
//                             <img src={arrow} alt="arrow"/>
//                         </div>
//                     </li>
//                 </ul>

//                 <img src={menu} className="menu"/>
                
//                 <div className="menuLinks">
//                     <div>Home</div>
//                     <div>OurStory</div>
//                     <div>Contacts</div>
//                 </div>

//             </nav>
//         </React.Fragment>
//     );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import "./Navbar.scss";

import BrandLogo from "./icons/logo.png";
import MenuButton from "./icons/menu.svg"
import Button from "./Button";
import Drawer from './Drawer';

const Navbar = (props) => {
    const [mobileView,setMobileView] = useState(false);
    const [fixNav,setFixNav] = useState(false);
    const [drawer,setDrawer] = useState(false);

    const onResize = () => {
        window.innerWidth <= 720 ? setMobileView(true) : setMobileView(false)
    };

    const onScroll = () => {
        window.scrollY >= 80 ? setFixNav(true) : setFixNav(false)
    };

    const openDrawer = () => {
        setDrawer(true)
    };

    const closeDrawer = (e) => {
        console.log(e.y)
        if(e.y >= 200){
            setDrawer(false)
        };
    };

    window.onresize = onResize;
    window.onscroll = onScroll;
    window.onclick = (e) => closeDrawer(e)

    useEffect(()=>{
        onResize();
        onScroll()
    },[])
    
    return (
        <React.Fragment>
        <section className={`navBar ${fixNav? "fix" : null}`}>
            <div className="brandLogo">
                <img src={BrandLogo} />
            </div>
            {
            !mobileView ? 
            <div className="menuOptions">
                <div className="menuButton">
                    <Button title="HOME"/>
                </div>
                <div className="menuButton">
                    <Button title="OUR STORY"/>
                </div>
                <div className="menuButton">
                    <Button title="CONTACTS"/>
                </div>
            </div>
            :
            <div className="hamButton">
                <img src={MenuButton} onClick={openDrawer}/>
            </div>
            }
        </section>
        <Drawer active={drawer? true : false}>
                <Button title="HOME"/>
                <Button title="OUR STORY"/>
                <Button title="CONTACTS"/>
        </Drawer>
        
        </React.Fragment>
    );
}

export default Navbar;