import Vue from 'vue';
import 'es6-promise/auto'
import Vuex from 'vuex'
import user from '@/store/modules/user.js';
import post from '@/store/modules/post.js';

Vue.use(Vuex)

export default new Vuex.Store({
  // namespaced: true,
  modules: {
    post,
    user
  },
})