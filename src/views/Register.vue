<template>
<v-container>
    <v-main class=" col-md-5 mx-auto text-center mt-10" >

        <div class="title">
            <h1 class="text-center">Cadastro de usuário</h1>
        </div>

         <v-text-field
            label='Nome'
            hide-details='auto'
            filled
            class="mb-4"
            color="red"
            >
        </v-text-field>

        <v-text-field
            label='email'
            type="email"
            hide-details='auto'
            filled
            class="mb-4"
            color="red"
            >
        </v-text-field>
        
        <v-text-field
            label='Senha'
            type="password"
            hide-details='auto'
            filled
            class="mb-4"
            color="red"
            >
        </v-text-field>

         <v-btn
            class="mb-6"
            color="red--text"
            @click="cadastro()"
            >
            Cadastrar
        </v-btn>   

        <v-snackbar
        
        >
            {{ alert }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>

</v-main>
</v-container>
</template>

<script>

export default {

    name: 'Home',

    data() {
        return {
            user: {
                name: '',
                email: '',
                password: ''   
            },
            snackbar: false,
            alert: ''
        }
    },
    methods: {
        cadastro(){
            this.$router.push('login')
        }
    }
}
</script>

<style scoped>
    .title {
        margin-bottom: 50px;
    }
</style>