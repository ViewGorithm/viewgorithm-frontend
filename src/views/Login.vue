<template>
    <div class="login-container">
      <div class="login-header">
        <h1>Login</h1>
        <p>View And Understand</p>
      </div>
      <div class="login-form">
        <input type="text" placeholder="ID" v-model="ID" />
        <input type="password" placeholder="Password" v-model="password" />
        <button @click="workginLogin()">Log In</button>
      </div>
      <p class="signup-link">Don't have an account? <router-link to="/join">Sign Up</router-link></p>
    </div>
  </template>
  
  <script>
  import { userAuth } from '@/stores/userAuth.js'
  export default {
    setup() {
      const auth = userAuth()
      return { auth }
    },
    data() {
      return {
      ID: '',
        password: ''
      }
    },
    methods: {
      workginLogin() {
        this.auth.login(this.ID, this.password)
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
  }
  
  .login-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .login-header h1 {
    font-size: 2.5rem;
    color: #333;
  }
  
  .login-header p {
    font-size: 1.2rem;
    color: #666;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .login-form input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    font-size: 1rem;
  }
  
  .login-form button {
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
  
  .login-form button:hover {
    background-color: #555;
  }
  
  .signup-link {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #666;
  }
  
  .signup-link a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .signup-link a:hover {
    color: #555;
  }
  </style>