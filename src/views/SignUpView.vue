<template>
  <h1>Sign Up</h1>

  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="displayName" v-model="displayName" />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Sign Up</button>
  </form>

  <p>Already have an account ?</p>
  <button @click="toLogin">Login</button>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useSignUp from "@/composables/useSignUp";
export default {
  setup() {
    // refs
    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const router = useRouter();

    const { error, signUp } = useSignUp();

    const handleSubmit = async () => {
      await signUp(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log("User signed up");
        router.push({ name: "home" });
      }
    };

    const toLogin = () => {
      router.push({ name: "login" });
    };

    return { email, password, displayName, handleSubmit, toLogin };
  },
};
</script>

<style></style>
