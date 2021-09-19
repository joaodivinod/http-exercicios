<template>
    <div id="app" class="container">
        <section class="mt-5 col-md-6 mx-auto d-flex flex-column">
          
          <input v-model="usuario.nome" class="" type="text" placeholder="Nome" required>
            <input v-model="usuario.email" class="mt-4" type="email" placeholder="E-mail" required>

            <div class="row">
                <button @click="salvar" class="btn btn-primary mt-4 col-md-5 mr-auto">Enviar Dados</button>
                <button @click="getUsers" class="btn btn-success mt-4 col-md-5">Obeter Dados</button>
            </div>

            <hr>

            <div class="p-3" v-for="(users, id) in this.usuarios" :key="id" >
                <p>ID : {{id}}</p>
                <p>Nome : {{users.nome}}</p>
                <p>E-mail : {{users.email}}</p>

                <hr>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            personagens:[],
            usuarios: [],
            usuario: {
                nome: '',
                email: '',
            }
        }
    },

    created() {
      this.rickAndMorty.get('/361').then(
          res => {
            this.personagens = res.data
            console.log(this.personagens)
          }
      )

    },

    methods: {
        salvar() {
            this.$http.post('usuarios.json', this.usuario)
                .then(res => {
                    this.usuario.nome = ''
                    this.usuario.email = ''
                })
        },

        getUsers(){
            this.$http('usuarios.json')
                .then(res => {
                this.usuarios = res.data
            } )
        },

        // getCharacter(){
        //   this.rickAndMorty('?page=20')
        //   .then()
        // }

    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 1.5rem;
}

#app h1 {
    text-align: center;
    margin: 50px;
}
</style>
