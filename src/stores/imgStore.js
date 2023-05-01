import { defineStore } from 'pinia'
export const imgStore = defineStore('imgStore', {
    state: () => ({ data: JSON.parse(localStorage.getItem("img")) || null }),
  getters: {
    getImg: (state) => state.data,
  },
  actions: {
    updateDataImg(){
      this.data = JSON.parse(localStorage.getItem("img"))
    },
  },
})
