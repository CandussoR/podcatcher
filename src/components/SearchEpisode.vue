<template>
  <div class="episode-result">
    <img :src="result.thumbnail" />

    <div class="details">
      <p class="episode-title">{{ result.title_original }}</p>
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
import { serverTimestamp } from "@firebase/firestore";
import { useRouter } from "vue-router";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import getCollection from "@/composables/getCollection";

export default {
  props: ["result"],
  setup(props) {
    const reading = ref(false);
    const isPaused = ref(false);
    const showMenu = ref(false);

    const { documents: playlists } = getCollection("playlists");
    console.log(playlists);
    const router = useRouter();

    const { error, addNewDoc } = useCollection("playlists");
    const { user } = getUser();

    const descriptionSnippet = computed(() => {
      return props.result.description_original.substring(0, 100) + "...";
    });

    const audio = new Audio(props.result.audio);

    const readAudio = () => {
      audio.play();
      reading.value = true;
    };

    const pauseAudio = () => {
      audio.pause();
      reading.value = false;
      isPaused.value = true;
    };

    const formattedPodcast = {
      audio: props.result.audio,
      audio_length_sec: props.result.audio_length_sec,
      description: props.result.description_highlighted,
      guid_from_rss: props.result.guid_from_rss,
      id: props.result.id,
      image: props.result.image,
      listennotes_url: props.result.listennotes_url,
      pub_date_ms: props.result.pub_date_ms,
      thumbnail: props.result.thumbnail,
      title: props.result.title_original,
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
      reading,
      isPaused,
      showMenu,
      playlists,
      readAudio,
      pauseAudio,
      handleNewPlaylist,
    };
  },
};
</script>

<style>
.episode-result {
  display: flex;
  max-height: 200px;
  background-color: #fb8574;
  padding: 10px;
  border-bottom: 1px solid #171e2b;
  border-radius: 20px;
}
.details {
  display: flex;
  flex-direction: column;
  background-color: #f7fbff;
}
.episode-result p.episode-title {
  font-weight: bold;
}
img {
  max-width: 80px;
  max-height: 80px;
}
.action {
  display: flex;
}
.dropdown {
  position: relative;
  top: 0 px;
  left: 20px;
}
.playlist-menu {
  position: absolute;
  background: turquoise;
  border-radius: 10px;
  max-width: max-content;
  white-space: nowrap;
}
.playlist-menu li {
  list-style: none;
  text-align: left;
}
li:hover {
  background: grey;
}
</style>
