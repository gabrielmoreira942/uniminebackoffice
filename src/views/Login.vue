<template>
  <v-app >
    <v-main>
      <v-card width="500px" class="mx-auto  mt-10">
        <div align="center">
          <img 
          src="../assets/logo_Unimine.png" 
          width="200px" 
          
          />
        </div>
        <!-- <v-card-title>Login</v-card-title> -->
      
        <v-card-text>
          <v-text-field
            label="Username"
            prepend-icon="mdi-account-circle"
            color="red"
          />
          <v-text-field
            label="Senha"
            :type="mostrarSenha ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'"
            color="red"
            @click:append="mostrarSenha = !mostrarSenha"
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn class="white--text" @click="logar()" color="red">Logar</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="registrar()"   color="white" class="red--text">Cadastre-se</v-btn>
        </v-card-actions>
  
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import Register from './Register.vue'
export default {
  components:{
    Register,
  },
  data() {
    return {
      mostrarSenha: false,
      login: true
    };
  },
  methods: {
    registrar(){
      this.$router.push('register')
    },
    logar(){
      this.$router.push('dashboard')
    }
  }
};
</script>

<style scoped>

</style>