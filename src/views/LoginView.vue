<template>
  <h1>Login</h1>
  <LoginForm @login="welcomeUser" />
  <p>You don't have an account ?</p>
  <button @click="toSignUp">Sign up!</button>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import { useRouter } from "vue-router";

export default {
  components: { LoginForm },
  setup() {
    const router = useRouter();

    const welcomeUser = () => {
      router.push({ name: "home" });
    };

    const toSignUp = () => {
      router.push({ name: "signUp" });
    };

    return { welcomeUser, toSignUp };
  },
};
</script>

<style></style>
