import { defineStore } from 'pinia'
import Api from '../api'
export const clothStore = defineStore('clothStore', {
    state: () => ({ clothes: [] }),
  getters: {
    getClothes: (state) => state.clothes,
  },
  actions: {
    async listClothes(user) {
      try {
        let url = '/api/list_clothes'
        
        console.log('cloth_store url:',url);
        const responseData = await Api.get(url);
        console.log(responseData);
        if (responseData) {
          const size_user = user?.user?.size
        
          if (size_user) {
            this.clothes = responseData.data.filter(cloth => cloth.size === size_user);
          } else {
            this.clothes = responseData.data;

          }
          console.log('imprimiendo en clothStore', this.clothes);
        } else {
          console.log('hubo un error al cargar los datos');
        }
      } catch (error) {
        console.error(error);
        return error
      }
    },
  },
})
