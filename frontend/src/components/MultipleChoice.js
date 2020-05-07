import React from 'react'
import axios from 'axios'
import Spinner from './Spinner'
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item)
}
let rightAnswers = 0
let wrongAnswers = 0
let totalAnswered = rightAnswers + wrongAnswers
class MultipleChoice extends React.Component {
  constructor() {
    super()
    this.state = {
      wholeQuestion: {
        results: []
      }
    }
  }

  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
      .then(res => this.setState({ wholeQuestion: res.data }))
  }
  
  handlePlayerClick(event) {
    if (event.target.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
      event.target.style.backgroundColor = 'green'
      rightAnswers++
      localStorage.setItem('right', rightAnswers)
      totalAnswered = rightAnswers + wrongAnswers
    } else {
      event.target.style.backgroundColor = 'red'
      wrongAnswers++
      localStorage.setItem('wrong', wrongAnswers)
      totalAnswered = rightAnswers + wrongAnswers
      if (this.AnswerA.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
        this.AnswerA.style.backgroundColor = 'green'
      } else if (this.AnswerB.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
        this.AnswerB.style.backgroundColor = 'green'
      } else if (this.AnswerC.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
        this.AnswerC.style.backgroundColor = 'green'
      } else if (this.AnswerD.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
        this.AnswerD.style.backgroundColor = 'green'
      }
    }
    if (totalAnswered === 10) {
      setTimeout(() => {
        this.props.history.push('/display-score')
        rightAnswers = 0
        wrongAnswers = 0
        totalAnswered = 0
      }, 400)
    } else {
      axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
        .then(res => this.setState({ wholeQuestion: res.data }))
      setTimeout(() => {
        this.AnswerA.style.backgroundColor = 'buttonface'
        this.AnswerB.style.backgroundColor = 'buttonface'
        this.AnswerC.style.backgroundColor = 'buttonface'
        this.AnswerD.style.backgroundColor = 'buttonface'
      }, 400)
    }
  }

  render() {
    const { results } = this.state.wholeQuestion
    const randomIndex = Math.floor(Math.random() * 4)
    const arrayOfAnswers = [results.map((e) => (e.incorrect_answers[0])), results.map((e) => (e.incorrect_answers[1])), results.map((e) => (e.incorrect_answers[2]))]
    arrayOfAnswers.insert(randomIndex, results.map((e) => (e.correct_answer)))
    let category = results.map((e) => (e.category))[0]
    let question = results.map((e) => (e.question))[0]
    let optionA = arrayOfAnswers[0][0]
    let optionB = arrayOfAnswers[1][0]
    let optionC = arrayOfAnswers[2][0]
    let optionD = arrayOfAnswers[3][0]
    if (category !== undefined) {
      category = category.replace(/Entertainment:/g, '').replace(/Science:/g, '')
    }
    if (question !== undefined) {
      question = question.replace(/&quot;/g, '"').replace(/&#039;/g, '\'').replace(/&minus;/g, '-').replace(/&ograve;/g, 'ò').replace(/&deg;/g, '°').replace(/&epsilon;/g, 'ε').replace(/&Phi;/g, 'Φ').replace(/&rsquo;/g, '\'').replace(/&amp;/g, '&').replace(/&eacute;/g, 'é').replace(/&atilde;/g, 'ã').replace(/&prime;/g, '\'').replace(/&Prime;/g, '"').replace(/&uuml;/g, 'ü').replace(/&ouml;/g, 'ö').replace(/&Ouml;/g, 'Ö').replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"').replace(/&iacute;/g, 'í').replace(/&oacute;/g, 'ó').replace(/&Delta;/g, 'Δ')
    }
    if (optionA !== undefined) {
      optionA = optionA.replace(/&quot;/g, '"').replace(/&#039;/g, '\'').replace(/&minus;/g, '-').replace(/&ograve;/g, 'ò').replace(/&deg;/g, '°').replace(/&epsilon;/g, 'ε').replace(/&Phi;/g, 'Φ').replace(/&rsquo;/g, '\'').replace(/&amp;/g, '&').replace(/&eacute;/g, 'é').replace(/&atilde;/g, 'ã').replace(/&prime;/g, '\'').replace(/&Prime;/g, '"').replace(/&uuml;/g, 'ü').replace(/&ouml;/g, 'ö').replace(/&Ouml;/g, 'Ö').replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"').replace(/&iacute;/g, 'í').replace(/&oacute;/g, 'ó').replace(/&Delta;/g, 'Δ')
    }
    if (optionB !== undefined) {
      optionB = optionB.replace(/&quot;/g, '"').replace(/&#039;/g, '\'').replace(/&minus;/g, '-').replace(/&ograve;/g, 'ò').replace(/&deg;/g, '°').replace(/&epsilon;/g, 'ε').replace(/&Phi;/g, 'Φ').replace(/&rsquo;/g, '\'').replace(/&amp;/g, '&').replace(/&eacute;/g, 'é').replace(/&atilde;/g, 'ã').replace(/&prime;/g, '\'').replace(/&Prime;/g, '"').replace(/&uuml;/g, 'ü').replace(/&ouml;/g, 'ö').replace(/&Ouml;/g, 'Ö').replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"').replace(/&iacute;/g, 'í').replace(/&oacute;/g, 'ó').replace(/&Delta;/g, 'Δ')
    }
    if (optionC !== undefined) {
      optionC = optionC.replace(/&quot;/g, '"').replace(/&#039;/g, '\'').replace(/&minus;/g, '-').replace(/&ograve;/g, 'ò').replace(/&deg;/g, '°').replace(/&epsilon;/g, 'ε').replace(/&Phi;/g, 'Φ').replace(/&rsquo;/g, '\'').replace(/&amp;/g, '&').replace(/&eacute;/g, 'é').replace(/&atilde;/g, 'ã').replace(/&prime;/g, '\'').replace(/&Prime;/g, '"').replace(/&uuml;/g, 'ü').replace(/&ouml;/g, 'ö').replace(/&Ouml;/g, 'Ö').replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"').replace(/&iacute;/g, 'í').replace(/&oacute;/g, 'ó').replace(/&Delta;/g, 'Δ')
    }
    if (optionD !== undefined) {
      optionD = optionD.replace(/&quot;/g, '"').replace(/&#039;/g, '\'').replace(/&minus;/g, '-').replace(/&ograve;/g, 'ò').replace(/&deg;/g, '°').replace(/&epsilon;/g, 'ε').replace(/&Phi;/g, 'Φ').replace(/&rsquo;/g, '\'').replace(/&amp;/g, '&').replace(/&eacute;/g, 'é').replace(/&atilde;/g, 'ã').replace(/&prime;/g, '\'').replace(/&Prime;/g, '"').replace(/&uuml;/g, 'ü').replace(/&ouml;/g, 'ö').replace(/&Ouml;/g, 'Ö').replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"').replace(/&iacute;/g, 'í').replace(/&oacute;/g, 'ó').replace(/&Delta;/g, 'Δ')
    }
    if (!this.state.wholeQuestion.results[0]) return <Spinner /> 
    return <div className="flex-container">
      <h2>Category: {category}</h2>
      <div className="quizz">
        <div className="question">Question {totalAnswered + 1}: {question}</div>
        <button ref={button => {
          this.AnswerA = button
        }}
          onClick={() => this.handlePlayerClick(event)}>{optionA}</button>
        <button ref={button => {
          this.AnswerB = button
        }}
          onClick={() => this.handlePlayerClick(event)}>{optionB}</button>
        <button ref={button => {
          this.AnswerC = button
        }}
          onClick={() => this.handlePlayerClick(event)}>{optionC}</button>
        <button ref={button => {
          this.AnswerD = button
        }}
          onClick={() => this.handlePlayerClick(event)}>{optionD}</button>
      </div>
    </div>
  }
}
export default MultipleChoice