const initialState = {
  categories: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORY':
      return {...state, categories: action.payload}
    default:
      return state
  }
}