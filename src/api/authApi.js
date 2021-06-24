import axiosClient from './axiosClient'

const authApi = {
  login: (email, password) => {
    const url = '/login'
    return axiosClient.post(url, { email, password })
  },
}

export default authApi
