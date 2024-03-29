import React, { Component } from 'react';
import './resources/styles.css'
import { Element } from 'react-scroll'

import Header from './components/header_footer/Header'
import Feature from './components/feature'
import VenueNfo from './components/VenueNfo'
import Highlight from './components/Highlights'
import Pricing from './components/Pricing'
import Location from "./components/location"
import Footer from './components/header_footer/footer'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px" }}>

        <Header />
        <Element name="feature">
          <Feature />
        </Element>
        <Element name="venue">
          <VenueNfo />
        </Element>
        <Element name="highlight">
          <Highlight />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}


export default App;
