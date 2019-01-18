<template>
  <div class="movies-container flex-col">
    <div class="text-xs-center">
      <v-pagination
        v-model="page"
        :length="6"
      ></v-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Movies extends Vue {
  data () {
    return {
      page: 1,
      movies: null
    }
  }
}
</script>

<style lang="scss" scoped>
.movies-container {
  width: 100%;
  height: 100%;
}
</style>
