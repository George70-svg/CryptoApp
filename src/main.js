import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router/router'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(Antd)
app.use(router)
app.mount('#app')

