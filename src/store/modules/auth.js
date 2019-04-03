export default {
  state: {
    auth: {
      login: '',
      id: ''
    }
  },
  mutations: {
    setAuth (state, payload) {
      this.state.auth.login = payload.login
      this.state.auth.id = payload.id
    }
  },
  actions: {},
  getters: {
    getAuth: state => state.auth
  }
}
