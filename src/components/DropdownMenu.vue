<template>
  <div class="dropdown">
    <span class="material-icons" @click="showMenu = !showMenu">add</span>
    <ul v-if="showMenu" class="playlist-menu">
      <li @click="handleNewPlaylist">New Playlist</li>
      <li v-for="playlist in playlists" :key="playlist.id">
        {{ playlist.playlistName }}
      </li>
    </ul>
  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import getCollection from "@/composables/getCollection";
import { serverTimestamp } from "@firebase/firestore";
import { ref } from "vue";

export default {
  props: ["episode"],
  setup(props) {
    const showMenu = ref(false);

    const { documents: playlists } = getCollection("playlists");
    const { error, addNewDoc } = useCollection("playlists");
    const { user } = getUser();

    const handleNewPlaylist = async () => {
      // Checking the fields that are or not in JSON responses
      const description = props.episode.description
        ? props.episode.description
        : props.episode.description_original;
      const title = props.episode.title_original
        ? props.episode.title_original
        : props.episode.title;

      await addNewDoc({
        playlistName: "New Playlist",
        user: user.value.uid,
        username: user.value.displayName,
        podcasts: [
          {
            audio: props.episode.audio,
            audio_length_sec: props.episode.audio_length_sec,
            description: description,
            guid_from_rss: props.episode.guid_from_rss,
            id: props.episode.id,
            image: props.episode.image,
            listennotes_url: props.episode.listennotes_url,
            pub_date_ms: props.episode.pub_date_ms,
            thumbnail: props.episode.thumbnail,
            title: title,
          },
        ],
        createdAt: serverTimestamp(),
      });
    };

    return { showMenu, playlists, handleNewPlaylist };
  },
};
</script>

<style>
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
