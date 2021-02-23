import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router/index'
import './assets/css/normalize.css'

const app = createApp(App)
app.use(router)
.use(Antd).mount('#app')
