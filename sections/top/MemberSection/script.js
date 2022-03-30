import MemberCard from '@/components/molecules/MemberCard.vue'
import MemberCardmo from '@/components/molecules/MemberCardmo.vue'
export default {
  components: { MemberCard, MemberCardmo },
  data: () => ({
    members: [
      {
        name: 'YN',
        grade: '新3回生',
        department: '経済学部',
        car: 'Mazda Roadster NB8C',
        post: '主将',
        message: '大学に入って新たなことをしてみたい人、大歓迎です！',
        imgSrc1: require('@/assets/top/img/1YN.jpg'),
        imgSrc2: require('@/assets/top/img/2YN.jpg'),
      },
      {
        name: 'IWT',
        grade: '新3回生',
        department: '工学部',
        car: 'Mazda Demio DE5FS',
        post: '副部長',
        message:
          '新入生の皆さん、入学おめでとうございます。今まで車に少しでも興味を持ったことがある人や大学で新しいことをしたい人には自動車部生活はとても楽しいものになります。一緒にモータースポーツを楽しみましょう‼︎お待ちしています‼︎',
        imgSrc1: require('@/assets/top/img/1IWT.jpg'),
        imgSrc2: require('@/assets/top/img/2IWT.jpg'),
      },
      {
        name: 'MRKM',
        grade: '新3回生',
        department: '外国語学部',
        car: 'Mitsubishi Mirage Asti CJ4A & Mitsubishi Libero Cargo CD2V',
        post: 'ガレージ管理係&HP担当',
        message:
          '新歓ページにお越しいただきありがとうございます！自動車部では競技、ドライブ、整備、板金、塗装などなど車関連のことはほとんどできます。ぜひ一緒に楽しみましょう！',
        imgSrc1: require('@/assets/top/img/1MRKM.jpg'),
        imgSrc2: require('@/assets/top/img/2MRKM.jpg'),
      },
      {
        name: 'OK',
        grade: '新4回生',
        department: '工学部',
        car: 'Honda Civic Sir EK4',
        post: 'HP担当',
        message:
          '部員みんながめちゃくちゃ仲のいい部活なので、ぜひ一度遊びに来てください！',
        imgSrc1: require('@/assets/top/img/1OK.jpg'),
        imgSrc2: require('@/assets/top/img/2OK.jpg'),
      },
    ],
  }),
}
