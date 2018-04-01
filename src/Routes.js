import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Users from './components/Users'
import Albums from './components/Albums'
import Photos from './components/Photos'
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Users}/>
      <Route path='/users/:userId/albums' component={Albums}/>
			<Route path='/albums/:albumId' component={Photos} />
    </Switch>
  </main>
)

export default Routes
