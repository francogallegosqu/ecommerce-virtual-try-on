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

          console.log('cloth',responseData);
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
        new_cloths = new_cloths.map(cloth => {
          return {
            id: cloth.id,
          }
        })
        console.log('new_cloths:', new_cloths);
        const url_query = `/api/user/me`;
        const config = {
          headers: { 'Authorization': `Bearer ${user.jwt}` }
        };

        const responseData = await Api.put(url_query,
          {
            cloths: new_cloths,
          },
          config);

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
        const arr = this.favCloths.find(cloth => cloth.id === cloth_id);
        // console.log('arr:',arr);
        if (!this.favCloths.find(cloth => cloth.id === cloth_id)) {
          return await this.updateFavCloth(user, this.favCloths.concat({
            id: cloth_id,
          }));

        } else {
          console.log(`el elemento con id: ${cloth_id} ya existe en el arreglo`);

        }
      } catch (error) {
        console.error(error);
        return error
      }
    },

    async removeFavCloth(user, cloth_id) {
      try {
        const new_cloths = this.favCloths.filter(cloth => cloth.id !== cloth_id);
        console.log(this.favCloths, cloth_id, new_cloths);
        if (new_cloths.length < this.favCloths.length) {
          console.log('entro aca p');
          return await this.updateFavCloth(user, new_cloths);
        } else {
          console.log(`el elemento con id: ${cloth_id} NO existe en el arreglo`);
        }
      } catch (error) {
        console.error(error);
        return error
      }
    },
  },
})
