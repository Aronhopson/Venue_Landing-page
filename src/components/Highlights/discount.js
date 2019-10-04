import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../Utils/Button'

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30

    }
    porcentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() =>{
            this.porcentage()
        }, 40)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade onReveal={() => this.porcentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase early</h3>
                            <p>This is a winter speacial offer why dont you buy it</p>
                            <div>
                                <MyButton 
                                text="Purchase"
                                bck="#ffa800"
                                color="ffffff"
                                link="https://material-ui.com"
                                
                                />
                             </div>

                        </div>
                    </Slide>
                </div>

            </div>

        );
    }
}

export default Discount;