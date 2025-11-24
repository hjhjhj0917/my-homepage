<template>
  <div class="board">
    <h1>게시판</h1>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <router-link :to="`/board/${post.id}`">
          <span class="post-id">{{ post.id }}.</span>
          <span class="post-title">{{ post.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const posts = ref([
  {
    id: 1,
    title: 'Vue.js 과제 제출합니다.',
    content: 'Vue.js를 처음 접해봤는데, 생각보다 배울 내용이 많지만 컴포넌트 단위로 개발하는 것이 매우 흥미롭습니다. 이번 과제를 통해 Vue Router와 Pinia 상태 관리 라이브러리까지 적용해보면서 프론트엔드 개발의 전반적인 흐름을 이해할 수 있었습니다. 앞으로 더 열심히 공부해서 멋진 서비스를 만들어보고 싶습니다!'
  },
  {
    id: 2,
    title: '홈페이지 만들기 프로젝트',
    content: 'Single Page Application(SPA)의 장점인 부드러운 페이지 전환을 직접 구현해보니 사용자 경험이 훨씬 좋아지는 것을 느꼈습니다. 컴포넌트를 재사용하고, 데이터를 효율적으로 관리하는 방법에 대해 깊이 고민해보는 계기가 되었습니다. 완성된 홈페이지를 보니 뿌듯하네요.'
  },
  {
    id: 3,
    title: '게시판 기능 구현 확인',
    content: '현재 보고 계신 이 페이지는 게시판 상세 조회 기능을 테스트하는 페이지입니다. URL 파라미터로 전달된 ID 값을 받아와서, 해당 ID에 맞는 게시글 데이터를 찾아서 화면에 표시하고 있습니다. 목록으로 돌아가기 버튼을 누르면 다시 게시글 리스트로 이동합니다.'
  }
]);
</script>

<style>
.post-list {
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
}
.post-item {
  border-bottom: 1px solid #eee;
  padding: 10px;
  text-align: left;
}
.post-item a {
  text-decoration: none;
  color: #2c3e50;
  display: block;
}
.post-id {
  font-weight: bold;
  margin-right: 10px;
  color: #42b983;
}
.post-item:hover {
  background-color: #f9f9f9;
}
</style>