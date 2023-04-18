import { defineStore } from 'pinia'
export const logStore = defineStore('logStore', {
    state: () => ({
        isLoggedIn: false,
      }),
      getters: {
        getLog: (state) => state.isLoggedIn,
      },
    actions: {
        updateLogin(status) {
          this.isLoggedIn = status
        },
      },
})
