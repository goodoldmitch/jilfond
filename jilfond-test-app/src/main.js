import './assets/styles/reset.scss';
import './assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App)
.use(store)
.mount('#app');
