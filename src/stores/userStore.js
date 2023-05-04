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
        console.error(error);
        alert('Usuario ya existe y/o Error')
        
      }
    },
    // async uploadImgToRestApiModel() {
    //   try {
    //     const url_query = `/api/users/${data.user.id}?populate[file]=*`;
    //     const response = await Api.get(url_query);
        
    //     if (response.status === 200) {
    //       // enviar nueva imagen al rest api modelo
    //       const responseAPI = await RestApiModel.post('/prepro_user', {
    //         "id": response.data.id,
    //         "url": response.data.file.url
    //       })
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     alert('Hubo un error al enviar el archivo de la persona')
    //   }
    // },
  },
})
