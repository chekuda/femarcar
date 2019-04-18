
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './redux/configureStore'
import App from './App'

import './styles/global.scss'

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Provider store={configureStore()}>
        <Component/>
      </Provider>
    </AppContainer>
  , document.getElementById('root'))
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default
    renderApp(App)
  })
}
