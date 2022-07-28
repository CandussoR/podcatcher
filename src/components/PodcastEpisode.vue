<template>
  <div class="episode">
    <img :src="episode.thumbnail" />

    <div class="details">
      <p class="episode-title">{{ episode.title }}</p>
      <p class="description">{{ descriptionSnippet }}</p>

      <!-- buttons -->
      <div class="action">
        <div v-if="!reading || paused">
          <span class="material-icons" @click="readAudio">play_arrow</span>
        </div>
        <div v-else>
          <span class="material-icons" @click="pauseAudio">pause</span>
        </div>
        <!-- dropDown playlist menu -->
        <div class="dropdown">
          <span class="material-icons" @click="showMenu = !showMenu">add</span>
          <ul v-if="showMenu" class="playlist-menu">
            <li @click="handleNewPlaylist">New Playlist</li>
            <li v-for="playlist in playlists" :key="playlist.id">
              {{ playlist.playlistName }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { ref } from "vue";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { serverTimestamp } from "@firebase/firestore";
import getCollection from "@/composables/getCollection";

export default {
  props: ["episode"],
  setup(props) {
    const reading = ref(false);
    const paused = ref(false);
    const showMenu = ref(false);

    const { documents: playlists } = getCollection("playlists");

    const { error, addNewDoc } = useCollection("playlists");
    const { user } = getUser();

    const descriptionSnippet = computed(() => {
      return props.episode.description.substring(0, 100) + "...";
    });

    const audio = new Audio(props.episode.audio);

    const readAudio = () => {
      audio.play();
      reading.value = true;
    };

    const pauseAudio = () => {
      audio.pause();
      reading.value = false;
      paused.value = true;
    };

    const formattedPodcast = {
      audio: props.result.audio,
      audio_length_sec: props.result.audio_length_sec,
      description: props.result.description,
      guid_from_rss: props.result.guid_from_rss,
      id: props.result.id,
      image: props.result.image,
      listennotes_url: props.result.listennotes_url,
      pub_date_ms: props.result.pub_date_ms,
      thumbnail: props.result.thumbnail,
      title: props.result.title,
    };

    const handleNewPlaylist = async () => {
      await addNewDoc({
        playlistName: "New Playlist",
        user: user.value.uid,
        username: user.value.displayName,
        podcasts: [formattedPodcast],
        createdAt: serverTimestamp(),
      });
    };

    return {
      descriptionSnippet,
      readAudio,
      pauseAudio,
      reading,
      paused,
      showMenu,
      handleNewPlaylist,
      playlists,
    };
  },
};
</script>

<style scoped>
.episode {
  display: flex;
  max-height: 200px;
  background-color: #fb8574;
  padding: 10px;
  border-bottom: 1px solid #171e2b;
  border-radius: 20px;
  margin-bottom: 5px;
}
.details {
  display: block;
  flex-direction: column;
  padding: 10px;
}
.episode-episode p.episode-title {
  font-weight: bold;
}
img {
  max-width: 80px;
  max-height: 80px;
}
.action {
  display: flex;
  justify-content: space-between;
}
.dropdown:active .playlist-menu {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding-top: 5px;
  position: absolute;
}
</style>
