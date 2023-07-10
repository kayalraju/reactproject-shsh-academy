import React from 'react'
import Header from '../Component/Common/Header'
import Breadcrumbs from '../Component/Core/Register/Breadcrumbs'
import RegisterPageContent from '../Component/Core/Register/RegisterPageContent'
import Footer from '../Component/Common/Footer'

const Register = () => {
    return (
        <>
            <Header />
            <main id="main">
                <Breadcrumbs />
                <RegisterPageContent/>
            </main>
            <Footer />
        </>
    )
}

export default Register
