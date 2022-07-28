<template>
  <h1>Login</h1>

  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div v-if="error">{{ error }}</div>
    <button>Login</button>
  </form>

  <p>You don't have an account ?</p>
  <button @click="toSignUp">Sign up!</button>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import useLogin from "@/composables/useLogin";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const router = useRouter();

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("User logged in");
        router.push({ name: "home" });
      }
    };

    const toSignUp = () => {
      router.push({ name: "signUp" });
    };

    return { email, password, handleSubmit, toSignUp, error };
  },
};
</script>

<style></style>
