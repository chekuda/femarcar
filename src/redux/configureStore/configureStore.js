import { createStore } from 'redux'

import rootReducers from '../reducers'

export default (initialState) =>
  createStore(
    rootReducers(),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
  )
