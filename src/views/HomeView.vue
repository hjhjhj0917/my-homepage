<template>
  <div>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <button v-if="isLoggedIn" @click="handleLogout">Logout</button>
    </nav>

    <h1>홈 페이지</h1>
    <p v-if="user">환영합니다. {{ user.name }}!</p>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { computed } from "vue";

const authStore = useAuthStore()
const router = useRouter()

const user = computed(() => authStore.user)
const isLoggedIn = computed(() => authStore.isLoggedIn)

function handleLogout() {
  authStore.logout()
  router.push('/login') // 로그아웃 후 로그인 페이지로 이동
}
</script>
