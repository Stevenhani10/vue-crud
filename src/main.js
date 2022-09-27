import { createApp } from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from "./router/index"
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);
require('../src/style.css');// to connect global css file
createApp(App).component('fa',FontAwesomeIcon).use(router).mount('#app');
