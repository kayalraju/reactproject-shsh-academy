import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Loading from '../../Common/Loading'
import { GetSearchedBlogArticles } from '../../../Redux/BlogSlice'

const ArticleSearchList = () => {
    const { txt } = useParams()
    // console.log(txt);
    const { searchedArticles, searchedArticlesStatus } = useSelector((state) => state.Blog)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetSearchedBlogArticles(txt))
    }, [txt])
    // console.log(searchedArticles);
    // const numberOfInitialRecords = process.env.REACT_APP_RECORDS_INITIAL_PAGE
    const numberOfInitialRecords = 2
    const numberOfRecordsPage = 1
    const [totalRecordsToDisplay, setTotalRecordsToDisplay] = useState(numberOfInitialRecords)
    const loadMoreItems = () => {
        setTotalRecordsToDisplay(totalRecordsToDisplay + numberOfRecordsPage)
    }
    return (
        <>
            <h5 className='mb-4'>Searching for: {txt}</h5>
            {
                searchedArticles !== null && searchedArticles !== '' && searchedArticles !== undefined && searchedArticlesStatus === 'success' ? (
                    <>
                        {
                            searchedArticles?.slice(0, totalRecordsToDisplay).map((item, key) => {
                                return (
                                    <>
                                        <article class="entry" data-aos="fade-up" key={key + 1}>

                                            <div class="entry-img">
                                                <img src={`https://restapinodejs.onrender.com/admin/blog/image/${item._id}`} alt="" class="img-fluid" />
                                            </div>

                                            <h2 class="entry-title">
                                                <a href="blog-single.html">{item.title}</a>
                                            </h2>

                                            <div class="entry-meta">
                                                <ul>
                                                    <li class="d-flex align-items-center"><i class="icofont-user"></i> <a href="blog-single.html">John Doe</a></li>
                                                    <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">{new Date(item?.createdAt).toLocaleString("hi-IN")}</time></a></li>
                                                    <li class="d-flex align-items-center"><i class="icofont-comment"></i> <a href="blog-single.html">12 Comments</a></li>
                                                </ul>
                                            </div>

                                            <div class="entry-content">
                                                <p dangerouslySetInnerHTML={{
                                                    __html: item?.postText.slice(0, 250)
                                                }}>

                                                </p>
                                                <div class="read-more">
                                                    <Link to={`/blog/${item._id}`}>Read More</Link>
                                                </div>
                                            </div>

                                        </article>
                                    </>
                                )
                            })
                        }
                    </>
                ) : (
                    <>
                        {
                            searchedArticlesStatus === 'loading' && <Loading />
                        }
                    </>
                )
            }
            {
                searchedArticles?.length === 0 && <p>No matching articles found!</p>
            }
            {
                totalRecordsToDisplay < searchedArticles?.length && (
                    <>
                        <div class="blog-pagination text-center">
                            <button class="btn btn-success" onClick={loadMoreItems}>Load more</button>
                        </div>
                    </>
                )
            }




            {/* <article class="entry" data-aos="fade-up">

                <div class="entry-img">
                    <img src="assets/img/blog-2.jpg" alt="" class="img-fluid" />
                </div>

                <h2 class="entry-title">
                    <a href="blog-single.html">Nisi magni odit consequatur autem nulla dolorem</a>
                </h2>

                <div class="entry-meta">
                    <ul>
                        <li class="d-flex align-items-center"><i class="icofont-user"></i> <a href="blog-single.html">John Doe</a></li>
                        <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                        <li class="d-flex align-items-center"><i class="icofont-comment"></i> <a href="blog-single.html">12 Comments</a></li>
                    </ul>
                </div>

                <div class="entry-content">
                    <p>
                        Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.
                        Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.
                    </p>
                    <div class="read-more">
                        <a href="blog-single.html">Read More</a>
                    </div>
                </div>

            </article>

            <article class="entry" data-aos="fade-up">

                <div class="entry-img">
                    <img src="assets/img/blog-3.jpg" alt="" class="img-fluid" />
                </div>

                <h2 class="entry-title">
                    <a href="blog-single.html">Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.</a>
                </h2>

                <div class="entry-meta">
                    <ul>
                        <li class="d-flex align-items-center"><i class="icofont-user"></i> <a href="blog-single.html">John Doe</a></li>
                        <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                        <li class="d-flex align-items-center"><i class="icofont-comment"></i> <a href="blog-single.html">12 Comments</a></li>
                    </ul>
                </div>

                <div class="entry-content">
                    <p>
                        Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.
                        Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.
                    </p>
                    <div class="read-more">
                        <a href="blog-single.html">Read More</a>
                    </div>
                </div>

            </article>

            <article class="entry" data-aos="fade-up">

                <div class="entry-img">
                    <img src="assets/img/blog-4.jpg" alt="" class="img-fluid" />
                </div>

                <h2 class="entry-title">
                    <a href="blog-single.html">Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem. Veniam eius velit ab ipsa quidem rem.</a>
                </h2>

                <div class="entry-meta">
                    <ul>
                        <li class="d-flex align-items-center"><i class="icofont-user"></i> <a href="blog-single.html">John Doe</a></li>
                        <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                        <li class="d-flex align-items-center"><i class="icofont-comment"></i> <a href="blog-single.html">12 Comments</a></li>
                    </ul>
                </div>

                <div class="entry-content">
                    <p>
                        Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.
                        Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.
                    </p>
                    <div class="read-more">
                        <a href="blog-single.html">Read More</a>
                    </div>
                </div>

            </article> */}


        </>
    )
}

export default ArticleSearchList
