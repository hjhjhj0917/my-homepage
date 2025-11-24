<template>
  <div>
    <h1>게시글 목록</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    setup() {
      const posts = [
        { id: 1, title: 'Vue.js 배우기', content: 'Vue.js는 정말 재밌어요!'},
        { id: 2, title: 'SPA 만들기', content: 'SPA는 빠르고 부드럽습니다.'}
      ];
      return { posts };
    }
  }
</script>

<style>

</style>