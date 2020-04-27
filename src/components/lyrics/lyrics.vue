<template>
    <div>
        <LyricsSearch />
        <LyricsDisplay />
    </div>
</template>

<script>
import LyricsSearch from './lyrics-search.vue'
import LyricsDisplay from './lyrics-display.vue'

    export default {
        name: "Lyrics",
        components: {
            LyricsSearch,
            LyricsDisplay
        },
        props: {
            msg: String,
            lyric: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>