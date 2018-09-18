
function reducer(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_COLOURS':
      return action.colours
    default:
      return state
  }
}

export default reducer
