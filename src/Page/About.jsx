import React from 'react'
import Header from '../Component/Common/Header'
import Breadcrumbs from '../Component/Core/About/Breadcrumbs'
import AboutPageContent from '../Component/Core/About/AboutPageContent'
import Team from '../Component/Core/About/Team'
import Footer from '../Component/Common/Footer'

const About = () => {
    return (
        <>
            <Header />
            <main id="main">
                <Breadcrumbs />
                <AboutPageContent />
                <Team />
            </main>
            <Footer />
        </>
    )
}

export default About
