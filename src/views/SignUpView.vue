<template>
  <h1>Sign Up</h1>
  <SignUpForm @signUp="welcomeUser" />
  <p>Already have an account ?</p>
  <button @click="toLogin">Login</button>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
import { useRouter } from "vue-router";
export default {
  components: { SignUpForm },
  setup() {
    const router = useRouter();

    const welcomeUser = () => {
      router.push({ name: "home" });
    };

    const toLogin = () => {
      router.push({ name: "login" });
    };

    return { welcomeUser, toLogin };
  },
};
</script>

<style></style>
