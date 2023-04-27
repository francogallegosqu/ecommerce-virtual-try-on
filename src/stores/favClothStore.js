import { defineStore } from 'pinia'
import qs from 'qs'

import Api from '../api'
export const useFavClothStore = defineStore('favClothStore', {
  state: () => ({ favClothes: [] }),
  getters: {
    getfavClothes: (state) => state.favClothes,
  },
  actions: {
    async listFavCloths(user) {
      try {
        // console.log(user);
        const url_query = `/api/user/me/fav_cloths`;
        const config = {
          headers: { Authorization: `Bearer ${user.jwt}` }
        };
        
        const responseData = await Api.get(url_query, config);

        console.log(responseData);
        if (responseData) {
          this.favClothes = responseData.data.cloths;
          console.log(this.favClothes);
        } else {
          console.log('hubo un error al cargar los datos');
        }

      } catch (error) {
        return error
      }
    },
  },
})
