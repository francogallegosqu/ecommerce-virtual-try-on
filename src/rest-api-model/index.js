import axios from 'axios'

export const baseURL = import.meta.env.API_BASE_URL || 'https://5250-35-247-96-26.ngrok-free.app'

const RestApiModel = axios.create({
  // eslint-disable-next-line no-undef
  baseURL,
  headers: {
    "ngrok-skip-browser-warning":"any",
  },
})

export default RestApiModel
