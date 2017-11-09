import fly from 'flyio'
import react from 'react'
const ajax = {
 get (refs){
    return new Promise((resolve,reject) => {
      return setTimeout((refs) =>{
        resolve(Math.floor(Math.random()*99)+1)
      }, 1000);
    })
  }
}
export default ajax