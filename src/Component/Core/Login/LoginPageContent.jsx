import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserLogin } from '../../../Redux/AuthSlice'

const LoginPageContent = () => {
    const initialValues = {
        email: '',
        password: ''
    }
    const [user, setUser] = useState(initialValues)
    const dispatch = useDispatch()

    let name, value
    const setUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
    }

    const submitLogin = (e) => {
        e.preventDefault()
        dispatch(UserLogin(user))
    }

    return (
        <section id="contact" class="contact">
            <div class="container">

                <div class="row justify-content-center" data-aos="fade-up">

                    <div class="col-lg-10">

                        <div class="info-wrap">
                            <div class="row">
                                <div class="info">
                                    <h4>Login:</h4>
                                    <p>Fill the following form to lohin into your account and get access to apply for any course and post comment.</p>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>

                <div class="row mt-5 justify-content-center" data-aos="fade-up">
                    <div class="col-lg-10">
                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">

                            <div class="form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                                    onChange={(e) => setUserData(e)} />
                                <div class="validate"></div>
                            </div>

                            <div class="form-group">
                                <input type="password" class="form-control" name="password" id="password" placeholder="Password" data-rule="password" data-msg="Please password"
                                    onChange={(e) => setUserData(e)} />
                                <div class="validate"></div>
                            </div>
                            <div class="text-center"><button type="submit" onClick={(e) => submitLogin(e)}>Login</button></div>
                            <div>Yet not registered? <Link to="/register">click here</Link></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default LoginPageContent
