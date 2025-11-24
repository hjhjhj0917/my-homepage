// Vue Router에서 라우터 생성 및 히스토리 모드 설정을 위한 함수 가져오기
import { createRouter, createWebHistory } from 'vue-router';
// 홈 페이지에 레더링할 컴포넌트 가져오기
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import { useAuthStore } from '../stores/auth';

// 라우터 인스턴스 생서 및 설정
const router = createRouter( {
  // 해시모드 사용
  history: createWebHistory(process.env.BASE_URL),
  // 애플리케이션의 경로와 컴포넌트를 매핑하는 라우트 배열
  routes: [
    {
      // 루트 경로 '/'에 대한 설정
      path: '/',
      // 라우트 이름, 프로그래밍적 네비게이션에 유용
      name: 'home',
      // 이 경로에서 렌더링할 컴포넌트
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ name: 'login' })
  } else if ((to.name === 'login' || to.name === 'register') && authStore.isLoggedIn) {
    next({ name: 'home' })
  } else {
    next()
  }
})

// 라우터 인스턴스를 다른 파일에서 사용할 수 있도록 내보내기
export default router;
