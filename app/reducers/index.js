export default  (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return action.payload.res + action.payload.oldState
    case 'DECREMENT':
    return state - 1
    case 'UPDATELIST':
    let list = action.payload.oldState || []
    list.push(action.payload.inputVal)
      return list
    case 'REMOVELIST':
      let newList = action.payload.list ? action.payload.list : []
      if (newList.length) {
        newList.splice(action.payload.id,1)
      }
      return newList
    default:
      return state
  }
}