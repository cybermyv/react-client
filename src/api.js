import axios from 'axios';

const instance = axios.create ({baseURL: '/api'});

export const userAuth = (username, password) => instance
    .post('/user/auth', { username, password })
    .then(({data}) => data) 
