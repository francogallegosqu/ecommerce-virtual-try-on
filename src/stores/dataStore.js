import { defineStore } from 'pinia'
export const dataStore = defineStore('dataStore', {
    state: () => ({ data: JSON.parse(localStorage.getItem("data")) || null }),
  getters: {
    getUser: (state) => state.data,
  },
  actions: {
    logout() {
      console.log('remove')
        localStorage.removeItem("data");
    },
  },
})
