<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">자기소개</router-link>
        <router-link to="/board">게시판</router-link>

        <div v-if="!authStore.isLoggedIn" class="auth-links">
          <router-link to="/login">로그인</router-link>
          <router-link to="/register">회원가입</router-link>
        </div>
        <div v-else class="auth-links">
          <span>{{ authStore.user?.name }}님 환영합니다.</span>
          <a href="#" @click.prevent="handleLogout">로그아웃</a>
        </div>
      </nav>
    </header>

    <router-view/>
  </div>
</template>

<script setup>
import { useAuthStore } from './stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

function handleLogout() {
  authStore.logout()
  router.push('/login')
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #f8f9fa;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.auth-links {
  display: flex;
  gap: 20px;
  margin-left: 20px;
  border-left: 1px solid #ccc;
  padding-left: 20px;
}
</style>