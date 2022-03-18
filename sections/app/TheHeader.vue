<template>
  <header>
    <v-app-bar dark dense height="72" fixed>
      <v-app-bar-nav-icon
        class="d-block d-md-none"
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <v-toolbar-title :class="brandNameFontWeight + ' text-h6 text-lg-h5'">
        {{ brandName }}
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="d-none d-md-block">
        <router-link to="/" class="nt-app-bar-link">
          <v-btn elevation="0" class="text-subtitle-1">活動内容</v-btn>
          <v-btn elevation="0" class="text-subtitle-1">新歓情報</v-btn>
          <v-btn elevation="0" class="text-subtitle-1">部員紹介</v-btn>
          <v-btn elevation="0" class="text-subtitle-1">質問</v-btn>
        </router-link>
        <a
          href="http://ouachp.web.fc2.com/report1.html"
          class="text-decoration-none"
          target="_blank"
        >
          <v-btn elevation="0" class="text-subtitle-1">リザルト</v-btn>
        </a>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title>活動内容</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>新歓情報</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>部員紹介</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>質問</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>リザルト</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script scoped>
import config from '@/assets/config'

export default {
  name: 'TheHeader',
  props: {
    brandNameFontWeight: {
      type: String,
      default: 'font-weight-bold',
    },
  },
  data: () => ({
    brandName: config.brand.nameShort,
    drawer: false,
  }),
}
</script>

<style lang="scss">
@import '@/assets/styles/app';

.nt-app-bar-link {
  text-decoration: none !important;
}
</style>
