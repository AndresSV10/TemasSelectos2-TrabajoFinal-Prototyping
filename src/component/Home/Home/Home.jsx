import React from 'react';
import About from '../About/About';
import BrowserSupport from '../BrowserSupport/BrowserSupport';
import BuildTools from '../BuildTools/BuildTools';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Header/>
            <Pricing/>
            <About/>
            <BrowserSupport/>
            <HappyClient/>
            <Contact/>
            <Footer/>
        </main>
    );
};

export default Home;