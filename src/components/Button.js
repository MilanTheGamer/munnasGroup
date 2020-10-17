import React from 'react';
import "./Button.scss";

import Arrow from "./icons/down_arrow.svg"

const Button = ({title}) => {
    return (
        <div className="menuButton">
            <span>{title}</span>
            <img src={Arrow}/>
        </div>
    );
}

export default Button;