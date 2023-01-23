export const state = () => ({
  employes: [],
  data: [],
  datatotal: [],
  errors: [],
  page: 1
})

export const mutations = {
  SET_EMPLOYE_DATA(state, payload) {
      state.employes = payload
  },
  SET_DATA(state, payload) {
      state.data = payload
  },
  SET_DATATOTAL(state, payload) {
    state.datatotal = payload
},
  SET_ERRORS(state, payload) {
      state.errors = payload
  },
  SET_PAGE(state, payload) {
      state.page = payload
  }
}

export const actions = {
  getEmployesData({ commit, state }, payload) {
      let search = payload ? payload:''
      return new Promise((resolve, reject) => {
          this.$axios.get(`/employe?q=${search}&page=${state.page}`).then((response) => {
              commit('SET_EMPLOYE_DATA', response.data.data)
              resolve()
          })
      })
  },
  storeEmployesData({ dispatch, commit }, payload) {
      return new Promise((resolve, reject) => {
          this.$axios.post('/employe', payload)
          .then(() => {
              dispatch('getEmployesData')
              resolve()
          })
          .catch((error) => {
              commit('SET_ERRORS', error.response.data)
          })
      })
  },
  getData({ commit }, payload) {
      return new Promise((resolve, reject) => {
          this.$axios.get(`/employe/${payload}`).then((response) => {
              commit('SET_DATA', response.data.data)
              resolve()
          })
      })
  },
  getDataCount({ commit }, payload) {
    return new Promise((resolve, reject) => {
        this.$axios.get(`/count-all`).then((response) => {
            commit('SET_DATATOTAL', response.data.data)
            resolve()
        })
    })
},
  updateEmployeData({ dispatch, commit }, payload) {
      return new Promise((resolve, reject) => {
          this.$axios.put(`/employe/${payload.id}`, payload)
          .then(() => {
              dispatch('getEmployesData')
              resolve()
          })
          .catch((error) => {
              commit('SET_ERRORS', error.response.data)
          })
      })
  },
  destroyEmployesData({ dispatch, commit }, payload) {
      return new Promise((resolve, reject) => {
          this.$axios.delete(`/employe/${payload}`)
          .then(() => {
              dispatch('getEmployesData')
              resolve()
          })
          .catch((error) => {
              commit('SET_ERRORS', error.response.data)
          })
      })
  },

}
