import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/style.scss'
import './styles/remove.css'

import Login from './components/Login'
import Register from './components/Register'
import Quizzes from './components/Quizzes'
import MultipleChoice from './components/MultipleChoice'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import TrueOrFlase from './components/TrueOrFalse'
import DisplayScore from './components/DisplayScore'
import Comments from './components/Comments'
import LeaderBoard from './components/LeaderBoard'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/quizzes" component={Quizzes} />
      <Route exact path="/multiple-choice" component={MultipleChoice} />
      <Route excat path="/true-or-false" component={TrueOrFlase} />
      <Route exact path="/display-score" component={DisplayScore} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path='/comment' component={Comments} />
      <Route exact path='/leader-board' component={LeaderBoard} />
      <Route path="/" component={Register} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
