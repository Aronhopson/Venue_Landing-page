import React from 'react';

const Location = (props) => {
    return (

        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2080.8017177387655!2d93.96959888411754!3d25.471010927044738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3748a56bee5f7b25%3A0xe66d4d8e7665612c!2sWillong%20Baptist%20church!5e0!3m2!1sen!2sin!4v1570204869457!5m2!1sen!2sin"
             width="100%" height="450px" frameborder="0" allowfullscreen></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;