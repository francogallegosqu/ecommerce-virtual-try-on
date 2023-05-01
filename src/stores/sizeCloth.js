import { defineStore } from 'pinia'
import Api from '../api'
export const sizeCloth = defineStore('sizeCloth', {
    state: () => ({ sizeclothes: [] }),
  getters: {
    getlist: (state) => state.sizeclothes,
  },
  actions: {
    async listFilter(query) {
      try {
        const url_query = `/api/cloths?filters[categoria][$eq]=${query}&populate[img]=*`;
        // const url_query = `/api/cloths`;

        const responseData = await Api.get(url_query);
        if (responseData) {
          this.sizeclothes = responseData.data.data;
          console.log('imprimiendo en sizeCloth.js', this.sizeclothes);
        } else {
          console.log('hubo un error al cargar los datos');
        }
      } catch (error) {
        return error
      }
    },
  },
})
