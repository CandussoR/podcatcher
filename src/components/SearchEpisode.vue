<template>
  <div class="episode-result">
    <img :src="episode.thumbnail" />

    <div class="details">
      <p class="episode-title">{{ episode.title_original }}</p>
      <p class="description">{{ descriptionSnippet }}</p>

      <!-- buttons -->
      <div class="action">
        <div v-if="!reading || paused">
          <span class="material-icons" @click="readAudio">play_arrow</span>
        </div>
        <div v-else>
          <span class="material-icons" @click="pauseAudio">pause</span>
        </div>
        <DropdownMenu :episode="episode" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { ref } from "vue";
import DropdownMenu from "./DropdownMenu.vue";

export default {
  props: ["episode"],
  components: { DropdownMenu },
  setup(props) {
    const reading = ref(false);
    const isPaused = ref(false);

    const descriptionSnippet = computed(() => {
      return props.episode.description_original.substring(0, 100) + "...";
    });

    console.log(props.episode);
    const audio = new Audio(props.episode.audio);

    const readAudio = () => {
      audio.play();
      reading.value = true;
    };

    const pauseAudio = () => {
      audio.pause();
      reading.value = false;
      isPaused.value = true;
    };

    return {
      descriptionSnippet,
      reading,
      isPaused,
      readAudio,
      pauseAudio,
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
</style>
