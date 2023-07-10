import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetBlogArticle } from '../../../Redux/BlogSlice'
import Loading from '../../Common/Loading'
import BlogComment from './BlogComment'
import LazyLoad from 'react-lazy-load'

const ArticleContent = () => {
    const { article, status } = useSelector((state) => state.Blog)
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(GetBlogArticle(id))
    }, [id])

    return (
        <>
            {
                article !== '' && article !== null && article !== undefined && status === 'success' ? (
                    <>
                        <article class="entry entry-single" data-aos="fade-up">

                            <div class="entry-img">
                                <LazyLoad height={414}>
                                    <img src={`https://restapinodejs.onrender.com/api/blog/image/${article._id}`} alt="" class="img-fluid" />
                                </LazyLoad>
                            </div>

                            <h2 class="entry-title">
                                <a href="blog-single.html">{article?.title}</a>
                            </h2>

                            <div class="entry-meta">
                                <ul>
                                    <li class="d-flex align-items-center"><i class="icofont-user"></i> <a href="blog-single.html">John Doe</a></li>
                                    <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">{new Date(article?.createdAt).toLocaleString("hi-IN")}</time></a></li>
                                </ul>
                            </div>

                            <div class="entry-content">
                                <p dangerouslySetInnerHTML={{
                                    __html: article?.postText
                                }}></p>
                            </div>

                            <div class="entry-footer clearfix">
                                <div class="float-left">
                                    <i class="icofont-folder"></i>
                                    <ul class="cats">
                                        <li><a href="#">Business</a></li>
                                    </ul>

                                    <i class="icofont-tags"></i>
                                    <ul class="tags">
                                        <li><a href="#">Creative</a></li>
                                        <li><a href="#">Tips</a></li>
                                        <li><a href="#">Marketing</a></li>
                                    </ul>
                                </div>

                                <div class="float-right share">
                                    <a href="" title="Share on Twitter"><i class="icofont-twitter"></i></a>
                                    <a href="" title="Share on Facebook"><i class="icofont-facebook"></i></a>
                                    <a href="" title="Share on Instagram"><i class="icofont-instagram"></i></a>
                                </div>

                            </div>

                        </article>
                        <BlogComment />
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

export default ArticleContent
