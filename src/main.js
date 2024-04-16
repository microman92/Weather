import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/styles/main.scss'
import Loader from "@/components/Loader.vue";


createApp(App).use(store).component('Loader', Loader).mount('#app')
