import React from 'react';
import "./Article.scss";

const Article = ({image,heading,contents,imgPosition}) => {
    return (
        <React.Fragment>
            {imgPosition === "LEFT" ? 
                <div className="article">
                    <div className="articleImage" style={{backgroundImage:`url(${image})`}}></div>
                    <div className="articleDescription">
                        <h2>{heading}</h2>
                        <p>{contents}</p>
                    </div>
                </div>
            :
                <div className="article">
                    <div className="articleDescription">
                        <h2>{heading}</h2>
                        <p>{contents}</p>
                    </div>
                    <div className="articleImage">
                        <img src={image}/>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};

export default Article;