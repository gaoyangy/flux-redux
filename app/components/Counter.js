import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.removeList = this.removeList.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }
  removeList(key) {
    console.log(this,key)
  }
  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }
  addMath(){
    store.dispatch({ type: 'INCREMENT' })
  }
  render() {
    let {inputValue, list, value, onIncrement, onDecrement,addList,removeList } = this.props
    let lists = list ? Array.from(list) : []
    let values = lists.length
    return (
      <p>
        <i>redux to do</i>
        <br/>
        sum: {values}
        <br/>
          {lists.map((result, key) => {
            return <span key={key}><button onClick={removeList.bind(this,key)}>X</button>-------{result}<br/></span>
        },this)
        }
        <br/>
        <input ref="inputVal"/>
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement.bind(this)}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
        <button onClick={addList.bind(this)}>
        addList
      </button>
      </p>
    )
  }
}

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default Counter