<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-music</v-icon>
          </v-list-item-action>
          <v-list-item-content>            
            <v-list-item-title><router-link class="no-decoration" to="/">Lyrics</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Vue Playgorund</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center">
          <v-col>
            <!-- Display Content Here -->
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer color="indigo" app>
      <v-icon>mdi-light mdi-github</v-icon>
      <a href="https://github.com/joacod/vue-playground-ui" class="footer-text no-decoration">
        <span class="white--text">joacod/vue-playground-ui</span>
      </a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Navigation",
  components: {
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style lang="scss" scoped>
.footer-text {
  margin-left: 5px;
}
.no-decoration {
  text-decoration: none;
  color: inherit;
}
</style>