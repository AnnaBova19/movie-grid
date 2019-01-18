<template>
  <div class="movies flex-col flex-col__start">
    <div class="movies__title mb-4">Latest Releases</div>
    <div class="movies__container flex-row flex-row__btw">

    </div>

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
@import 'src/styles/global';
@import 'src/styles/colors';

.movies {
  width: 100%;
  height: 100%;
  padding: 50px 40px;

  &__title {
    @extend %page-title;
  }
}
</style>
