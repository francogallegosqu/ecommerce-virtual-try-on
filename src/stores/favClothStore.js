import { defineStore } from 'pinia'
import qs from 'qs'

import Api from '../api'
export const useFavClothStore = defineStore('favClothStore', {
    state: () => ({ favClothes: [] }),
  getters: {
    getfavClothes: (state) => state.favClothes,
  },
  actions: {
    async listFavClothes(user_id) {
      try {
        
        if(!user_id) user_id = 16
        console.log(user_id);
        
        // query para obtener las ropas favoritas por cliente.
        const query = qs.stringify({
          filters: {
            user_id: {
              id: {
                $eq: user_id,
              },
            },
          },
          populate: {
            cloth_id: {
              fields: ['*'],
              populate: {
                  img: {
                      fields: ['url']
                  },
                  sizes: true
              }
            }
          }
        }, {
          encodeValuesOnly: true,
        });
        
        const url_query = `/api/user-cloths?${query}`
        // console.log(url_query);

        const responseData = await Api.get(url_query);
        
        console.log(responseData);
        if (responseData) {
          this.favClothes = responseData.data;
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
