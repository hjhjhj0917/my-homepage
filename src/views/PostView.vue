<template>
  <div class="post-container">
    <div class="post-content">
      <h1>{{ post.title }}</h1>
      <p class="content-body">{{ post.content }}</p>
    </div>

    <div class="button-container">
      <button class="btn-back" @click="goBack">목록으로 돌아가기</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const posts = [
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
];

const postId = parseInt(route.params.id);
const post = posts.find(p => p.id === postId) || { title: '존재하지 않는 게시글', content: '글 내용을 찾을 수 없습니다.' };

const goBack = () => {
  router.push({ name: 'board' });
};
</script>

<style>
.post-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  text-align: left;
}

.post-content {
  margin-bottom: 40px;
}

.post-content h1 {
  color: #2c3e50;
  border-bottom: 3px solid #42b983;
  padding-bottom: 15px;
  margin-bottom: 25px;
  font-size: 2rem;
  text-align: left !important;
}

.content-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;
  min-height: 150px;
  text-align: left !important;
}

.button-container {
  text-align: center;
  border-top: 1px solid #eee;
  padding-top: 30px;
}

.btn-back {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(66, 185, 131, 0.3);
}

.btn-back:hover {
  background-color: #3aa876;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(66, 185, 131, 0.4);
}

.btn-back:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(66, 185, 131, 0.3);
}
</style>