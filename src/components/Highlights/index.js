import React from 'react';
import Decription from './description'
import Discount from './discount'

const Highlights = (props) => {
    return (

        <div className="highlight_wrapper">
            <Decription />
            <Discount />
        </div>
    );
};

export default Highlights;