import React, { useEffect } from 'react'
import Header from '../Component/Common/Header'
import Banner from '../Component/Common/Banner'
import About from '../Component/Core/Index/About'
import Services from '../Component/Core/Index/Services'
import Testimonials from '../Component/Core/Index/Testimonials'
import Clients from '../Component/Core/Index/Clients'
import Footer from '../Component/Common/Footer'

const Index = () => {
    return (
        <>
            <Header />
           <Banner />
            <main id="main">
                <About />
                <Services />
                <Clients />
                <Testimonials />
            </main>
            <Footer />
        </>
    )
}

export default Index
