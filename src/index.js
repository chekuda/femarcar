
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import { theme, client } from '../lib'
import App from './components/App'

import './styles/global.scss'

const renderApp = (Component) => {
  render(
    <AppContainer>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Component/>
        </ApolloProvider>
      </ThemeProvider>
    </AppContainer>
  , document.getElementById('root'))
}

renderApp(App)

// eslint-disable-next-line no-undef
if (module.hot) {
  // eslint-disable-next-line no-undef
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default
    renderApp(App)
  })
}
