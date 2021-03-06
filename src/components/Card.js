import React from 'react';
import "./Card.scss";

const Card = ({image,heading,content}) => {
    return (
        <div className="card" style={{backgroundImage:`url(${image})`}}>
            <div className="cardContent">
                <h3>{heading}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Card;