import { defineStore } from 'pinia'
import Api from '../api'
export const userStore = defineStore('user', {
  actions: {
    async sendUser(params) {
      try {
        const { username, password, dni, file, email, select } = params
        console.log({ username, password, dni, file, email })
        const formData = new FormData()
        const formFile = new FormData()
        formFile.append('files', file)
        const response = await Api.post('/api/upload', formFile, {
          headers: {
            'Content-Type': 'multipart/form-data; charset=utf-8',
          },
        })
        formData.append('username', username)
        formData.append('size', select)
        formData.append('password', password)
        formData.append('email', email)
        formData.append('dni', dni)
        formData.append('file', response.data[0].id)
        const responseData = await Api.post('/api/auth/local/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data; charset=utf-8',
          },
        })
        console.log(responseData, 'status', responseData.status)
        if (responseData) return responseData.status == '200'
      } catch (error) {
        alert('Usuario ya existe y/o Error')
        
      }
    },
  },
})
