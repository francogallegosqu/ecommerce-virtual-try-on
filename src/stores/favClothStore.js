import { defineStore } from 'pinia'

import Api from '../api'
export const useFavClothStore = defineStore('favClothStore', {
  state: () => ({ favCloths: [] }),
  getters: {
    getfavClothes: (state) => state.favCloths,
  },
  actions: {
    async listFavCloths(user) {
      try {
        if (!user || !user.jwt) {
          this.favCloths = [];
        } else {
          // console.log(user);
          const url_query = `/api/user/me/fav_cloths`;
          const config = {
            headers: { Authorization: `Bearer ${user.jwt}` }
          };
          
          const responseData = await Api.get(url_query, config);
  
          console.log(responseData);
          if (responseData) {
            this.favCloths = responseData.data.cloths;
            console.log(this.favCloths);
          } else {
            console.log('hubo un error al cargar los datos');
          }
        }


      } catch (error) {
        return error
      }
    },
    
    async updateFavCloth(user, new_cloths) {
      try {
        const url_query = `/api/user/me/fav_cloths`;
          const config = {
            headers: { Authorization: `Bearer ${user.jwt}` }
          };
          
          const responseData = await Api.put(url_query, new_cloths, config);
  
          console.log(responseData);
          if (responseData) {
            this.favCloths = responseData.data.cloths;
            console.log(this.favCloths);
          } else {
            console.log('hubo un error al cargar los datos');
          }
      } catch (error) {
        return error
      }
    },

    async addFavCloth(user, cloth_id) {
      try {
        console.log(this.favCloths, cloth_id);
        const isFav = this.favCloths.find(cloth => cloth.id === id);
      } catch (error) {
        return error
      }
    },
    
    async removeFavCloth(user, cloth_id) {
      try {
        
      } catch (error) {
        return error
      }
    },
  },
})
