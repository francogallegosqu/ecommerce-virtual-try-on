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
        
        // console.log(responseData);
        const data = responseData.data
        console.log('data json', data.user.id)
        localStorage.setItem("data", JSON.stringify(data));
          
        const url_query = `/api/users/${data.user.id}?populate[file]=*`;
        const response = await Api.get(url_query);
        localStorage.setItem("img", JSON.stringify(response.data.file));

        if (responseData) return responseData.status == '200'
      } catch (error) {
        return error
      }
    },

    async detailsMe(user) {
      try {

        const url_query = `/api/user/me`;
        const config = {
          headers: { Authorization: `Bearer ${user.jwt}` }
        };

        const responseData = await Api.get(url_query, config);
        
        console.log(responseData);

        localStorage.setItem("data", JSON.stringify(responseData.data));
        if (responseData) return responseData.status == '200'
      } catch (error) {
        return error
      }
    },
  },
})
