import axios from 'axios'

export const baseURL = import.meta.env.API_BASE_URL || 'https://2688-34-168-215-86.ngrok-free.app/'

const RestApiModel = axios.create({
  // eslint-disable-next-line no-undef
  baseURL,
  headers: {
    "ngrok-skip-browser-warning":"any",
  },
})

export default RestApiModel
