<template>
  <v-card class="mx-auto pa-5">
    <div>
      <h2>Lyrics</h2>
      <div v-if="lyric">
        <h2 class="my-5">{{this.lyric.Artist}} - {{this.lyric.SongTitle}}</h2>
        <v-textarea v-model="this.lyric.Lyrics"></v-textarea>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "LyricsDisplay",
  props: {
    lyric: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
</style>