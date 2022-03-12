<template>
  <v-row justify="center" class="text-center my-16" no-gutters>
    <v-col cols="12" sm="6">
      <h1 class="font-weight-bold">{{ title }}</h1>
      <ul class="d-block text-left text-h5">
        <li>日程：毎週金曜日 18:00～</li>
        <li>場所：自動車部ガレージ</li>
        <li>イベント名：部会/見学会</li>
        <li>内容：ガレージ見学→ごはん→ドライブ</li>
      </ul>

      <!--<div class="mb-2">
        <v-btn
          style="text-transform: none"
          large
          rounded
          class="white--text"
          :color="btnColor"
          :to="link"
        >
          {{ btnTxt }}
        </v-btn>
      </div>
      <small>{{ subTxt }}</small>-->
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'WelcomeEventSection',
  props: {
    title: {
      type: String,
      default: '新歓情報',
    },
    txtBody: {
      type: String,
      default: '',
    },
    btnTxt: {
      type: String,
      default: 'Sample Button Text',
    },
    subTxt: {
      type: String,
      default: 'Sample Subtext',
    },
    btnColor: {
      type: String,
      default: 'black',
    },
    link: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/app';
</style>
