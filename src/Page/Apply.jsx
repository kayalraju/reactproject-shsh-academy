import React from 'react'
import Header from '../Component/Common/Header'
import Footer from '../Component/Common/Footer'
import ApplyPageContent from '../Component/Core/Apply/ApplyPageContent'
import Breadcrumbs from '../Component/Core/Apply/Breadcrumbs'

const Apply = () => {
    return (
        <>
            <Header />
            <main id="main">
                <Breadcrumbs />
                <ApplyPageContent/>
            </main>
            <Footer />
        </>
    )
}

export default Apply
