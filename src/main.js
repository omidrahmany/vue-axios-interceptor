import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

/*axios.defaults.baseURL = "http://localhost:9090/main";
axios.defaults
    .headers.common["Authorization"] = "Bearer jfjdkfjdkfjdl.sjflsdkmwq.fsdwfkjdlkfjdkl";
axios.defaults.headers.get["Accept"] = "application/json";

const reqInterceptor = axios.interceptors.request.use(config => {
    console.log("REQUEST interceptor config: ", config);
    return config;
})

const resInterceptor = axios.interceptors.response.use(config => {
    console.log("RES config: ", config);
    return config;
})

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);*/

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
