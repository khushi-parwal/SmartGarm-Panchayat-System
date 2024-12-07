import React, { Fragment } from 'react';
import Aboutus from '../About/Aboutus';
import Rti from '../RTI/RTI';
import AboutUs from '../aboutUs/AboutUs';
import Footer from '../contact/contact';
import Header from '../header/Header';
import HeroSlider from '../heroSlider/HeroSlider';

const Home = () => {
  return (
    <Fragment>
        <Header/>
        <HeroSlider/>
         <AboutUs/>
        <Aboutus/>
        <Rti/>
        <Footer/> 
    </Fragment>
  )
}

export default Home
