
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'

import App from './App'

import './styles/global.scss'

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component/>
    </AppContainer>
  , document.getElementById('root'))
}

renderApp(App)

// eslint-disable-next-line no-undef
if (module.hot) {
  // eslint-disable-next-line no-undef
  module.hot.accept('./App', () => {
    const App = require('./App').default
    renderApp(App)
  })
}
