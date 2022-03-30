<template>
  <v-card class="mx-auto" :height="height" max-width="344">
    <v-card-title class="justify-center text-subtitle-1 text-sm-h6">{{
      title
    }}</v-card-title>
    <v-img :src="imgSrc" class="border" width="100%"></v-img>
    <v-card-subtitle class="text-left text-sm-body-1 text--primary">{{
      mainText
    }}</v-card-subtitle>
    <!--<v-card-actions>
      <v-card-text class="orange--text"> 詳細 </v-card-text>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text class="text-center">{{ subText }}</v-card-text>
      </div>
    </v-expand-transition>-->
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '活動場所',
    },
    mainText: {
      type: String,
      default: '説明文',
    },
    subText: {
      type: String,
      default: '詳細文',
    },
    imgSrc: {
      type: String,
      default: require('@/assets/top/img/gymkhana.jpg'),
    },
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 300
        case 'sm':
          return 380
        case 'md':
          return 320
        case 'lg':
          return 360
        case 'xl':
          return 380
        default:
          return 344
      }
    },
  },
}
</script>
