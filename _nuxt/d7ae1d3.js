(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{236:function(t,o,e){var content=e(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("48517564",content,!0,{sourceMap:!1})},238:function(t,o,e){var content=e(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("b9c825e4",content,!0,{sourceMap:!1})},253:function(t,o,e){var content=e(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("b457879e",content,!0,{sourceMap:!1})},274:function(t,o,e){"use strict";var n=e(275),r=e(276),c={name:"DefaultLayout",components:{TheHeader:n.default,TheFooter:r.default}},l=e(57),d=e(70),v=e.n(d),m=e(397),f=e(404),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-app",[e("TheHeader"),t._v(" "),e("v-main",[e("Nuxt")],1),t._v(" "),e("TheFooter")],1)}),[],!1,null,null,null);o.a=component.exports;v()(component,{VApp:m.a,VMain:f.a})},275:function(t,o,e){"use strict";e.r(o);var n=e(90),r={name:"TheHeader",data:function(){return{imgSrc:e(281),brandName:n.a.brand.nameShort,drawer:!1,group:null,Name:"OUAC 大阪大学自動車部",pages:[{icon:"mdi-star",title:"HOME",nuxtLink:"/",section:"#top"},{icon:"mdi-star",title:"活動内容",nuxtLink:"/",section:"#activity"},{icon:"mdi-text",title:"新歓情報",nuxtLink:"/",section:"#welcome"},{icon:"mdi-text",title:"部員紹介",nuxtLink:"/",section:"#member"},{icon:"mdi-cards",title:"質問",nuxtLink:"/",section:"#qa"}]}}},c=(e(322),e(57)),l=e(70),d=e.n(l),v=e(406),m=e(398),f=e(277),h=e(399),x=e(187),w=e(158),_=e(188),y=e(122),k=e(190),C=e(107),V=e(101),z=e(405),L=e(400),I=e(252),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("header",{attrs:{id:"top"}},[e("v-app-bar",{attrs:{dark:"",dense:"",height:"72",fixed:""}},[e("v-app-bar-nav-icon",{staticClass:"d-block d-md-none",on:{click:function(o){t.drawer=!0}}}),t._v(" "),e("v-toolbar-title",{staticClass:"font-weight-bold text-body-1 text-lg-h5"},[t._v("\r\n        "+t._s(t.brandName)+"\r\n      ")]),t._v(" "),e("v-spacer"),t._v(" "),e("div",{staticClass:"d-none d-md-block bar"},[t._l(t.pages,(function(o,n){return e("router-link",{key:n,staticClass:"nt-app-bar-link",attrs:{to:o.nuxtLink}},[e("v-btn",{staticClass:"text-subtitle-1",attrs:{elevation:"0"},on:{click:function(e){return t.$vuetify.goTo(o.section,{offset:90})}}},[t._v(t._s(o.title))])],1)})),t._v(" "),e("a",{staticClass:"text-decoration-none",attrs:{href:"http://ouachp.web.fc2.com/report1.html",target:"_blank"}},[e("v-btn",{staticClass:"text-subtitle-1",attrs:{elevation:"0"}},[t._v("リザルト")])],1)],2)],1),t._v(" "),e("v-navigation-drawer",{attrs:{dark:"",width:"160",height:"50%",fixed:"",temporary:""},model:{value:t.drawer,callback:function(o){t.drawer=o},expression:"drawer"}},[e("v-img",{staticClass:"mb-1",attrs:{src:t.imgSrc,width:"100%"}}),t._v(" "),e("v-divider"),t._v(" "),e("v-list",{attrs:{nav:"",dense:""}},[e("v-list-item-group",{attrs:{"active-class":"red--text text--accent-4"},model:{value:t.group,callback:function(o){t.group=o},expression:"group"}},t._l(t.pages,(function(o){return e("NuxtLink",{key:o.title,attrs:{to:o.nuxtLink}},[e("v-list-item",[e("v-list-item-icon",[e("v-icon",{domProps:{textContent:t._s(o.icon)}})],1),t._v(" "),e("v-list-item-title",{domProps:{textContent:t._s(o.title)},on:{click:function(e){return t.$vuetify.goTo(o.section,{offset:90})}}})],1)],1)})),1)],1)],1)],1)])}),[],!1,null,null,null);o.default=component.exports;d()(component,{VAppBar:v.a,VAppBarNavIcon:m.a,VBtn:f.a,VDivider:h.a,VIcon:x.a,VImg:w.a,VList:_.a,VListItem:y.a,VListItemGroup:k.a,VListItemIcon:C.a,VListItemTitle:V.a,VNavigationDrawer:z.a,VSpacer:L.a,VToolbarTitle:I.a})},276:function(t,o,e){"use strict";e.r(o);var n=e(90),r={name:"TheFooter",data:function(){return{links:n.a.brand.footer.links,copyright:{year:n.a.brand.copyrightInfo.year,owner:n.a.brand.copyrightInfo.owner}}}},c=(e(378),e(57)),l=e(70),d=e.n(l),v=e(277),m=e(401),f=e(402),h=e(187),x=e(403),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-footer",{attrs:{color:"red py-2",padless:""}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[t._l(t.links,(function(link){return[e("a",{key:link.icon,staticClass:"text-decoration-none",attrs:{href:link.link,target:"_blank"}},[e("v-btn",{staticClass:"mx-1",attrs:{color:"white",rounded:"",icon:""}},[e("v-icon",{attrs:{size:"2em"}},[t._v(t._s(link.icon))])],1)],1)]})),t._v(" "),e("v-col",{staticClass:"red text-center white--text",attrs:{cols:"12"}},[t._v("\n      © "+t._s(t.copyright.year)+" "+t._s(t.copyright.owner)+"\n    ")])],2)],1)}),[],!1,null,null,null);o.default=component.exports;d()(component,{VBtn:v.a,VCol:m.a,VFooter:f.a,VIcon:h.a,VRow:x.a})},281:function(t,o,e){t.exports=e.p+"img/OUAC.fec78b7.jpg"},284:function(t,o,e){e(285),t.exports=e(286)},316:function(t,o,e){"use strict";e(236)},317:function(t,o,e){var n=e(18)(!1);n.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=n},322:function(t,o,e){"use strict";e(238)},323:function(t,o,e){var n=e(18)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Zen+Antique&family=Zen+Maru+Gothic&display=swap);"]),n.push([t.i,'.v-application .page-title{font-size:2.4rem;color:#b9b9b9;margin-bottom:0}.v-application .v-card{box-shadow:0 3px 11px 0 #e8eafc,0 3px 3px -2px hsla(0,0%,69.8%,.10196),0 1px 8px 0 hsla(0,0%,60.4%,.10196)!important}.v-application .v-card .v-card__title p{color:#6e6e6e;line-height:1.33;margin:0;font-size:20px;font-weight:400}.v-application .v-card .card-dark-grey{color:#4a4a4a!important}.v-application .v-card .card-light-grey{color:#6e6e6e!important}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active:before{opacity:0}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item:hover{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item:hover:before{opacity:0}.v-application h1{font-size:3rem}.v-application h1,.v-application h2{font-weight:400;margin-bottom:16px;line-height:1}.v-application h2{font-size:2rem}.v-application h3{font-size:1.64rem}.v-application h3,.v-application h4{font-weight:400;margin-bottom:16px;line-height:1}.v-application h4{font-size:1.5rem}.v-application h5{font-size:1.285rem;font-weight:400;margin-bottom:16px}.v-application h6{font-size:1.142rem;font-weight:400;margin-bottom:16px}.mapContainer+footer.v-footer{display:none}.toasted-container .toasted{height:50px!important;box-shadow:none}.toasted-container .toasted.default{background:#536dfe!important}.toasted-container .toasted.error{background:#ff4081!important}.toasted-container .toasted.success{background:#3cd4a0!important}.toasted-container .toasted.info{background-color:#536dfe!important}.toasted-container .toasted.warning{background:#ffc260!important}.toasted-container .toasted .action{color:#6e6e6e}.gnt-sec-0,.gnt-sec-1{flex:0 0 100%;max-width:100%}.gnt-sec-1{margin-top:5em;margin-bottom:5em}.gnt-sec-2{margin-top:4em;margin-bottom:4em}.gnt-sec-2,.gnt-sec-3{flex:0 0 100%;max-width:100%}.gnt-sec-3{margin-top:3em;margin-bottom:3em}.gnt-sec-4{margin-top:2em;margin-bottom:2em}.gnt-sec-4,.gnt-sec-5{flex:0 0 100%;max-width:100%}.gnt-sec-5{margin-top:1em;margin-bottom:1em}.v-application .text--primary,.v-application .text-body-1,.v-application .text-body-2,.v-application .text-button,.v-application .text-caption,.v-application .text-h1,.v-application .text-h2,.v-application .text-h3,.v-application .text-h4,.v-application .text-h5,.v-application .text-h6,.v-application .text-headline,.v-application .text-overline,.v-application .text-subtitle-1,.v-application .text-subtitle-2,.v-application .text-title{font-family:"Zen Maru Gothic",sans-serif!important}.underline{position:relative}.underline:after{content:"";position:absolute;left:50%;bottom:-12px;width:300px;height:2px;transform:translateX(-50%);background-color:red}a{text-decoration:none!important}@media only screen and (max-width:1000px){.bar{display:none}}.nav{display:none}@media only screen and (max-width:1000px){.nav{display:block}}.gotop{display:block;width:60px;height:60px;box-sizing:border-box;background:#fff;border:1px solid #999;padding-top:30px;text-align:center;letter-spacing:-1px;font-size:85%;text-decoration:none;color:#333;opacity:.5;position:fixed;bottom:9px;right:20px;z-index:10000}.gotop:before{content:"";display:block;border-top:2px solid #333;border-right:2px solid #333;width:25%;height:25%;top:25%;left:0;right:0;margin:auto;position:absolute;transform:rotate(-45deg)}.gotop:hover{opacity:1}',""]),t.exports=n},378:function(t,o,e){"use strict";e(253)},379:function(t,o,e){var n=e(18)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Zen+Antique&family=Zen+Maru+Gothic&display=swap);"]),n.push([t.i,'.v-application .page-title{font-size:2.4rem;color:#b9b9b9;margin-bottom:0}.v-application .v-card{box-shadow:0 3px 11px 0 #e8eafc,0 3px 3px -2px hsla(0,0%,69.8%,.10196),0 1px 8px 0 hsla(0,0%,60.4%,.10196)!important}.v-application .v-card .v-card__title p{color:#6e6e6e;line-height:1.33;margin:0;font-size:20px;font-weight:400}.v-application .v-card .card-dark-grey{color:#4a4a4a!important}.v-application .v-card .card-light-grey{color:#6e6e6e!important}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active:before{opacity:0}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item:hover{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item:hover:before{opacity:0}.v-application h1{font-size:3rem}.v-application h1,.v-application h2{font-weight:400;margin-bottom:16px;line-height:1}.v-application h2{font-size:2rem}.v-application h3{font-size:1.64rem}.v-application h3,.v-application h4{font-weight:400;margin-bottom:16px;line-height:1}.v-application h4{font-size:1.5rem}.v-application h5{font-size:1.285rem;font-weight:400;margin-bottom:16px}.v-application h6{font-size:1.142rem;font-weight:400;margin-bottom:16px}.mapContainer+footer.v-footer{display:none}.toasted-container .toasted{height:50px!important;box-shadow:none}.toasted-container .toasted.default{background:#536dfe!important}.toasted-container .toasted.error{background:#ff4081!important}.toasted-container .toasted.success{background:#3cd4a0!important}.toasted-container .toasted.info{background-color:#536dfe!important}.toasted-container .toasted.warning{background:#ffc260!important}.toasted-container .toasted .action{color:#6e6e6e}.gnt-sec-0,.gnt-sec-1{flex:0 0 100%;max-width:100%}.gnt-sec-1{margin-top:5em;margin-bottom:5em}.gnt-sec-2{margin-top:4em;margin-bottom:4em}.gnt-sec-2,.gnt-sec-3{flex:0 0 100%;max-width:100%}.gnt-sec-3{margin-top:3em;margin-bottom:3em}.gnt-sec-4{margin-top:2em;margin-bottom:2em}.gnt-sec-4,.gnt-sec-5{flex:0 0 100%;max-width:100%}.gnt-sec-5{margin-top:1em;margin-bottom:1em}.v-application .text--primary,.v-application .text-body-1,.v-application .text-body-2,.v-application .text-button,.v-application .text-caption,.v-application .text-h1,.v-application .text-h2,.v-application .text-h3,.v-application .text-h4,.v-application .text-h5,.v-application .text-h6,.v-application .text-headline,.v-application .text-overline,.v-application .text-subtitle-1,.v-application .text-subtitle-2,.v-application .text-title{font-family:"Zen Maru Gothic",sans-serif!important}.underline{position:relative}.underline:after{content:"";position:absolute;left:50%;bottom:-12px;width:300px;height:2px;transform:translateX(-50%);background-color:red}.v-footer .row{justify-content:center}@media(min-width:600px){.v-footer .row{justify-content:space-between}}',""]),t.exports=n},82:function(t,o,e){"use strict";var n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(e(316),e(57)),c=e(70),l=e.n(c),d=e(397),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);o.a=component.exports;l()(component,{VApp:d.a})},90:function(t,o,e){"use strict";o.a={brand:{name:"OUAC",nameShort:"OUAC 大阪大学自動車部",footer:{links:[{icon:"mdi-twitter",link:"https://twitter.com/ouachp"},{icon:"mdi-instagram",link:"https://www.instagram.com/ouac_220/"},{icon:"mdi-facebook",link:"https://www.facebook.com/ouac.official"},{icon:"mdi-youtube",link:"https://www.youtube.com/user/ouachp"},{icon:"mdi-google-maps",link:"https://goo.gl/maps/oqWK5rYEbZYUxoCT7"}]},copyrightInfo:{year:2022,owner:"大阪大学自動車部"}}}}},[[284,32,5,33]]]);