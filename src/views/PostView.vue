<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <button @click="goBack">목록으로</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const posts = [
      { id: 1, title: 'Vue.js 배우기', content: 'Vue.js는 정말 재밌어요!'},
      { id: 2, title: 'SPA 만들기', content: 'SPA는 빠르고 부드럽습니다.'}
    ];
    const postId = parseInt(route.params.id);
    const post = posts.find(p => p.id === postId);
    const goBack = () => {
      router.push('/posts');
    };
    return { post, goBack };
  }
}
</script>

<style>

</style>