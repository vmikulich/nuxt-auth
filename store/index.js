export const state = () => ({
  token: null
})

export const mutations = {
  setToken (state, payload) {
    state.token = payload
  },
  clearToken (state) {
    state.token = null
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.token) {
      commit('setToken', req.session.token)
    }
  },
  async login ({ commit }, payload) {
    try {
      const res = await this.$axios.$post('/api/login', payload)
      commit('setToken', res)
    } catch (e) {
      throw e
    }
    
  },
  logout ({ commit }) {
    commit('clearToken')
  }
}

export const getters = {
  hasToken (state) {
    return !!state.token
  }
}