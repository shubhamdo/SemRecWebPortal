// https://dev.to/nickitax/persistent-store-with-vuejs-vuex-and-vuex-persisted-state-354n
import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    account,
  },
  plugins: [createPersistedState()]
});

export default store
