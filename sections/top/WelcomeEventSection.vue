<template>
  <v-row justify="center" class="text-center my-16" no-gutters>
    <welcome id="welcome" />
    <v-col cols="12" sm="6">
      <h1 class="font-weight-bold">{{ title }}</h1>
      <ul class="d-block text-left text-h5">
        <li class="ml-15">
          日程：毎週金曜日 18:00～
          <ul class="ml-12">
            <li>昼過ぎからは誰かしら居ることが多いので、</li>
            <li>早めの時間でもお気軽にお越しください。</li>
          </ul>
        </li>
        <li class="ml-15">場所：自動車部ガレージ</li>
      </ul>
      <div class="mb-2">
        <v-btn
          style="text-transform: none"
          large
          rounded
          class="white--text"
          href="https://goo.gl/maps/oqWK5rYEbZYUxoCT7"
          :color="btnColor"
        >
          {{ btnTxt }}
        </v-btn>
      </div>
      <ul class="d-block text-left text-h5">
        <li class="ml-n3">イベント名：部会&新歓ドライブ</li>
        <li class="ml-15">
          内容：ガレージ見学
          <ul class="ml-12">
            <li>→晩ごはん</li>
            <li>→ドライブ(部員が家まで車で送ります!)</li>
          </ul>
        </li>
      </ul>
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
      default: 'Google Map',
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
ul {
  list-style: none;
}
</style>
