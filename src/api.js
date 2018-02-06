import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
})

export const  userAuth = async (username, password) => {
  let res = await instance
    .post('/signin', { username, password })
    .catch(error => {
      console.log(error)
    })

    return res.data
}

export const mainForm = (auth = {}) => {
  instance
    .get('/main', { header: auth })
    .then(({ data }) => {
      data
    })
}
