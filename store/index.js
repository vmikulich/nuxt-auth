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
  async signup ({ dispatch, commit }, payload) {
    try {
      const res = await this.$axios.$post('/api/registration', payload)
      dispatch('login', payload)
    } catch (e) {
      throw e
    }
  },
  async logout ({ commit }) {
    try {
      const res = await this.$axios.$post('/api/logout')
      commit('clearToken')
    } catch (e) {
      throw e
    }
  }
}

export const getters = {
  hasToken (state) {
    return !!state.token
  }
}