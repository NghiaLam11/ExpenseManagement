import { createApp } from 'vue'
import './styles/reset.css';
import './styles/theme.css';
import './styles/public.css';
import router from './router';
import App from './App.vue'

createApp(App).use(router).mount('#app')
