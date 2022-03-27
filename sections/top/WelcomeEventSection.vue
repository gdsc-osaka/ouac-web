<template>
  <v-container>
    <v-row id="welcome" class="my-16" justify="center">
      <v-col cols="12" sm="6">
        <h1 class="text-center font-weight-bold">{{ title }}</h1>
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
      <!--<ul class="d-block text-left text-h5">
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
      </ul>-->
      <v-col cols="12" md="6" class="black white--text">
        <h1 id="contact" class="text-center font-weight-bold">CONTACT US</h1>
        <h4>ー SNSからお問い合わせ</h4>
        <p>DMなどでのご連絡お待ちしております。</p>
        <div align="center">
          <template v-for="link in linksCount">
            <a
              :key="link.icon"
              :href="link.link"
              target="_blank"
              class="text-decoration-none"
            >
              <v-btn color="white" icon class="ma-10">
                <v-icon size="5em">{{ link.icon }}</v-icon>
              </v-btn>
            </a>
          </template>
        </div>
        <br />
        <h4>ー メールからお問い合わせ</h4>
        <p>
          事前にご連絡頂ければ金曜夕方以外の時間帯でも対応させていただきます。
        </p>
        <h4>ouachp@yahoo.co.jp</h4>
        <br />
        <h4>ー アクセス</h4>
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
ul {
  list-style: none;
}
</style>
