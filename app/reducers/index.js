export default  (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return action.payload.res + action.payload.oldState
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}