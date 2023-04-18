import axios from 'axios'

export const baseURL = import.meta.env.API_BASE_URL || 'http://localhost:1337'

const Api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})

export default Api
