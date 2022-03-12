<template>
  <v-app-bar dark dense height="72" fixed>
    <v-toolbar-title :class="brandNameFontWeight + ' text-h6 text-lg-h5'">
      {{ brandName }}
    </v-toolbar-title>

    <v-spacer></v-spacer>
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
  </v-app-bar>
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
  }),
}
</script>

<style lang="scss">
@import '@/assets/styles/app';

.nt-app-bar-link {
  text-decoration: none !important;
}
</style>
