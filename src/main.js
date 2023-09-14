import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

// 引入懒加载指令插件并注册
import directives from "@/directives"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(directives)
app.mount('#app')
