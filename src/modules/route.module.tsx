import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { HomeModule } from './home.module'
import { LoginModule } from './login.module'

const RouteModule: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <HomeModule />
        </Route>
        <Route path='/login'>
          <LoginModule />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export { RouteModule }
