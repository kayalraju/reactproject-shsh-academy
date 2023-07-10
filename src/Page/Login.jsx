import React, { useEffect } from 'react'
import Breadcrumbs from '../Component/Core/Login/Breadcrumbs'
import LoginPageContent from '../Component/Core/Login/LoginPageContent'
import Header from '../Component/Common/Header'
import Footer from '../Component/Common/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const { loginRedirect } = useSelector((state) => state.Auth)
    useEffect(() => {
        navigate(loginRedirect)
    }, [loginRedirect])
    return (
        <>
            <Header />
            <main id="main">
                <Breadcrumbs />
                <LoginPageContent />
            </main>
            <Footer />
        </>
    )
}

export default Login
