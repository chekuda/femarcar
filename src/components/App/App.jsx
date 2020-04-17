import React from 'react'
import Button from '@material-ui/core/Button'
import jsxclassnames from 'jsxclassnames'

import User from '../User'
import image1 from 'assets/images/mockimage.png'

import styles from './App.module.scss'

const App = () =>
  <div
    className={jsxclassnames(styles.container, styles.text)}
    data-testid='container'
  >
    <img src={image1} />
    <User />
    <Button variant="contained" color="primary">Default</Button>
  </div>

export default App
