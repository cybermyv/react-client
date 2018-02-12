import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
})

export const userAuth = async (username, password) => {
  let res = await instance
    .post('/signin', { username, password })
    .catch(error => {
      console.log(error)
    })
  if (res.data === undefined) { return res } else {
    return res.data
  }


}

export const getAllDbf = async () => {
  let res = await instance.get('/main').then(({ data }) => {
//    console.log('DBF', data)
  return  data
  })
  console.log('res', res)
  return res;
}
