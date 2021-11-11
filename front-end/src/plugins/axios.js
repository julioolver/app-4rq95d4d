import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://api-appmax.herokuapp.com/api/'
        });

        // headers: {
        //     "Content-Type": "application/json",
        //     'Access-Control-Allow-Origin': '*',
        // }
        Vue.prototype.$api = axios.create({
            baseURL: 'https://curso-vue-b051e-default-rtdb.firebaseio.com/'
        });

        
    }
})