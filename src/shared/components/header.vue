<template>
  <v-toolbar>
    <v-icon @click="goToPage('/')">language</v-icon>
    <v-toolbar-title>Movies</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-menu offset-y>
        <div class="flex-row flex-row__btw menu" slot="activator">
          <span class="hidden-sm-and-down">My Account</span>
          <v-icon>expand_more</v-icon>
        </div>
        <v-list>
          <v-list-tile
            v-for="(item, index) in items"
            :key="index"
            @click="goToPage(item.link)">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  data () {
    return {
      items: [
        { title: 'My Account', link: '/account' },
        { title: 'Settings', link: '/settings' },
        { title: 'Logout', link: '/logout' }
      ],
      item: 'My Account'
    }
  }

  goToPage (page: string): void {
    this.$router.push(page)
  }
}
</script>

<style scoped lang="scss">
@import 'src/styles/colors';

.theme--light.v-toolbar {
  background: $color-mg-primary-gray;
  color: $color-mg-primary-white;
}

.v-icon {
  color: $color-mg-primary-white;
  cursor: pointer;
}

.menu {
  padding: 10px;
  border: 1px solid $color-mg-primary-white;
  border-radius: 5px;

  span {
    margin-right: 15px;
  }
}
</style>
