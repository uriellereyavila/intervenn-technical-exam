import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory'
import Wall from './components/Wall/Wall'
import Users from './components/Users/Users'
import store from './store/store';

const cache = new InMemoryCache()

export const ClientRequest = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache
});

Vue.use(VueRouter)
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Wall },
  { path: '/users', component: Users },
]

const router = new VueRouter({
  routes
})

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
