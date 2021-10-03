<template>
  <div>
    <v-app>
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <v-card class="elevation-12">
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-row>
                    <v-col cols="12" md="8">
                       <v-card-text class="mt-12">
                          <h1 class="text-center display-2 red--text text--accent-3">Bem vindo ao Unimine!</h1>
                          <h4 class="text-center">Faça seu Login</h4>
                          <v-form>
                            <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="red"
                            >
                            </v-text-field>
                            <v-text-field
                            label="Senha"
                            name="Senha"
                            prepend-icon="mdi-lock"
                            color="red"
                            >

                            </v-text-field>
                            <v-btn @click="home()">Login</v-btn>
                          </v-form>
                         <!-- <div class="text-center" mt-4> -->
                           <!-- <v-btn class="mx-2"
                            fab color="black"
                            outlined
                            >
                            <v-icon>mdi-plus</v-icon>
                            </v-btn> -->
                         <!-- </div> -->
                       </v-card-text>
                      </v-col>
                       <v-col cols="12" md="4"></v-col>
                    </v-row>
                  </v-window-item>
                  <v-window-item :value="2"></v-window-item>
                </v-window>       
         
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>

      <!-- <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="first"
            label="First Name"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="last"
            label="Last Name"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form> -->
  </div>

</template>

<script>
export default {

  data(){
    return{
      step: 1
    }
  },
  props:{
    source: String
  },

  methods: {
    home(){
      this.$router.push('home')
    }
  }
}
</script>
