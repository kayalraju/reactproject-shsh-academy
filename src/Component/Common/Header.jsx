import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkToken, logOut } from '../../Redux/AuthSlice'

const Header = () => {
  const dispatch = useDispatch()

  const { isLoggedin } = useSelector((state) => state.Auth)
  useEffect(() => {
    dispatch(checkToken())
  }, [isLoggedin])


  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logOut())
  }

  return (
    <>
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">

          {/* <h1 class="logo mr-auto"><Link to="index.html"><span>Tech</span>Five10</Link></h1> */}

          <Link to="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid" /></Link>

          <nav class="nav-menu d-none d-lg-block">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              {
                !isLoggedin && <li><Link to="/login">Login</Link></li>
              }

            </ul>
          </nav>

          <div class="header-social-links">

            {
              isLoggedin ? (
                <>
                  {localStorage.getItem('_name').replaceAll("\"", '')}
                  <Link to="/login" onClick={handleLogout}>Logout</Link>

                </>
              ) : (
                <>
                  <Link to="#" class="twitter"><i class="icofont-twitter"></i></Link>
                  <Link to="#" class="facebook"><i class="icofont-facebook"></i></Link>
                  <Link to="#" class="instagram"><i class="icofont-instagram"></i></Link>
                  <Link to="#" class="linkedin"><i class="icofont-linkedin"></i></Link>
                </>
              )
            }
          </div>

        </div>
      </header>
    </>
  )
}

export default Header
