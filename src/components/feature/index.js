import React from 'react';
import Carousel from './carousel'
import TimeUntil from './time'

const Feature = (props) => {
    return (

        <div style={{ position: "relative" }}>
            <Carousel />
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
              </div>
            </div>
            <TimeUntil />
        </div>
    );
};

export default Feature;