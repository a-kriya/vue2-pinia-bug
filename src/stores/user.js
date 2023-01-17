import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    _users: undefined,
  }),

  getters: {
    users(state) {
      return state._users || []
    },
  },

  actions: {
    async fetchAllUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/')
      const data = await res.json()
      this._users = data
    },

    async fetchUser(id = '') {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
      const data = await res.json()
      this._users = [data]
    },
  },
})
