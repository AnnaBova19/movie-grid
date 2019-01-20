<template>
  <v-layout align-center justify-center column class="home-container">
    <v-btn color="info" @click="goToMovies()">choose movie</v-btn>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue {
  goToMovies (): void {
    this.$router.push('/movies')
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
}
</style>
