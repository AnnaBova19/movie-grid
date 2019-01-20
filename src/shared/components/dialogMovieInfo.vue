<template>
  <v-dialog v-model="show" fullscreen hide-overlay>
    <v-card class="dialog">
      <div class="dialog__background" :style="[movie.poster_path ? { 'background-image': 'url(http://image.tmdb.org/t/p/w200' + movie.poster_path + ')' } : {'background-image': 'none'}]"></div>
      <v-toolbar class="dialog__toolbar mb-5">
        <v-layout align-center justify-start row @click.stop="show = false" class="dialog__action">
          <div class="icon-wrapper mr-5"><v-icon>keyboard_arrow_left</v-icon></div>
          <span> Back <span class="hidden-xs-only">to list</span> </span>
        </v-layout>
        <v-spacer></v-spacer>
        <v-layout align-center justify-end row @click.stop="nextMovie()" class="dialog__action">
          <span> Next <span class="hidden-xs-only">Movie</span> </span>
          <div class="icon-wrapper ml-5"><v-icon>keyboard_arrow_right</v-icon></div>
        </v-layout>
      </v-toolbar>

      <v-layout class="dialog__content movie">
        <div class="movie__poster">
          <div class="poster mr-5"
            :style="[movie.poster_path ? { 'background-image': 'url(http://image.tmdb.org/t/p/w200' + movie.poster_path + ')' } : {'background-image': 'none'}]"
          ></div>
          <v-layout align-start justify-space-between column class="movie__rate small">
            <div>
              Score:
              <br>
              <span>{{movie.vote_average}}</span>
            </div>
            <div>
              Rating: <br> <span>{{movie.popularity}}</span>
            </div>
            <div>
              Release Date: <br> <span>{{getFormattedDate(movie.release_date)}}</span>
            </div>
          </v-layout>
        </div>
        
        <div class="movie__info">
          <div class="movie__title mb-4">
            {{movie.title}} ({{getReleaseYear(movie.release_date)}})
          </div>
          <v-layout align-center justify-start row class="movie__rate mb-5 large">
            <div class="mr-4 pr-4 with-border">
              Score: &nbsp; {{movie.vote_average}}
            </div>
            <div class="mr-4 pr-4 with-border">
              Rating: &nbsp; {{movie.popularity}}
            </div>
            <div class="mr-4 pr-4">
              Release Date: &nbsp; {{getFormattedDate(movie.release_date)}}
            </div>
          </v-layout>
          <div class="movie__overview">
            {{movie.overview}}
          </div>
        </div>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DialogMovieInfo extends Vue {
  @Prop({ default: false }) showDialog!: Boolean
  @Prop({ default: {} }) movie!: Object

  get show () {
    return this.showDialog
  }

  set show (value) {
    if (!value) {
      this.$emit('close')
    }
  }

  nextMovie () {
    this.$emit('next')
  }

  // Get the year of movie release
  getReleaseYear (date: string) {
    return new Date(date).getFullYear()
  }

  // Get the date of movie release in necessary format
  getFormattedDate (date: string) {
    let d = new Date(date)
    let year = d.getFullYear()
    let month = d.toLocaleString('en-us', { month: 'long' })
    let day = d.getDate()
    return `${month}\u00A0${day},\u00A0${year}`
  }
}
</script>

<style scoped lang="scss">
@import 'src/styles/global';
@import 'src/styles/variables';

.dialog {
  position: relative;

  &__background {
    position:absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    @extend %bg-image;
    background-size: cover;
    z-index: 0;
    height: 100%;
    filter: blur(20px);
    -webkit-filter: blur(20px);
  }

  &__action {
    cursor: pointer;
  }

  &__content {
    position: relative;
    z-index: 1;
    padding: 0 100px;
    color: $color-mg-primary-white;
  }
}

.icon-wrapper {
  display: flex;
  border: 1px solid;
  border-radius: 50%;

  .v-icon {
    color: $color-mg-primary-white;
  }
}

.movie {
  &__title {
    font-size: 2.5rem;
  }

  &__rate {
    font-size: 1.5rem;

    .with-border {
      border-right: 1px solid rgba(255, 255, 255, .3);
    }

    &.small {
      display: none;
    }
 }

  &__overview {
    position: relative;
    padding: 30px 0;
    border-top: 1px solid rgba(255, 255, 255, .3);
    border-bottom: 1px solid rgba(255, 255, 255, .3);
  }
}

@media only screen and (max-width: 959px) {
  .dialog {
    &__toolbar {
      margin: 0 !important;
    }

    &__content {
      padding: 0 15px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .movie {
    flex-wrap: wrap;

    &__poster {
      display: flex;
      width: 100%;
      margin-bottom: 30px;

      .poster {
        margin: 0 5vw 0 0!important;
      }
    }

    &__rate {
      &.small {
        display: flex;
        height: 100%;

        span {
          font-size: 2rem;
          line-height: 1;
        }
      }

      &.large {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .icon-wrapper {
    border: none;
    margin: 0 !important;

    .v-icon {
      font-size: 36px;
    }
  }

  .movie {
    &__rate {
      &.small {
        font-size: 3.5vw;

        span {
          font-size: 1.5em;
        }
      }
    }
  }
}
</style>
