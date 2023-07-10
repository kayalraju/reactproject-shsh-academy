import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCourses } from '../../../Redux/CourseSlice'
import Loading from '../../Common/Loading'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'

const CourseList = () => {
    const { courses, status } = useSelector((state) => state.Courses)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetCourses())
    }, [])
    return (
        <>
            <section id="pricing" class="pricing">
                <div class="container" data-aos="fade-up">

                    <div class="row">

                        {
                            courses !== '' && courses !== null && courses !== undefined && status === 'success' ? (
                                <>
                                    {
                                        courses.map((item, key) => {
                                            return (
                                                <>
                                                    <div class="col-lg-3 col-md-6 mt-4 _mt-md-0" key={key + 1}>
                                                        <div class="box featured">
                                                            <h3>{item.name}</h3>
                                                            <LazyLoad height={215}>
                                                                <img src={`https://restapinodejs.onrender.com/api/course/photo/${item._id}`} class="img-fluid"></img>
                                                            </LazyLoad>
                                                            <h4 className='mt-2'><sup>Rs.</sup>{item.fees}<span></span></h4>
                                                            <ul>
                                                                <li>{item.requirement}</li>
                                                                <li>{item.duration}</li>
                                                            </ul>
                                                            <div class="btn-wrap">
                                                                <Link to={`/apply/${item.name}/${item._id}`} class="btn btn-buy">Apply Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </>
                            ) : (
                                <>
                                    {status === 'loading' && <Loading />}
                                </>
                            )
                        }
                        {
                            courses?.length === 0 && <p>No courses found!</p>
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default CourseList
