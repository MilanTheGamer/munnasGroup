import React from 'react';
import "./Supermarket.scss"


const Supermarket = (props) => {
    return (
        <React.Fragment>
            <div className="supermarket">
                <div className="smTopBox">
                    <div className="smHeadImage">
                    </div>
                    <div className="smHeadtitle">
                        <h1>Munnas</h1>
                        <h1>Supermarket</h1>
                        <div className="smDescription">
                            <p>
                                Munnas Supermarket started in the year 2013 and successfully buliding up a client range in and out of Kumbanad, Pathanamthitta District
                                Munnas Supermarket cater the quality products to needy dient base in and around of Kumbanad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Supermarket;