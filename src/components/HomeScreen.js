import React from 'react';
import "./HomeScreen.scss";
import downArrowWhite from './icons/down_arrow_white.svg';

const HomeScreen = (props) => {
    return (
        <section className="homeScreen">
            <div className="titleScreen">
                <div className="titleBox">
                    <h1>Munnas</h1>
                    <h3>Group</h3>
                    <div className="toStoryButton">
                        <div>
                            <span>Our Story</span>
                            <img src={downArrowWhite}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeScreen;