import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://curso-vue-96e64-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL:'https://curso-vue-96e64-default-rtdb.firebaseio.com/'
        },
            Vue.prototype.rickAndMorty = axios.create({
                baseURL:'https://rickandmortyapi.com/api/character/'
            })
        )
    }
})
