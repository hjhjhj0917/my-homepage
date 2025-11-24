<template>
  <div class="about">
    <h1>자기소개 페이지</h1>
    <div class="profile-container">
      <img src="@/assets/myPic.png" alt="프로필 사진" class="profile-img">

      <div class="intro-table">
        <div class="info-row">
          <div class="label">이름</div>
          <div class="content">양준모</div>
        </div>

        <div class="info-row">
          <div class="label">전공</div>
          <div class="content">빅데이터</div>
        </div>

        <div class="info-row">
          <div class="label">소개</div>
          <div class="content">
            Vue.js로 나만의 홈페이지를 만들고 있습니다.
            <br/>
            한국 폴리텍 강서캠퍼스에서 Vue를 포함한 다양한 과목을 배우고 있습니다.
            데이터 분석과 웹 개발을 융합하여 사용자에게 유용한 인사이트를 제공하는 서비스를 만들고 싶습니다.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #42b983;
  margin-bottom: 8px;
  object-fit: cover;
  padding: 5px;
}

.intro-table {
  width: 500px;
  margin: 0;
  text-align: left;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.info-row {
  display: flex;
  align-items: flex-start;
  line-height: 1.5;
  margin: 0;
}

.info-row:last-child {
  margin-bottom: 0;
}

.content{
  text-align: left !important;
}

.label {
  width: 60px;
  min-width: 60px;
  font-weight: 700;
  color: #42b983;
  margin-right: 15px;
}

.content {
  flex: 1;
  color: #2c3e50;
  word-break: keep-all;
}
</style>