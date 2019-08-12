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



