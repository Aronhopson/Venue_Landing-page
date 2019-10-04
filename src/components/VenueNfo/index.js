import React from 'react';

import Zoom from 'react-reveal/Zoom'

import Calendar from '../../resources/images/icons/calendar.png'
import Location from '../../resources/images/icons/location.png'


const VenueNfo = (props) => {
    return (

        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom duration={1000}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${Calendar})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Events Date & Time
                             </div>
                                    <div className="vn_desc">
                                        7 Dec 2019 @10 AM
                             </div>

                                </div>

                            </div>

                        </div>
                    </Zoom>
                    <Zoom duration={1000} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${Location})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Events L0cation
                             </div>
                                    <div className="vn_desc">
                                        Willong Khullen, Manipur
                             </div>

                                </div>

                            </div>

                        </div>
                    </Zoom>


                </div>

            </div>

        </div>
    );
};

export default VenueNfo;