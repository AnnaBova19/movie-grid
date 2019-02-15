<template>
  <v-layout align-center justify-center column class="home-container">
    <router-link to="/movies">
     <v-btn color="info">choose movie</v-btn>
    </router-link>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
}
</style>
