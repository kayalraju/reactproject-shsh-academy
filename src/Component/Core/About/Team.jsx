import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTeamMembers } from '../../../Redux/TeamSlice'
import Loading from '../../Common/Loading'
import LazyLoad from 'react-lazy-load'

const Team = () => {
    const { TeamMember, status } = useSelector((state) => state.Team)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetTeamMembers())
    }, [])
    return (
        <>
            <section id="team" class="team section-bg">
                <div class="container">

                    <div class="section-title" data-aos="fade-up">
                        <h2>Our <strong>Team</strong></h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">

                        {
                            TeamMember !== null ? (
                                <>
                                    {
                                        TeamMember.map((item, key) => {
                                            return (
                                                <>
                                                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" key={key + 1}>
                                                        <div class="member" data-aos="fade-up" data-aos-delay={key * 100}>
                                                            <div class="member-img">
                                                            <LazyLoad height={255}>
                                                                <img src={`https://restapinodejs.onrender.com/api/team/photo/${item._id}`} class="img-fluid" alt="" />
                                                                </LazyLoad>
                                                                <div class="social">
                                                                    <a href=""><i class="icofont-twitter"></i></a>
                                                                    <a href=""><i class="icofont-facebook"></i></a>
                                                                    <a href=""><i class="icofont-instagram"></i></a>
                                                                    <a href=""><i class="icofont-linkedin"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="member-info">
                                                                <h4>{item.name}</h4>
                                                                <span>{item.possession}</span>
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
                                    {
                                        <Loading />
                                    }
                                </>
                            )
                        }

                        {/* <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div class="member" data-aos="fade-up" data-aos-delay="100">
                                <div class="member-img">
                                    <img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""/>
                                        <div class="social">
                                            <a href=""><i class="icofont-twitter"></i></a>
                                            <a href=""><i class="icofont-facebook"></i></a>
                                            <a href=""><i class="icofont-instagram"></i></a>
                                            <a href=""><i class="icofont-linkedin"></i></a>
                                        </div>
                                </div>
                                <div class="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div class="member" data-aos="fade-up" data-aos-delay="200">
                                <div class="member-img">
                                    <img src="assets/img/team/team-3.jpg" class="img-fluid" alt=""/>
                                        <div class="social">
                                            <a href=""><i class="icofont-twitter"></i></a>
                                            <a href=""><i class="icofont-facebook"></i></a>
                                            <a href=""><i class="icofont-instagram"></i></a>
                                            <a href=""><i class="icofont-linkedin"></i></a>
                                        </div>
                                </div>
                                <div class="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div class="member" data-aos="fade-up" data-aos-delay="300">
                                <div class="member-img">
                                    <img src="assets/img/team/team-4.jpg" class="img-fluid" alt=""/>
                                        <div class="social">
                                            <a href=""><i class="icofont-twitter"></i></a>
                                            <a href=""><i class="icofont-facebook"></i></a>
                                            <a href=""><i class="icofont-instagram"></i></a>
                                            <a href=""><i class="icofont-linkedin"></i></a>
                                        </div>
                                </div>
                                <div class="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </section>
        </>
    )
}

export default Team
