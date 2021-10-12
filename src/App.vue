<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Intervenn Technical Exam</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="currentUser">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <router-link to="/">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-newspaper-variant</v-icon>
              </v-btn>
            </router-link>
          </template>
          <span>Posts</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <router-link to="users">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-account</v-icon>
              </v-btn>
            </router-link>
          </template>
          <span>Users</span>
        </v-tooltip>
        <h4 class="mx-5">Hi Urielle</h4>
      </template>
    </v-app-bar>
    <v-main>
      <v-container class="pa-5">
        <router-view></router-view>
        <!-- <Wall /> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  // import Wall from './components/Wall/Wall';

  export default {
    name: 'App',
    components: {
      // Wall 
    },

    data: () => ({
      currentUser: null
    }),
    mounted() {
      if(localStorage.getItem('currentUser')) {
        var curUser = JSON.parse(localStorage.getItem('currentUser'))

        this.currentUser = curUser;
      }
    }
};
</script>