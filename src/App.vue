<template  v-if="notIsLogin">
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="notIsLogin"
        @click="logout()"
        target="_blank"
        text
      >
        <span class="mr-2">Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-main>
      <router-view />
    </v-main>
    <div class="sidebar" v-if="notIsLogin">
      <SideBar/>
    </div>
  </v-app>
</template>

<script>
import SideBar from './components/SideBar.vue'
export default {
  components:{
    SideBar
  },
  name: "App",

  data: () => ({
    //
  }),

  created() {
    if(this.$route.path === '/'){

       this.$router.push("login");
    }
  },
  methods:{
    logout(){
      this.$router.push('login');
    }
  },
  computed: {
    notIsLogin() {
      return this.$route.name !== "Login";
    },
  },
};
</script>
