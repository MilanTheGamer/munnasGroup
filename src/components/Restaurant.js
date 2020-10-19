import React from 'react';
import "./Restaurant.scss"


const Restauraunt = (props) => {
    return (
        <React.Fragment>
            <div className="restaurant">
                <div className="rTopBox">
                    <div className="rHeadImage">
                    </div>
                    <div className="rHeadtitle">
                        <h1>Munnas</h1>
                        <h1>Restauraunt</h1>
                        <div className="rDescription">
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

export default Restauraunt;