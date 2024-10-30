<script setup lang="ts">
import { ref } from "vue";
const isShowPassword = ref(false);
const passwordElement = ref();
const onShowPassword = () => {
  if (isShowPassword.value === true) {
    passwordElement.value.type = "text";
  } else {
    passwordElement.value.type = "password";
  }
};
const onSubmit = () => {};
</script>

<template>
  <section class="signup container">
    <form @submit.prevent="onSubmit">
      <h2>SIGN UP</h2>
      <div class="form-group">
        <label for="name">Name</label>
        <input placeholder="Set a name..." type="text" />
      </div>
      <div class="form-group">
        <label for="name">Password</label>
        <input
          ref="passwordElement"
          placeholder="Set a password..."
          type="password"
        />
        <div class="show">
          <input
            @change="onShowPassword"
            v-model="isShowPassword"
            type="checkbox"
          />
          <p>Show password</p>
        </div>
        <RouterLink to="/signin">I already have an account</RouterLink>
      </div>
      <button>Sign up</button>
    </form>
  </section>
</template>

<style scoped>
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
form {
  width: calc(100% / 3);
}
h2 {
  font-size: 2rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
}
.show {
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
}
.show p {
  font-size: 0.8rem;
  opacity: 0.8;
  margin-left: 0.1rem;
}
label {
  font-size: 0.9rem;
  font-weight: bold;
  margin-left: 0.1rem;
}
input {
  font-size: 0.9rem;
  padding: 0.5rem;
}
input::placeholder {
  font-style: italic;
}
a {
  font-size: 0.8rem;
  font-style: italic;
  margin-top: 0.1rem;
  color: blue;
  text-decoration: underline;
}
button {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
}
</style>
