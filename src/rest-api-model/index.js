import axios from 'axios'

export const baseURL = import.meta.env.API_BASE_URL || 'https://6075-35-224-158-13.ngrok-free.app'

const RestApiModel = axios.create({
  // eslint-disable-next-line no-undef
  baseURL,
  headers: {
    "ngrok-skip-browser-warning":"any",
  },
})

export default RestApiModel
