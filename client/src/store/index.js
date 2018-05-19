// import createPersistedState from 'vuex-persistedstate';

import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    baseUrl: '/api',
  },
  modules: {
    authentication,
  },
  mutations: {

  },
  actions: {

  },
  // plugins: [
  //   createPersistedState(),
  // ],
});
