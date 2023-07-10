import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { GetComments, PostComment } from '../../../Redux/CommentSlice'
import Loading from '../../Common/Loading'

const BlogComment = () => {
  const { id } = useParams()
  const initialValues = {
    name: '',
    email: '',
    comment: '',
    blog: id
  }
  const { isLoggedin } = useSelector((state) => state.Auth)
  const { comments, commentStatus, commentSubmitStatus } = useSelector((state) => state.Comment)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [data, setData] = useState(initialValues)

  let name, value
  const setCommentData = (e) => {
    name = e.target.name
    value = e.target.value
    setData({ ...data, [name]: value })
  }

  const submitComment = (e) => {
    e.preventDefault()
    if (!isLoggedin) {
      navigate('/login')
    } else {
      dispatch(PostComment(data))
      setData(initialValues)
    }
  }

  useEffect(() => {
    dispatch(GetComments(id))
  }, [id,commentSubmitStatus])
  console.log(comments);

  return (
    <div>
      <div class="blog-comments" data-aos="fade-up">
        {
          comments !== null ? (
            <>

              <h4 class="comments-count">Comments ({comments?.length})</h4><hr />
              {
                comments?.map((item, key) => {
                  return (
                    <>
                      <div id={`comment-${key + 1}`} class="comment clearfix" key={key + 1}>
                        <h5>{item.name}</h5>
                        <time datetime="2020-01-01">{new Date(item.createdAt).toLocaleDateString()}</time>
                        <p>{item.comment}</p>

                      </div>
                    </>
                  )
                })
              }
            </>
          ) : (
            <>
              {<Loading />}
            </>
          )
        }



        <div class="reply-form">
          <h4>Leave a Reply</h4>
          <p>Your email address will not be published. Required fields are marked * </p>
          <form>
            <div class="row">
              <div class="col-md-6 form-group">
                <input name="name" type="text" class="form-control" placeholder="Your Name*" onChange={setCommentData}
                  value={data.name} />
              </div>
              <div class="col-md-6 form-group">
                <input name="email" type="text" class="form-control" placeholder="Your Email*" onChange={setCommentData}
                  value={data.email} />
              </div>
            </div>

            <div class="row">
              <div class="col form-group">
                <textarea name="comment" class="form-control" placeholder="Your Comment*" onChange={setCommentData}
                  value={data.comment} ></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-primary" onClick={submitComment}>Post Comment</button>

          </form>

        </div>

      </div>
    </div>
  )
}

export default BlogComment
