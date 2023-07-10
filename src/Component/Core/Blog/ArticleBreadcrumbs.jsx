import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ArticleBreadcrumbs = () => {
  const {lastArticle}=useSelector((state)=>state.Blog)
  // const dispatch=useDispatch()
  // useEffect(()=>{

  // },[])
  return (
    <>
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">

          <div class="d-flex justify-content-between align-items-center">
            <h2>Blog</h2>
            <ol>
              <li><Link to="/">Article</Link></li>
              <li>{lastArticle}</li>
            </ol>
          </div>

        </div>
      </section>
    </>
  )
}

export default ArticleBreadcrumbs
