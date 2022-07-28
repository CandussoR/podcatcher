<template>
  <header class="navbar-playlist">
    <h1>My playlists</h1>

    <nav>
      <div class="links" v-for="playlist in playlists" :key="playlist.id">
        <router-link class="btn" :to="{ name: 'playlists', params: { id: playlist.id } }">
          {{ playlist.playlistName }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import getUser from "@/composables/getUser";
import getCollection from "@/composables/getCollection";

export default {
  setup() {
    const { user } = getUser();

    const { documents: playlists } = getCollection("playlists", [
      "user",
      "==",
      user.value.uid,
    ]);

    return { playlists };
  },
};
</script>

<style>
.navbar-playlist {
  display: flex;
  flex-direction: column;
}
</style>
