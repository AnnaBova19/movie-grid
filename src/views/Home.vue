<template>
  <div class="home-container flex-col ">
    <v-btn color="info" @click="goToMovies()">choose movie</v-btn>
  </div>
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
