<template>
  <v-app>
    <v-container :style="{ height: '100%' }">
      <div
        class="mb-8 font-weight-medium fill-height align-center d-flex justify-space-around"
      >
        <div class="text-center">
          <h1>Whoops, 404</h1>
          <h3>The page you were looking for does not exist</h3>
          <v-btn
            color="deep-purple"
            class="mt-4"
            outlined
            @click="active = !active"
          >
            Go to home page
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>