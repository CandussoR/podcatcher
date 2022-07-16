<template>
  <header class="navbar">
    <nav>
      <h1>
        <router-link :to="{ name: 'home' }">Podcatch it</router-link>
      </h1>
      <div class="links" v-if="!user">
        <router-link class="btn" :to="{ name: 'signUp' }">Sign up</router-link>
        <router-link class="btn" :to="{ name: 'login' }">Login</router-link>
      </div>
      <div v-else>
        <p>{{ user.displayName }}</p>
        <button @click="handleLogout">Log Out</button>
      </div>
    </nav>
  </header>
</template>

<script>
import getUser from "@/composables/getUser";
import useLogout from "@/composables/useLogout";

export default {
  setup() {
    const { user } = getUser();
    console.log(user);
    const { error, logout } = useLogout();

    const handleLogout = async () => {
      await logout();
    };

    return { user, handleLogout };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-top: 30px;
  background: white;
}
nav {
  display: flex;
  align-content: center;
  justify-content: space-between;
  max-width: 100%;
}
.links {
  margin-left: 10px;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
</style>
