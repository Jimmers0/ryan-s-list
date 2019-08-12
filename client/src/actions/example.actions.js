import store from '../store'
import axios from 'axios'


export function getMainCat() {
  axios.get('api/home').then(resp => {
    
    let data = (resp.data)
    console.log(data)
    store.dispatch({
      type: 'CATEGORY',
      payload: data
    })
  })
}

export function getPosts(slug) {
  axios.get('/api/posts/' + slug).then(resp =>  {
    console.log('actions: ' + resp.data)
    store.dispatch({
      type: 'GET_POSTS',
      payload: resp.data
    })
  })
}

export function getCategoryName(slug){
  axios.get('/api/category/' + slug).then(resp => {
    store.dispatch({
      type: 'GET_CURRENT_CATEGORY',
      payload: resp.data.name
    })
  })
}



