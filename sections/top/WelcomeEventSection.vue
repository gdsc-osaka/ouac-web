<template>
  <v-container>
    <v-row id="welcome" class="my-6" justify="center">
      <v-col cols="12" md="6" class="mt-10">
        <h1 class="underline text-center font-weight-bold mb-10">
          {{ title }}
        </h1>
        <h3 class="font-weight-bold">－日程－</h3>
        <p class="text-h6">
          毎週金曜日 18:00～<br />
          昼過ぎからは誰かしら居ることが多いので、<br />
          早めの時間でもお気軽にお越しください。
        </p>
        <br />
        <h3 class="font-weight-bold">－イベント名－</h3>
        <p class="text-h6">部会&新歓ドライブ</p>
        <br />
        <h3 class="font-weight-bold">－内容－</h3>
        <p class="text-h6">
          ガレージ見学<br />
          （部員の車やガレージの機材、整備の様子を見て頂けます）<br />
          →晩ごはん<br />
          →ドライブ(部員が家まで車で送ります!)
        </p>
        <br />
        <h3 class="font-weight-bold">－場所－</h3>
        <p class="text-h6">自動車部ガレージ</p>
        <v-img :src="imgSrc" />
        <div align="center">
          <v-btn
            style="text-transform: none"
            large
            class="white--text"
            href="https://goo.gl/maps/oqWK5rYEbZYUxoCT7"
            :color="btnColor"
          >
            {{ btnTxt }}
            <v-icon> mdi-google-maps </v-icon>
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="grey lighten-1 mt-10">
        <h1 id="contact" class="underline text-center font-weight-bold mb-10">
          CONTACT US
        </h1>
        <h3 class="font-weight-bold">ー SNSからお問い合わせ</h3>
        <p class="text-h6">
          DMでのイベント参加のご連絡お待ちしております。<br />
          事前にご連絡頂ければ金曜夕方以外の時間帯でも対応させていただきます。
        </p>

        <div align="center" class="d-flex justify-center my-10">
          <template v-for="link in linksCount">
            <a
              :key="link.icon"
              :href="link.link"
              target="_blank"
              class="text-decoration-none"
            >
              <v-btn color="white" icon class="mx-10">
                <v-icon size="5em">{{ link.icon }}</v-icon>
              </v-btn>
              <p class="mt-3 id">{{ link.id }}</p>
            </a>
          </template>
        </div>
        <br />
        <h3 class="font-weight-bold">ー メールからお問い合わせ</h3>
        <p class="text-h6">
          メールでのご連絡は返信に時間がかかってしまうことがあります。
        </p>
        <a href="mailto:ouachp@yahoo.co.jp" class="text-decoration-none"
          ><p class="text-h5 mail">ouachp@yahoo.co.jp</p>
        </a>
        <br />
        <h3 class="font-weight-bold">ー アクセス</h3>
        <a
          href="https://goo.gl/maps/oqWK5rYEbZYUxoCT7"
          class="text-decoration-none text-h5"
          target="_blank"
          style="color: rgba(0, 0, 0, 0.87)"
          >Google Map<v-icon> mdi-google-maps </v-icon></a
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import config from '@/assets/config'
export default {
  name: 'WelcomeEventSection',
  props: {
    title: {
      type: String,
      default: '新歓情報',
    },
    btnTxt: {
      type: String,
      default: 'Google Map',
    },
    btnColor: {
      type: String,
      default: 'black',
    },
  },
  data: () => ({
    imgSrc: require('@/assets/top/img/map.jpg'),
    links: config.brand.footer.links,
  }),
  computed: {
    linksCount() {
      return this.links.slice(0, 3)
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/app';

.id {
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
  color: rgb(255, 255, 255);
}
.mail {
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
  color: rgba(0, 0, 0, 0.87);
}
</style>
