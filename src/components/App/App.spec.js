import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

describe('given App component', () => {
  describe('when trying to render the App component', () => {
    it('should render the App component', () => {
      const { queryByTestId } = render(<App />)

      expect(queryByTestId('container')).toMatchSnapshot()
    })
  })
})
