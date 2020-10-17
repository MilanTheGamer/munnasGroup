import React from 'react';
import "./Drawer.scss";

const Drawer = ({active,children}) => {

    return (
        <React.Fragment>
            <div className={`drawer ${active ? "active" : null}`}>
            {children}
            </div>
        </React.Fragment>
    );
}

export default Drawer;