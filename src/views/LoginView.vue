<template>
  <div class="auth-container">
    <h2>로그인</h2>
    <Form :validation-schema="schema" @submit="onSubmit" class="auth-form">

      <div class="form-group">
        <div class="label-row">
          <label for="email">이메일</label>
          <ErrorMessage name="email" class="error-msg" />
        </div>
        <Field name="email" type="email" class="form-control" placeholder="이메일을 입력해주세요" />
      </div>

      <div class="form-group">
        <div class="label-row">
          <label for="password">비밀번호</label>
          <ErrorMessage name="password" class="error-msg" />
        </div>
        <Field name="password" type="password" class="form-control" placeholder="비밀번호를 입력해주세요" />
      </div>

      <button type="submit" class="btn-submit">로그인</button>

    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from 'yup';
import { useAuthStore } from '../stores/auth'
import { useRouter } from "vue-router";

const authStore = useAuthStore()
const router = useRouter()

const schema = Yup.object().shape({
  email: Yup.string().email('유효한 이메일 형식이 아닙니다').required('이메일은 필수입니다.'),
  password: Yup.string().required('비밀번호는 필수입니다.')
})

const onSubmit = (values) => {
  authStore.login(values)
  router.push({name: 'home'})
}
</script>

<style scoped>
.auth-container {
  max-width: 450px;
  margin: 50px auto;
  padding: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

label {
  font-weight: bold;
  color: #2c3e50;
}

.form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box; /* padding이 너비에 포함되도록 설정 */
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #42b983;
  outline: none;
}

/* 유효성 검사 텍스트 색상 수정 */
.error-msg {
  color: #e74c3c; /* 붉은색 계열로 강조 */
  font-size: 0.85rem;
  font-weight: 500;
}

.btn-submit {
  width: 100%;
  padding: 14px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.btn-submit:hover {
  background-color: #3aa876;
}
</style>