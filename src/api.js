import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

export const userAuth = (email, password) => {
  instance
    .post('/signin', { email, password })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
}
