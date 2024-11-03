import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import { BASE_API_URL } from './config'
import * as ElIcons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import * as echarts from 'echarts';

const app = createApp(App)

for (const key in ElIcons) {
    app.component(key, ElIcons[key])
}

app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$baseApiUrl = BASE_API_URL
app.use(createPinia())
app.use(router)
app.use(ElementPlus)


app.mount('#app')
