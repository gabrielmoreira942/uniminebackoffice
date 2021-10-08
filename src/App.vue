<template v-if="notIsLogin">
  <v-app>
    <template class="sidebar" v-if="notIsLogin">
      <SideBar />
    </template>
    <v-app-bar app color="gray"  v-if="notIsLogin">
      <v-row class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/logo_Unimine.png"
          width="100"
        />
      </v-row>
      <v-spacer></v-spacer>

      <v-btn v-if="notIsLogin"
        @click="logout()"
        target="_blank"
        text
        color="red"
      >
        <span class="mr-2">Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-main>
     <router-view />
    </v-main>
      
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
      return this.$route.name !== "Login" && this.$route.name !== "Register";
    },
  },
};
</script>
