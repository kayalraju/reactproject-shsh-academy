import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Index from '../../Page/Index'
import About from '../../Page/About'
import Courses from '../../Page/Courses'
import Blog from '../../Page/Blog'
import Article from '../../Page/Article'
import Contact from '../../Page/Contact'
import Login from '../../Page/Login'
import Register from '../../Page/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Apply from '../../Page/Apply'
import NoPage from '../../Page/NoPage'

const Routing = () => {
  function PrivateRoute({ children }) {
    let token = localStorage.getItem('token') || sessionStorage.getItem('token')
    return token !== '' && token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to='/login' />
    )
  }

  const PublicRotes = [
    {
      path: '/',
      element: <Index />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/courses',
      element: <Courses />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/blog/search/:txt',
      element: <Blog />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    },
    {
      path: '/blog/:id',
      element: <Article />
    },
    {
      path: '/category/:id',
      element: <Blog />
    },
    {
      path:'*',
      element:<NoPage/>
    }
  ]

  const PrivateRoutes = [ 
    {
      path: '/apply/:course/:id',
      element: <Apply/>
    }
  ]

  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          {
            PublicRotes?.map((item) => {
              return (<>
                <Route path={item.path} element={item.element} />
              </>)
            })
          }
          {
            PrivateRoutes?.map((item) => {
              return (<>
                <Route path={item.path} element={<PrivateRoute>{item.element}</PrivateRoute>} />
              </>)
            })
          }

          {/* <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<Article />} />
          <Route path='blog/search/:txt' element={<Blog />} />
          <Route path='/category/:id' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} /> */}
          
        </Routes>
      </Router>
    </>
  )
}

export default Routing