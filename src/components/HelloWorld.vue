<template>
  <v-expansion-panels v-model="panel" multiple>
    <v-expansion-panel>
      <v-expansion-panel-header color="info">
        <strong>Introduction</strong>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col cols="12" sm="4">
              <v-card class="pa-2" outlined tile>
                <div>v-if="seen" - seen: {{ seen }}</div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card class="pa-2" outlined tile>
                <span>Data: </span>
                <span v-if="seen">v-if is showed!</span>
                <span v-else>v-else is showed!</span>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn color="primary" @click="seen = !seen">
                Toggle seen variable
              </v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col v-for="n in 3" :key="n" cols="12" sm="4">
              <v-card class="pa-2" outlined tile> One of three columns </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>Panel 2</v-expansion-panel-header>
      <v-expansion-panel-content> Some content </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>Panel 3</v-expansion-panel-header>
      <v-expansion-panel-content> Some content </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    panel: [0],
    seen: true,
  }),
};
</script>
