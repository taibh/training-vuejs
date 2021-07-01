<template>
  <v-app>
    <AppNavigationDrawer />

    <v-app-bar color="deep-purple accent-4" dark dense max-height="48px">
      <v-app-bar-nav-icon @click.stop="toggleSidenav()"></v-app-bar-nav-icon>

      <v-toolbar-title>Training VueJS</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-avatar size="36">
        <img :src="userInfo.avatar" />
      </v-avatar>

      <span class="pl-1 pr-3">{{ userInfo.fullName }}</span>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <AccountAndSettingMenu />
    </v-app-bar>

    <v-main>
      <v-container :style="{ height: '100%' }">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import AppNavigationDrawer from "../components/AppNavigationDrawer";
import AccountAndSettingMenu from "../components/AccountAndSettingMenu";

import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: { AppNavigationDrawer, AccountAndSettingMenu },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    ...mapActions(["toggleSidenav"]),
  },
};
</script>
