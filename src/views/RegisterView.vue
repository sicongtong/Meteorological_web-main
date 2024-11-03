<template>
    <div class="user-form">
      <h1>用户注册</h1>
      <form @submit.prevent="register">
        <div class="form-row">
          <label for="username">用户名:</label>
          <input type="text" id="username" v-model="user.username" required>
        </div>
        <div class="form-row">
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="user.password" required>
        </div>
        <div class="form-row">
          <label for="email">邮箱:</label>
          <input type="email" id="email" v-model="user.email" required>
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, getCurrentInstance } from 'vue';
  import axios from 'axios';
  const instance = getCurrentInstance();
  const BASE_API_URL = instance.appContext.config.globalProperties.$baseApiUrl
  
  const user = ref({
    username: '',
    password: '',
    email: ''
  });
  
  const register = async () => {
    if (!user.value.username || !user.value.password || !user.value.email) {
      alert('所有字段必须填写完整。');
      return;
    }
    try {
      const response = await axios.post(`${BASE_API_URL}/api/users/`, {
        username: user.value.username,
        password: user.value.password,
        email: user.value.email
      });
      alert('注册成功!您的用户ID是:' + response.data.user_id);
      // 清空表单或进行其他操作，如重定向
      user.value = { username: '', password: '', email: '' };
    } catch (error) {
      console.error('注册失败：', error);
      alert('注册失败：' + error.response.data.detail);
    }
  };
  </script>
  
  <style scoped>
  .user-form {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 5px;
  }
  .form-row {
    margin-bottom: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input[type="text"],
  input[type="password"],
  input[type="email"],
  button {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  </style>
  