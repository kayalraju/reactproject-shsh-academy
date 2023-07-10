import React from 'react'
import Header from '../Component/Common/Header'
import ArticleBreadcrumbs from '../Component/Core/Blog/ArticleBreadcrumbs'
import ArticleContent from '../Component/Core/Blog/ArticleContent'
import BlogComment from '../Component/Core/Blog/BlogComment'
import Sidebar from '../Component/Core/Blog/Sidebar'
import Footer from '../Component/Common/Footer'

const Article = () => {
    return (
        <>


            <Header />

            <main id="main">

                <ArticleBreadcrumbs />


                <section id="blog" class="blog">
                    <div class="container">

                        <div class="row">

                            <div class="col-lg-8 entries">

                                <ArticleContent />
                                {/* <BlogComment /> */}

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

export default Article
