import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard'
import QuestionNew from './QuestionNew'
import QuestionSwitch from './QuestionSwitch'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import Logout from './Logout'
import PageNotFound from './PageNotFound'

function Routes() {

  return (
    <div>
      <Switch>
        <Route path='/questions/:id' component={QuestionSwitch} />
        <Route path='/add' exact component={QuestionNew} />
        <Route path='/leaderboard' exact component={LeaderBoard} />
        <Route path='/login' exact component={Login} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/' exact component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default Routes