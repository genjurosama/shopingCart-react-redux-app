// @flow
/* eslint-disable react/jsx-wrap-multilines */

// IMPORTS
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import App from './app.jsx'
import reducer from './reducers'



const logger = createLogger()
const store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger),
)
const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <AppContainer>
      <Router>
        <AppComponent />
      </Router>
    </AppContainer>
  </Provider>
)

ReactDOM.render(wrapApp(App, store), document.getElementById('root'))
