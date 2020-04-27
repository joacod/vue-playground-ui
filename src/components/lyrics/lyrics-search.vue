<template>
  <div>
    <h2>Lyrics Search</h2>
    <div>
      <v-text-field label="Artist" hide-details="auto" v-model="artist" append-icon="mdi-face"></v-text-field>
      <v-text-field label="Song" hide-details="auto" v-model="song" append-icon="mdi-music-note"></v-text-field>
      <v-btn large color="primary" @click="searchLyrics(artist, song)">
        Search
        <v-icon right>mdi-magnify</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "LyricsSearch",
  props: {
    lyric: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      artist: "beatles",
      song: "come together"
    };
  },
  methods: {
    searchLyrics(artist, song) {
      this.$emit("search", artist, song);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>