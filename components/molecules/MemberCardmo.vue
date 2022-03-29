<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      :src="imgSrc1"
      class="border"
      width="100%"
      @click.stop="dialog = true"
    ></v-img>
    <v-dialog v-model="dialog" max-width="80vw">
      <v-card>
        <v-img
          :src="imgSrc2"
          class="border"
          width="100%"
          @click="reveal = false"
        ></v-img>
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">{{ name }}</p>
          <p class="text--primary">
            学年：{{ grade }}<br />
            学部：{{ department }}<br />
            愛車：{{ car }}<br />
            役職：{{ post }}<br />
            新入生に一言：<br />
            {{ message }}
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '名前',
    },
    grade: {
      type: String,
      default: '学年',
    },
    department: {
      type: String,
      default: '学部',
    },
    car: {
      type: String,
      default: '愛車',
    },
    post: {
      type: String,
      default: '役職',
    },
    message: {
      type: String,
      default: 'メッセージ',
    },
    imgSrc1: {
      type: String,
      default: require('@/assets/gonuxt/img/sample01.jpg'),
    },
    imgSrc2: {
      type: String,
      default: require('@/assets/gonuxt/img/sample01.jpg'),
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/app';
</style>
