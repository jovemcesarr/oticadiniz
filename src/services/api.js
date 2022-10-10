import axios from 'axios'

export const api = axios.create({
   baseURL: 'https://oticadiniz.herokuapp.com' 
})
