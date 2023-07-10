import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetBanner } from '../../Redux/BannerSlice'
import Loading from './Loading'

const Banner = () => {
    const { bannerdata, status } = useSelector((state) => state.Banner)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetBanner())
    }, [])
    return (
        <>
            {
                bannerdata !== '' && bannerdata !== null && bannerdata !== undefined && status === 'success' ? (
                    <>
                        <section id="hero">
                            <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

                                <div class="carousel-inner" role="listbox">
                                    {
                                        bannerdata.map((item, key) => {
                                            return (
                                                <>
                                                    {
                                                        key === 0 ? (
                                                            <>
                                                                <div class="carousel-item active" style={{ backgroundImage: `url(https://restapinodejs.onrender.com/api/banner/photo/${item._id})` }} key={key}>
                                                                    <div class="carousel-container">
                                                                        <div class="carousel-content animate__animated animate__fadeInUp">
                                                                            <h2>{item.title}</h2>
                                                                            <p>{item.description}</p>
                                                                            {/* <div class="text-center"><a href="" class="btn-get-started">Read More</a></div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div class="carousel-item" style={{ backgroundImage: `url(https://restapinodejs.onrender.com/api/banner/photo/${item._id})` }} key={key}>
                                                                    <div class="carousel-container">
                                                                        <div class="carousel-content animate__animated animate__fadeInUp">
                                                                            <h2>{item.title}</h2>
                                                                            <p>{item.description}</p>
                                                                            {/* <div class="text-center"><a href="" class="btn-get-started">Read More</a></div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    }

                                                </>
                                            )
                                        })
                                    }

                                </div>

                                <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>

                                <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>

                                <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        {
                            status === 'loading' && <Loading />
                        }
                    </>
                )
            }
        </>
    )
}

export default Banner
