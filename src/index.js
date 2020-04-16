
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'

import { theme } from '../lib'
import App from './App'

import './styles/global.scss'

const renderApp = (Component) => {
  render(
    <AppContainer>
      <ThemeProvider theme={theme}>
        <Component/>
      </ThemeProvider>
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
