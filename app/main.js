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
  del (event) {
    store.dispatch({ type: 'DECREMENT', payload:this.refs.inputVal.value})
  },
  addListValue (old,news) {
    console.log(old,news,this)
  },
  addList () {
    store.getState(this.refs.inputVal.value)
    store.dispatch({ type: 'UPDATELIST', payload:{inputVal:this.refs.inputVal.value,oldState:store.getState()}})    
  },
  removeList(key) {
    console.log(key,this)
    store.dispatch({ type: 'REMOVELIST', payload:{list:this.props.list,id :key}})
  }

}
const render = () => ReactDOM.render(
  <Counter
    list = {store.getState()}
    value={store.getState()}
    onIncrement={methods.adds}
    onDecrement={methods.del}
    addList={methods.addList}
    removeList={methods.removeList}
  />,
  rootEl
)
render()
store.subscribe(render)

