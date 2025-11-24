import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import AboutView from '../views/AboutView.vue';
import PostList from '../views/PostList.vue';
import PostView from '../views/PostView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import { useAuthStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true } // 메인 페이지 접근 제한 예시
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
    },
    {
      // 조건 4) 자기소개 페이지
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      // 조건 3) 게시판 페이지 (목록)
      path: '/board',
      name: 'board',
      component: PostList
    },
    {
      // 게시판 상세 페이지
      path: '/board/:id',
      name: 'post',
      component: PostView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
});

// 네비게이션 가드
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // 로그인 상태인데 로그인/회원가입 페이지 접근 시 홈으로 리다이렉트
  if ((to.name === 'login' || to.name === 'register') && authStore.isLoggedIn) {
    next({ name: 'home' })
  } else {
    next()
  }
  // 과제 요구사항에 따라 메인 페이지 등의 접근 제한이 엄격하지 않다면 
  // requiresAuth 로직은 상황에 맞춰 조정 가능합니다.
})

export default router;