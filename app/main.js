import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger';
import Counter from './components/Counter'
import counterAction from './reducers'
import api from './api/api'
const logger = createLogger();
const store = createStore(counterAction,applyMiddleware(logger))

const rootEl = document.getElementById('root')

const methods ={
  adds () {
      api.get().then(data => {
        store.dispatch({ type: 'INCREMENT' ,payload:{res:data,oldState:store.getState()}})
      })
  },
  del () {
    store.dispatch({ type: 'DECREMENT' })
  }
}
const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={methods.adds}
    onDecrement={methods.del}
  />,
  rootEl
)
render()
store.subscribe(render)

