import { defineStore } from 'pinia'
import Api from '../api'
export const loginStore = defineStore('loginStore', {
    state: () => ({ data: JSON.parse(localStorage.getItem("data")) || null }),
  getters: {
    getUser: (state) => state.data,
  },
  actions: {
    async sendLogin(params) {
      try {
        const { identifier, password } = params
        const formData = new FormData()
        formData.append('identifier', identifier)
        formData.append('password', password)

        const responseData = await Api.post('/api/auth/local', formData, {
          headers: {
            'Content-Type': 'multipart/form-data; charset=utf-8',
          },
        })
        localStorage.setItem("data", JSON.stringify(responseData.data));
        if (responseData) return responseData.status == '200'
      } catch (error) {
        return error
      }
    },
  },
})
