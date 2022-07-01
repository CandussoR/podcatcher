<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Username" v-model="username" />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignUp from "../composables/useSignUp";

export default {
  setup(props, context) {
    const { error, signUp } = useSignUp();

    const email = ref("");
    const password = ref("");
    const username = ref("");

    const handleSubmit = async () => {
      await signUp(email.value, password.value, username.value);
      if (!error.value) {
        console.log("User signed up");
        context.emit("signUp");
      }
    };

    return { email, password, username, handleSubmit, error };
  },
};
</script>

<style></style>
