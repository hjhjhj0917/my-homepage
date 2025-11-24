// Vue 애플리케이션 인스턴스를 생성하기 위한 함수 가져오기
import { createApp } from 'vue'
// 최상위 App 컴포넌트 가져오기
import App from './App.vue'
// 설정한 라우터 인스턴스 가져오기
import router from './router'
// import MyButton from './components/MyButton.vue';
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
