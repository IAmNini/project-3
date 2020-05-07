import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'

class NewComment extends React.Component {

  constructor() {
    super()
    this.state = {
      comment: ''
    }
  }
  handleChange(event) {
    const comment = event.target.value
    this.setState({ comment })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/comments',
      this.state,
      { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(() => location.reload())

  }
  
  render() {
    return <div>
      <form
        className='formForComments'
        onSubmit={this.handleSubmit(event)}>
        <textarea
          className='inputComment'
          onChange={this.handleChange(event)}
          type="text"
        >
        </textarea>
        <button className='submitButton'>Comment ⌨️</button>
      </form>
    </div>
  }
}

export default NewComment