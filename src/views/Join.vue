<template>
  <div class="signup-container">
    <div class="signup-header">
      <h1>Join Us</h1>
      <p>View And Understand</p>
    </div>
    <div class="signup-form">
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="text" placeholder="Name" v-model="name" />
      <div class="gender-input">
        <label>
          <input type="radio" v-model="gender" value="male" /> Male
        </label>
        <label>
          <input type="radio" v-model="gender" value="female" /> Female
        </label>
      </div>
      <input type="date" placeholder="Birth Date" v-model="birthDate" />
      <input type="tel" placeholder="Phone Number" v-model="phoneNumber" />
      <input type="email" placeholder="Email" v-model="email" />
      <button @click="signup">Sign Up</button>
    </div>
    <p class="login-link">Already have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      name: '',
      gender: '',
      birthDate: '',
      phoneNumber: '',
      email: '',
      createdAt: new Date().toISOString()
    }
  },
  methods: {
    signup() {
      // 회원가입 로직 구현
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      console.log('Name:', this.name);
      console.log('Gender:', this.gender);
      console.log('Birth Date:', this.birthDate);
      console.log('Phone Number:', this.phoneNumber);
      console.log('Email:', this.email);
      console.log('Created At:', this.createdAt);
    }
  }
}
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  background-color: #f0f0f0;
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

.gender-input {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.gender-input label {
  margin: 0 1rem;
  font-size: 1rem;
  color: #666;
}
</style>