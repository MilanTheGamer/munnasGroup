import React, { useRef } from 'react';
import "./HomeScreen.scss";
import downArrowWhite from './icons/down_arrow_white.svg';
import Story from "./Story";

const HomeScreen = (props) => {

    const scrollToStory = () => {
        const storySection = document.querySelector(".story");
        storySection.scrollIntoView({behavior:"smooth"})
    };

    return (
        <React.Fragment>
        <section className="homeScreen">
            <div className="titleScreen">
                <div className="titleBox">
                    <h1>Munnas</h1>
                    <h3>Group</h3>
                    <span>
                        Serve the Best Quality Products
                    </span> 
                    <div className="toStoryButton" onClick={scrollToStory}>
                        <div>  
                            <span>Our Story</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    );
};

export default HomeScreen;