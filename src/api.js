import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
})

export const userAuth = (username, password) => {
  instance
    .post('/signin', { username, password })
    .then(({ data }) => {
    //  console.log('userAuth=>', data);
    return data})
    .catch(error => {
      console.log(error)
    })
}

export const mainForm = (auth = {}) => {
  instance
    .get('/main', { header: auth })
    .then(({ data }) => {
      data.main
    })
}
