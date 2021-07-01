<template>
  <v-navigation-drawer v-model="drawer" absolute left temporary>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon @click.stop="toggleSidenav()"></v-app-bar-nav-icon>

      <v-toolbar-title>Training VueJS</v-toolbar-title>
    </v-app-bar>
    <MenuListItem />
  </v-navigation-drawer>
</template>


<script>
import { mapActions, mapState } from "vuex";

import MenuListItem from "./MenuListItem";

export default {
  components: { MenuListItem },
  data() {
    return {
      group: null,
    };
  },
  computed: {
    ...mapState(["sidenavOpened"]),
    drawer: {
      get: function () {
        return this.sidenavOpened;
      },
      set: function (value) {
        if (value !== this.sidenavOpened) {
          this.toggleSidenav();
        }
      },
    },
  },
  methods: {
    ...mapActions(["toggleSidenav"]),
  },
  watch: {
    group() {
      this.toggleSidenav();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>