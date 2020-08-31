import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { AppModule } from './modules/app.module'

ReactDOM.render(<AppModule />, document.getElementById('root'))

//serviceWorker.unregister()
