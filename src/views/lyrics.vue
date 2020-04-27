<template>
  <div>
    <LyricsSearch @search="search" />
    <LyricsDisplay :lyric="lyric" />
  </div>
</template>

<script>
import { services } from "../services/services.js";
import LyricsSearch from "../components/lyrics/lyrics-search.vue";
import LyricsDisplay from "../components/lyrics/lyrics-display.vue";

export default {
  name: "Lyrics",
  components: {
    LyricsSearch,
    LyricsDisplay
  },
  props: {},
  data() {
    return {
      lyric: {
        type: Object,
        default: () => {}
      }
    };
  },
  methods: {
    async search(artist, song) {
      this.lyric = await services.getLyrics(artist, song);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>