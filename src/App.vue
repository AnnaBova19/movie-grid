<style lang="scss" src="./styles/index.scss"></style>

<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>

</style>
