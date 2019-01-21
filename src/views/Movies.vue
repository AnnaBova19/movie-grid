<template>
  <div class="movies" v-if="movies.length">
    <div class="movies__title mb-4 ml-2">Latest Releases</div>
    <v-layout class="movies__container mb-4">
      <v-tooltip right v-for="(movie, index) in movies" :key="index">
        <div class="poster"
          @click.prevent="openDialogMovieInfo(movie, index)"
          :style="[movie.poster_path ? { 'background-image': 'url(http://image.tmdb.org/t/p/w200' + movie.poster_path + ')' } : {'background-image': 'none'}]"
          slot="activator">
        </div>
        <span>{{movie.title}}</span>
      </v-tooltip>
    </v-layout>

    <v-layout align-center justify-center row>
      <v-flex xs3>
        <v-pagination
          v-model="pageNumber"
          :length="totalPages"
          @input="fetchMovies"
        ></v-pagination>
      </v-flex>
    </v-layout>

    <dialog-movie-info
      :showDialog="showDialog"
      :movie="selectedMovie"
      @close="showDialog=false"
      @next="showNextMovie()">
    </dialog-movie-info>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import DialogMovieInfo from '../shared/components/dialogMovieInfo.vue'

@Component({
  components: {
    DialogMovieInfo
  }
})
export default class Movies extends Vue {
  baseUrl = 'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page='
  movies = []
  pageNumber = 1
  totalPages = null
  showDialog = false
  selectedMovie = {}
  selectedMovieIndex = 0

  // Fetch movies data
  fetchMovies (page: number) {
    axios
      .get(`${this.baseUrl}${page}`)
      .then(response => {
        this.movies = response.data.results
        this.pageNumber = response.data.page
        this.totalPages = response.data.total_pages
      })
      .catch(error => {
        this.$toasted.show(error, {
          theme: 'bubble',
          position: 'top-right',
          icon: 'error_outline',
          duration: 5000
        })
      })
  }

  openDialogMovieInfo (movie: any, index: number) {
    this.showDialog = true
    this.selectedMovie = movie
    this.selectedMovieIndex = index
  }

  showNextMovie () {
    this.selectedMovieIndex++
    for (let i = 0; i < this.movies.length; i++) {
      if (i === this.selectedMovieIndex) {
        this.selectedMovie = this.movies[i]
      }
    }
  }

  created () {
    this.fetchMovies(this.pageNumber)
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/global';
@import 'src/styles/variables';

.movies {
  width: 100%;
  height: 100%;
  padding: 50px 3%;

  &__title {
    @extend %page-title;
  }

  &__container {
    width: 100%;
    display: grid;
    grid-gap: 10px 15px;
    -ms-grid-columns: (minmax(230px,1fr))[auto-fill];
    grid-template-columns: repeat(auto-fill,minmax(230px,1fr));
    -ms-grid-column-align: center;
    justify-items: center;
  }
}
</style>
