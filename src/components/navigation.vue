<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-music</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Lyrics</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Vue Playgorund</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            
            <div>
                <Lyrics msg="Welcome to Lyrics" />
            </div>

          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <v-icon>mdi-light mdi-github</v-icon>
        <a href="https://github.com/joacod/vue-playground-ui" class="footer-text">
            <span class="white--text">joacod/vue-playground-ui</span>
        </a>
    </v-footer>
  </v-app>
</template>

<script>
import Lyrics from './lyrics.vue'

  export default {
    name: "Navigation",
    components: {
        Lyrics
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>

<style lang="scss" scoped>
.footer-text {
    margin-left: 5px;
    text-decoration: none;
}
</style>