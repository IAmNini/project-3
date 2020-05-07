import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'
import NewComment from './NewComment'

class Comments extends React.Component {

  constructor() {
    super()
    this.state = {
      comments: []

    }
  }

  componentDidMount() {
    axios.get('/api/comments')
      .then(res => {
        this.setState({ comments: res.data.reverse() })
      })
  }

  handeleDelete(comment) {
    const id = comment._id
    axios.delete(`/api/comments/${id}`,
      { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(() => location.reload())
  }

  isOwner(comment) {
    return auth.getUserId() === comment.user.id
  }

  render() {
    console.log(this.state.comments)

    return <>
      <div className='commentsHeader'>
        <h1>Leave your comments and reviews</h1>
      </div>
      <div className='columns'>
        <div className='commentsForm'>
          <h2 className='titleForm'>Say somehting!</h2>
          <p className='hintForEmoticons'>🥳🙌🏼🤩Remember that you can write emoticons by doing 'control' + 'command' + 'spacebar'. 😜😏😎</p>
          <NewComment />
        </div>
        <h2 className='titleComments'>Comments</h2>
        <div className='listOfComments'>
          {this.state.comments.map((comment, i) => {
            const isOwner = this.isOwner(comment)
            console.log(comment)
            return <div className='commentInfo' key={i}>
              <div className="commentBox">
                <h4 className='userNameComments'>{comment.user.username}</h4>
                <p>{comment.comment}</p>
                {isOwner && <figure className='binContainer'><img
                  onClick={() => this.handeleDelete(comment)}
                  className='bin' src="../styles/images/bin1.png" alt="bin" /></figure>}
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  }
}

export default Comments