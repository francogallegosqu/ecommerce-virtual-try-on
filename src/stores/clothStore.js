import { defineStore } from 'pinia'
import Api from '../api'
export const clothStore = defineStore('clothStore', {
    state: () => ({ clothes: [] }),
  getters: {
    getClothes: (state) => state.clothes,
  },
  actions: {
    async listClothes() {
      try {
        const responseData = await Api.get('/api/list_clothes');
        console.log(responseData);
        if (responseData) {
          this.clothes = responseData.data;
        } else {
          console.log('hubo un error al cargar los datos');
        }
      } catch (error) {
        return error
      }
    },
  },
})
