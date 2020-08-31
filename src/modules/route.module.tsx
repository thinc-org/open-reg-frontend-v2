import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeModule } from './home.module'
import { LoginModule } from './login.module'

const RouteModule: React.FC = () => {
  return (
    <Switch>
      <Route path='/'>
        <HomeModule />
      </Route>
      <Route path='/login'>
        <LoginModule />
      </Route>
    </Switch>
  )
}

export { RouteModule }
