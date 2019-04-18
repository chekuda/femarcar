import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('given App component', () => {
  describe('when trying to render the App component', () => {
    it('should render the App component', () => {
      const component = shallow(<App />)

      expect(component.length).toBe(1)
    })
  })
})
