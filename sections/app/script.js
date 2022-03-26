import config from '@/assets/config'

export default {
  name: 'TheHeader',
  data: () => ({
    imgSrc: require('@/assets/top/img/OUAC.PNG'),
    brandName: config.brand.nameShort,
    drawer: false,
    group: null,
    Name: 'OUAC 大阪大学自動車部',
    pages: [
      {
        icon: 'mdi-star',
        title: 'HOME',
        nuxtLink: '/',
        section: '#top',
      },
      {
        icon: 'mdi-star',
        title: '活動内容',
        nuxtLink: '/',
        section: '#activity',
      },
      {
        icon: 'mdi-text',
        title: '新歓情報',
        nuxtLink: '/',
        section: '#welcome',
      },
      {
        icon: 'mdi-text',
        title: '部員紹介',
        nuxtLink: '/',
        section: '',
      },
      {
        icon: 'mdi-cards',
        title: '質問',
        nuxtLink: '/',
        section: '#qa',
      },
    ],
  }),
}
