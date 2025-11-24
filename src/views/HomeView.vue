<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>메인 페이지</h1>
    <p>나만의 홈페이지에 오신 것을 환영합니다.</p>

    <div v-if="authStore.isLoggedIn">
      <p>{{ authStore.user?.name }}님, 오늘도 즐거운 코딩 되세요!</p>
    </div>
    <div v-else>
      <p>서비스를 이용하시려면 로그인이 필요합니다.</p>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
</script>

<style>
</style>