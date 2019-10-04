import React from 'react';
import Fade from 'react-reveal/Fade'

const Footer = (props) => {
    return (

        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">The Venue</div>
                <div className="footer_copyright">
                    All right reserve by T. Aron Hopson
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;