import React from 'react'
import classnames from 'classnames'
import image1 from 'assets/mockimage.png'

import styles from './App.module.scss'

const App = () =>
  <div
    className={classnames(styles.container, styles.text)}
    data-testid='container'
  >
    <img src={image1} />
    jose
  </div>

export default App
