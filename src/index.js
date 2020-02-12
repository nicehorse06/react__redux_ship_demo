import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import react from '../style/main.css'

// 把純JS的reducer轉成store
const store = createStore(rootReducer)

// Provider讓所有的container可以調用store，而不用props傳入
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)