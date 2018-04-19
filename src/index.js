import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Root from 'components/root'
import reducers from 'Redux/reducers'

import "babel-polyfill"
import './styles.less'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const _Root = () => {
  return (
    <Provider store={ store }>
      <Root />
    </Provider>
  )
}

ReactDOM.render(<_Root />, document.getElementById('root'))
