const initialState = {
  categories: [],
  posts: [],
  category: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORY':
      return {...state, categories: action.payload}
    case 'GET_POSTS':
      return {...state, posts: action.payload}
    case 'GET_CURRENT_CATEGORY':
      return {...state, category: action.payload}
    default:
      return state
  }
}