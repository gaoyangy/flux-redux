import fly from 'flyio'
import react from 'react'
const ajax = {
 get (refs){
    return new Promise((resolve,reject) => {
      return setTimeout((refs) =>{
        resolve(1123)
      }, 1000);
    })
  }
}
export default ajax