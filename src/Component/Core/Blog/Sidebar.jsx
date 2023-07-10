import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetBlogCategories, GetRecentBlogArticles } from '../../../Redux/BlogSlice'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../../Common/Loading'

const Sidebar = () => {
    const { categories, recentArticles, status, recentArticlesStatus } = useSelector((state) => state.Blog)
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch()
    const navigate=useNavigate()
    useEffect(() => {
        dispatch(GetBlogCategories())
        dispatch(GetRecentBlogArticles())
    }, [])

    const handleSearch=(e)=>{
        e.preventDefault()
        searchText!=='' ? (
            navigate(`/blog/search/${searchText}`)
        ):(
            <></>
        )
        
        setSearchText('')
    }

    return (
        <>
            <div class="sidebar" data-aos="fade-left">
                <h3 class="sidebar-title">Search</h3>
                <div class="sidebar-item search-form">
                    <form action="">
                        <input type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                        <button type="submit" onClick={handleSearch}><i class="icofont-search"></i></button>
                    </form>

                </div>
                <h3 class="sidebar-title">Categories</h3>
                <div class="sidebar-item categories">
                    {
                        categories !== null && categories !== '' && categories !== undefined && status === 'success' ? (
                            <>
                                <ul>
                                    {
                                        categories?.data.map((item, key) => {
                                            return (
                                                <>
                                                    <li key={key + 1}><Link to={`/category/${item._id}`}>{item.category}</Link></li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </>
                        ) : (
                            <>
                                {
                                    <Loading />
                                }
                            </>
                        )
                    }
                </div>

                <h3 class="sidebar-title">Recent Posts</h3>
                <div class="sidebar-item recent-posts">
                    {
                        recentArticles !== null && recentArticles !== '' && recentArticles !== undefined && recentArticlesStatus === 'success' ? (
                            <>
                                {
                                   
                                    recentArticles?.data.map((item, key) => {
                                        return (
                                            <>
                                                <div class="post-item clearfix" key={key + 1}>
                                                    <img src={`https://restapinodejs.onrender.com/api/blog/image/${item._id}`} alt="" />
                                                    <h4><Link to={`/blog/${item._id}`}>{item.title}</Link></h4>
                                                    <time datetime="2020-01-01">{new Date(item.createdAt).toLocaleDateString()}</time>
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



                </div>



            </div>
        </>
    )
}

export default Sidebar
