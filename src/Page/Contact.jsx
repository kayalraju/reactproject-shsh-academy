import React from 'react'
import Header from '../Component/Common/Header'
import Breadcrumbs from '../Component/Core/Contact/Breadcrumbs'
import Map from '../Component/Core/Contact/Map'
import ContactPageContent from '../Component/Core/Contact/ContactPageContent'
import Footer from '../Component/Common/Footer'

const Contact = () => {
    return (
        <>
            <Header />

            <main id="main">

                <Breadcrumbs />

                <Map />
                <ContactPageContent />


            </main>

            <Footer />

        </>
    )
}

export default Contact
