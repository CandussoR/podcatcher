<template>
  <h1>Login</h1>
  <LoginForm @login="welcomeUser" />
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

    return { welcomeUser };
  },
};
</script>

<style></style>
