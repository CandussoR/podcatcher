<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="displayName" v-model="displayName" />
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
    const displayName = ref("");

    const handleSubmit = async () => {
      await signUp(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log("User signed up");
        context.emit("signUp");
      }
    };

    return { email, password, displayName, handleSubmit, error };
  },
};
</script>

<style></style>
