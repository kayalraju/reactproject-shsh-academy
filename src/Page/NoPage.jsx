import React from 'react'
import Header from '../Component/Common/Header'
import Footer from '../Component/Common/Footer'
import Breadcrumbs from '../Component/Core/NoPage/Breadcrumbs'
import NoPageContent from '../Component/Core/NoPage/NoPageContent'


const NoPage = () => {
    return (
        <>
            <Header />
            <main id="main">
                <Breadcrumbs/>
                <NoPageContent/>
            </main>
            <Footer />
        </>
    )
}

export default NoPage
