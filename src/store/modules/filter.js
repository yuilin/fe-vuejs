export default {
  state: {
    filter1: null,
    filter2: null,
    filter3: null,
    filter4: null,
    filter5: null,
    filter6: null,
    filter7: null,
    filter8: null
  },
  mutations: {
    setFilter1 (state, payload) {
      state.filter1 = payload
    },
    setFilter2 (state, payload) {
      state.filter2 = payload
    },
    setFilter3 (state, payload) {
      state.filter3 = payload
    },
    setFilter4 (state, payload) {
      state.filter4 = payload
    },
    setFilter5 (state, payload) {
      state.filter5 = payload
    },
    setFilter6 (state, payload) {
      state.filter6 = payload
    },
    setFilter7 (state, payload) {
      state.filter7 = payload
    },
    setFilter8 (state, payload) {
      state.filter8 = payload
    }
  },
  getters: {
    getFilter1: state => state.filter1,
    getFilter2: state => state.filter2,
    getFilter3: state => state.filter3,
    getFilter4: state => state.filter4,
    getFilter5: state => state.filter5,
    getFilter6: state => state.filter6,
    getFilter7: state => state.filter7,
    getFilter8: state => state.filter8
  }
}
