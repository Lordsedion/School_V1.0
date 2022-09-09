import React from 'react'
import Header from '../components/header/Header.jsx'
import About from '../components/about/About.jsx'
import Upcoming from '../components/upcoming/Upcoming.jsx'
import Gallery from '../components/gallery/Gallery.jsx'
import Update from '../components/header/Update.jsx'
import Faq from '../components/faq/Faq.jsx'
import Footer from '../components/footer/Footer.jsx'
import Testimonial from '../components/testimonial/Testimonial.jsx'

const Home = () => {
    return (
        <>
            <Header />
            <Update />
            <About />
            <Gallery />
            <Faq />
            <Testimonial />
            <Upcoming />
            <Footer/>
        </>
    )
}

export default Home