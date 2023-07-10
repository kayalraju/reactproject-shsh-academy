import React from 'react'
import Header from '../Component/Common/Header'
import Breadcrumbs from '../Component/Core/Blog/Breadcrumbs'
import Footer from '../Component/Common/Footer'
import Sidebar from '../Component/Core/Blog/Sidebar'
import ArticleList from '../Component/Core/Blog/ArticleList'
import ArticleSearchList from '../Component/Core/Blog/ArticleSearchList'
import { useParams } from 'react-router-dom'

const Blog = () => {
    const { txt } = useParams()

    return (
        <>


            <Header />

            <main id="main">

                <Breadcrumbs />

                <section id="blog" class="blog">
                    <div class="container">

                        <div class="row">

                            <div class="col-lg-8 entries">
                                {
                                    txt !== '' && txt !== null && txt !== undefined ? <ArticleSearchList /> : <ArticleList />
                                }

                            </div>

                            <div class="col-lg-4">

                                <Sidebar />

                            </div>

                        </div>

                    </div>
                </section>

            </main>

            <Footer />

        </>
    )
}

export default Blog
