<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item link>
        <v-list-item-avatar>
          <v-img :src="userInfo.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ userInfo.fullName }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ userInfo.email }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <MenuListItem />
  </v-menu>
</template>

<script>
import { mapState } from "vuex";
import MenuListItem from "./MenuListItem";

export default {
  components: { MenuListItem },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style lang="scss" scoped>
</style>