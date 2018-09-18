import request from 'superagent'

export function receiveColours(colours){
  return {
    type: 'RECEIVE_COLOURS',
    colours: colours
  }
}

export function fetchColours() {
  return (dispatch) => {
    request.get('/api/v1/colours')
    .then((res) => {
      return res.body
    }).then(colours => {
      dispatch(receiveColours(colours))
    })
  }
}
