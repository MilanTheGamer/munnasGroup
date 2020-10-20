import React from 'react';
import "./Vision.scss"

const Vision = (props) => {
    return (
        <React.Fragment>
            <div className="vision">
                <div className="visionLeft">
                    <h1>Our</h1>
                    <h1>Vision</h1>
                    <span>
                        "We inspire Individuals and Organisations to work more effectively and efficiently and create greater choice in the
                        domain of work, for the benefit of all concerned. "
                    </span>
                </div>
                <div className="visionRight">
                    <div className="visionCard">
                        <span>
                            "Helping people to
                            better work, better life
                            is our common purpose and
                            the way in which we contribute to society"
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Vision;