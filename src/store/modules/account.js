const state = {
    userId: null
  };
  
  const mutations = {
    logout(state) {
      state.userId = null;
    },
    login(state, userId) {
      state.userId = userId;
    }
  };
  
  const getters = {
    getMyUserId: state => state.userId
  }

  export default {
    state,
    mutations,
    getters
  }
  