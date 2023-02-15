import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      loggedIn: null,
      name: '',
      email: ''
    }
  }),
  getters: {
    user: (state) => state.user
  },
  actions: {
    login(state, payload) {
      state.user = {
        ...state.user,
        loggedIn: Object.keys(payload).length ? true : false,
        name: payload.user.name ? payload.user.name : '',
        email: payload.user.email ? payload.user.email : '',
      }
    },
    logout(state, payload) {
      state.user = {
        loggedIn: null,
        name: '',
        email: ''
      }
    }
  }
});
