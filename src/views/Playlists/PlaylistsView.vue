<template>
  <div class="error" v-if="error">{{ error }}</div>

  <div v-if="playlist">
    <h1>{{ playlist.playlistName }}</h1>

    <div v-for="podcast in playlist.podcasts" :key="podcast.id">
      <div class="playlist-details">
        <img :src="podcast.thumbnail" />
        <div class="details">
          <p class="episode-title">{{ podcast.title }}</p>
          <p class="description">
            {{ podcast.description }}
          </p>

          <!-- buttons -->
          <!-- <div class="action">
          <div v-if="!reading || paused">
            <span class="material-icons" @click="readAudio">play_arrow</span>
          </div>
          <div v-else>
            <span class="material-icons" @click="pauseAudio">pause</span>
          </div>
        </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getDocument from "@/composables/getDocument";
import { onBeforeRouteUpdate } from "vue-router";

export default {
  props: ["id"],
  setup(props) {
    let { error, document: playlist } = getDocument("playlists", props.id);
    console.log(props.id);

    onBeforeRouteUpdate(async (to, from) => {
      if (to.params.id !== from.params.id) {
        playlist = await getDocument("playlists", to.params.id);
      }
    });

    return { playlist, error };
  },
};
</script>

<style></style>
