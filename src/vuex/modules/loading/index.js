export default {
  state: {
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    UPDATE_LOADING (state, status) {
      state.isLoading = status
    },
    UPDATE_DIRECTION (state, direction) {
      state.direction = direction
    }
  }
}
