<template>
  <h1>Sign Up</h1>
  <SignUpForm @signUp="welcomeUser" />
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

    return { welcomeUser };
  },
};
</script>

<style></style>
