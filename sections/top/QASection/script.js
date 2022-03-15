import QuestionCard from '@/components/molecules/QuestionCard.vue'

export default {
  components: { QuestionCard },
  props: {
    contact_text: {
      type: String,
      default: 'Still have questions?',
    },
    contact_link_text: {
      type: String,
      default: 'Contact us.',
    },
    contact_link: {
      type: String,
      default: 'example.html',
    },
  },

  data: () => ({
    questions: [
      {
        title: 'そもそも自動車部ってなにもの？',
        txtBody:
          '自動車部は体育会所属の公認クラブです。いわゆる”体育会系”のクラブです、がそんなに堅苦しいものではありません。筋トレもありません。またJAF近畿地域クラブ協議会(JMRC近畿)の加盟クラブでもあります。',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: 'クルマの知識が全然なくて敷居が高く感じられるんですが…',
        txtBody:
          'そんなことはありません。クルマが好きならそれだけで十分です。部員のなかには入部当初は名前も知らなかったクルマに乗っている者もいます。',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: '大学生でクルマなんか持てるの？',
        txtBody:
          '持てます。ツテや個人売買でびっくりするような値段で買えます。維持のためにバイトは必須ですがみんななんとかなっています。そこらへんの詳しいことはブログにも書かれていますので見てください。',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: 'まだ免許取っていません…',
        txtBody:
          '全然問題ありません。むしろ新入生の場合、入部当初から免許を持っているほうが稀です。免許がないうちも観戦、横乗りなどでモータースポーツの魅力を味わうことはできます！まずは入部してモータースポーツをもっと知ってください！',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: '部活動は忙しい？',
        txtBody:
          '基本的に毎週金曜日18時からの部会のみです。その他に月1回程度の練習会、試合などがありますが、日常の練習は個人の自由です。',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: '入部することのメリットは？',
        txtBody:
          '自動車部員ならば誰でも各種工具やリフト、タイヤチェンジャーなどの設備が整ったガレージをいつでも自由に使えます。また整備のためならば構内にクルマで来られます。そしてJMRCの加盟クラブであるため、モータースポーツをするうえで必要なライセンスの取得が容易なうえ、自動車部としてサーキットでの占有走行(貸切、主催)ができます。',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: '文系学生はいるの？',
        txtBody:
          'います。クルマ好きに文理は関係ありません。クルマいじりというと理系なイメージが持たれがちですが、そんなことはありません。',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: '女子部員はいるの？',
        txtBody:
          '現在いません。が、大歓迎です！女子の部がある試合もありますし、人数が少ないので上位入賞が狙いやすいですよ。部員でなくマネージャーになりたいという方も大歓迎です！ちなみに他大学の自動車部には女子部員がいます。',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
    ],
  }),
}
