<template>
    <div>
        <h2>Lyrics {{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        name: "Lyrics",
        props: {
            msg: String
        }
    }
</script>

<style lang="scss" scoped>

</style>