import router from "@/router"

const state = {
  user: JSON.parse(localStorage.getItem("user")) || null
}

const getters = {
  "auth/getUser": (state) => state.user
}

const mutations = {
  setUser(state, user) {
    state.user = user
    localStorage.setItem("user", JSON.stringify(user))
  },
  clearUser(state) {
    state.user = null
    localStorage.removeItem("user")
  }
}

const actions = {
  "auth/loginUser"({ commit }, user) {
    commit("setUser", user)
  },
  "auth/logout"({ commit }) {
    commit("clearUser")
    router.push("/login")
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
