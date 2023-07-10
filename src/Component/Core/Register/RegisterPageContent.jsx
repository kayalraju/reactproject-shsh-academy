import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterUser } from '../../../Redux/UserSlice'
import { toast } from 'react-toastify'

const RegisterPageContent = () => {
    const { status, data, redirectTo } = useSelector((state) => state.User)
    const initialValues = {
        name: '',
        mobile: '',
        email: '',
        password: ''
    }

    const [user, setUser] = useState(initialValues)
    const [dataError, setDataError] = useState({})

    let name, value
    const postData = (e) => {
        name = e.target.name
        value = e.target.value

        setUser({ ...user, [name]: value })

        let errorMsg = ''
        switch (name) {
            case 'name':
                errorMsg = 'Name should not be empty'
                break
            case 'mobile':
                errorMsg = 'Mobile should not be empty'
                break
            case 'email':
                errorMsg = 'Email should not be empty'
                break
            case 'password':
                errorMsg = 'Password should not be empty'
                break
            default:
                errorMsg = ''
        }

        if (value === null || value === '' || value === undefined) {
            setDataError({ ...dataError, [name]: errorMsg })
        } else {
            setDataError({ ...dataError, [name]: '' })
        }
    }

    const validateData = () => {
        let error = {}
        if (user.name === '') {
            error.name = 'Enter your name'
            setDataError({ ...dataError, name: 'No name entered' })
            console.log(dataError);
        }
        if (user.mobile === '') {
            error.mobile = 'Enter your phone nmber'
        }
        if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)) {
            error.email = 'Enter valid email address'
        }
        if (user.password.length < 6) {
            error.password = 'Password at least 6 charecters long'
        }
        return error
    }

    const dispatch = useDispatch()
    const submitData = (e) => {
        e.preventDefault()
        setDataError(validateData())

        let formData = new FormData()
        if (Object.keys(dataError).length === 0 && user !== null && user !== '' && user !== undefined) {
            formData.append('name', user.name)
            formData.append('mobile', user.mobile)
            formData.append('email', user.email)
            formData.append('password', user.password)

            dispatch(RegisterUser(user))
        }
    }
    const navigate = useNavigate()
    useEffect(() => {
        navigate(redirectTo)
    }, [redirectTo])

    return (
        <section id="contact" class="contact">
            <div class="container">

                <div class="row justify-content-center" data-aos="fade-up">

                    <div class="col-lg-10">

                        <div class="info-wrap">
                            <div class="row">
                                <div class="info">
                                    <h4>Register:</h4>
                                    <p>Fill the following form to lohin into your account and get access to apply for any course and post comment.</p>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>

                <div class="row mt-5 justify-content-center" data-aos="fade-up">
                    <div class="col-lg-10">
                        <form method="post" role="form" class="php-email-form">

                            <div class="form-group">
                                <input type="text" class="form-control" name="name" id="name" placeholder="Your Full name" data-rule="name" data-msg="Please enter your name"
                                    onChange={(e) => postData(e)} />
                                <div class="validate">{dataError.name}</div>
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" name="mobile" id="mobile" placeholder="Your phone number" data-rule="name" data-msg="Please enter your name"
                                    onChange={(e) => postData(e)} />
                                <div class="validate">{dataError.mobile}</div>
                            </div>

                            <div class="form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                                    onChange={(e) => postData(e)} />
                                <div class="validate">{dataError.email}</div>
                            </div>

                            <div class="form-group">
                                <input type="password" class="form-control" name="password" id="password" placeholder="Password" data-rule="email" data-msg="Please enter password"
                                    onChange={(e) => postData(e)} />
                                <div class="validate">{dataError.password}</div>
                            </div>

                            <div class="text-center"><button type="submit" onClick={submitData}>Register</button></div>
                            <div>Already registered? <Link to="/login">click here</Link></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default RegisterPageContent
