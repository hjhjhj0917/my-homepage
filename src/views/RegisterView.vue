<template>
  <div class="auth-container">
    <h2>회원가입</h2>
    <Form :validation-schema="schema" @submit="onSubmit" class="auth-form">

      <div class="form-group">
        <div class="label-row">
          <label>호칭 (Title)</label>
          <ErrorMessage name="title" class="error-msg" />
        </div>
        <Field name="title" as="select" class="form-control">
          <option value="">선택해주세요</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
        </Field>
      </div>

      <div class="form-group">
        <div class="label-row">
          <label>이름 (First Name)</label>
          <ErrorMessage name="firstName" class="error-msg" />
        </div>
        <Field name="firstName" class="form-control" />
      </div>

      <div class="form-group">
        <div class="label-row">
          <label>성 (Last Name)</label>
          <ErrorMessage name="lastName" class="error-msg" />
        </div>
        <Field name="lastName" class="form-control" />
      </div>

      <div class="form-group">
        <div class="label-row">
          <label>생년월일</label>
          <ErrorMessage name="dob" class="error-msg" />
        </div>
        <Field name="dob" type="date" class="form-control" />
      </div>

      <div class="form-group">
        <div class="label-row">
          <label>이메일</label>
          <ErrorMessage name="email" class="error-msg" />
        </div>
        <Field name="email" type="email" class="form-control" />
      </div>

      <div class="form-group">
        <div class="label-row">
          <label>비밀번호</label>
          <ErrorMessage name="password" class="error-msg" />
        </div>
        <Field name="password" type="password" class="form-control" />
      </div>

      <div class="form-group">
        <div class="label-row">
          <label>비밀번호 확인</label>
          <ErrorMessage name="confirmPassword" class="error-msg" />
        </div>
        <Field name="confirmPassword" type="password" class="form-control" />
      </div>

      <div class="form-group form-check">
        <div class="checkbox-container">
          <Field name="acceptTerms" type="checkbox" :value="true" id="acceptTerms" class="form-check-input" />
          <label for="acceptTerms" class="form-check-label">이용약관에 동의합니다</label>
        </div>
        <ErrorMessage name="acceptTerms" class="error-msg d-block" />
      </div>

      <button type="submit" class="btn-submit">가입하기</button>

    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from 'yup';
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const schema = Yup.object().shape({
  title: Yup.string().required('호칭을 선택해주세요.'),
  firstName: Yup.string().required('이름을 입력해주세요.'),
  lastName: Yup.string().required('성을 입력해주세요.'),
  dob: Yup.date().required('생년월일을 입력해주세요.').nullable(),
  email: Yup.string().email('유효한 이메일 주소를 입력해주세요.').required('이메일은 필수입니다.'),
  password: Yup.string().min(6, '비밀번호는 최소 6자리 이상이어야 합니다.').required('비밀번호는 필수입니다.'),
  confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호 확인은 필수입니다.'),
  acceptTerms: Yup.boolean().oneOf([true], '약관에 동의해야 합니다.')
})

const onSubmit = (values) => {
  authStore.register(values)
  router.push({ name: 'home' })
}
</script>

<style scoped>
/* LoginView와 동일한 스타일 적용 */
.auth-container {
  max-width: 500px; /* 회원가입 폼은 항목이 많아 조금 더 넓게 */
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
  box-sizing: border-box;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #42b983;
  outline: none;
}

.error-msg {
  color: #e74c3c;
  font-size: 0.85rem;
  font-weight: 500;
}

.d-block {
  display: block;
  margin-top: 5px;
}

/* 체크박스 스타일 */
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-check-input {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.form-check-label {
  font-weight: normal;
  cursor: pointer;
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
  margin-top: 20px;
}

.btn-submit:hover {
  background-color: #3aa876;
}
</style>