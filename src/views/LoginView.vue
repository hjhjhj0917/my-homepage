<template>
  <div>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </nav>

    <h2>로그인</h2>

    <Form :validation-schema="schema" @submit="onSubmit">

      <div class="form-group">
        <label>이메일</label>
        <Field name="email" type="email" class="form-control" />
        <ErrorMessage name="email" class="text-danger" />
      </div>

      <div class="form-group">
        <label>비밀번호</label>
        <Field name="password" type="password" class="form-control" />
        <ErrorMessage name="password" class="text-danger" />
      </div>

      <button type="submit" class="btn btn-primary">로그인</button>

    </Form>

  </div>
</template>

<script setup>
import {Form, ErrorMessage, Field} from "vee-validate";
import * as Yup from 'yup';
import { useAuthStore } from '../stores/auth'
import { useRouter } from "vue-router";

const authStore = useAuthStore()
const router = useRouter()

const schema = Yup.object().shape({
  email: Yup.string().email('유효한 이메일 주소를 입력해주세요').required('이메일은 필수입니다.'),
  password: Yup.string().required('비밀번호는 필수입니다.')
})

const onSubmit = (values) => {
  authStore.login(values)
  router.push({name: 'home'})
}
</script>

<style>

</style>