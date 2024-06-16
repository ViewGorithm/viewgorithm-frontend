<template>
  <div class="signup-container">
    <div class="signup-header">
      <h1>Join Us</h1>
      <p>View And Understand</p>
    </div>
    <div class="signup-form">
      <input type="text" placeholder="Username" v-model="userInfo.userId" />
      <input type="password" placeholder="Password" v-model="userInfo.password" />
      <input type="text" placeholder="Name" v-model="userInfo.name" />
      <div class="sex-input">
        <label>
          <input type="radio" v-model="userInfo.sex" value="male" /> Male
        </label>
        <label>
          <input type="radio" v-model="userInfo.sex" value="female" /> Female
        </label>
      </div>
      <input type="date" placeholder="Birth Date" v-model="userInfo.birthDate" @blur="validateBirthDate" />
      <input type="email" placeholder="Email" v-model="userInfo.email" />
      <button @click="signup()">Sign Up</button>
    </div>
    <p class="login-link">Already have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { join } from '@/api/axios.user';

const userInfo = ref({
  userId: '',
  password: '',
  name: '',
  birthDate: '',
  sex: '',
  email: ''
});

function signup() {
  if (!validateUserInfo(userInfo.value)) {
    return;
  }
  if (!validateBirthDate()) {
    return;
  }
  join(userInfo.value);
}

function validateUserInfo(userInfo) {
  if (!userInfo.userId || !userInfo.password || !userInfo.name || !userInfo.birthDate || !userInfo.sex || !userInfo.email) {
    alert('Please fill in all required fields.');
    return false;
  }
  return true;
}

function validateBirthDate() {
  const birthDate = new Date(userInfo.value.birthDate);
  const currentDate = new Date();
  if (birthDate >= currentDate) {
    alert('Please enter a valid birth date.');
    return false;
  }
  return true;
}


</script>


<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  height: 100vh;
}

.signup-header {
  text-align: center;
  margin-bottom: 2rem;
}

.signup-header h1 {
  font-size: 2.5rem;
  color: #333;
}

.signup-header p {
  font-size: 1.2rem;
  color: #666;
}

.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.signup-form input {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  font-size: 1rem;
}

label input[type="radio"] {
  width: 20px;
}

.signup-form button {
  width: 100%;
  padding: 0.8rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.signup-form button:hover {
  background-color: #555;
}

.login-link {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.login-link a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.login-link a:hover {
  color: #555;
}

.sex-input {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.sex-input label {
  margin: 0 1rem;
  font-size: 1rem;
  color: #666;
}
</style>@/api/axios.user