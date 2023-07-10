import React from 'react'
import Header from '../Component/Common/Header'
import Breadcrumbs from '../Component/Core/Courses/Breadcrumbs'
import CourseList from '../Component/Core/Courses/CourseList'
import FAQs from '../Component/Core/Courses/FAQs'
import Footer from '../Component/Common/Footer'


const Courses = () => {
    return (
        <>

            <Header />


            <main id="main">

                <Breadcrumbs />

                <CourseList />

                <FAQs />

            </main>

            <Footer />

        </>
    )
}

export default Courses
