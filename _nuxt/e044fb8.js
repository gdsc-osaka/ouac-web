(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{411:function(t,n,o){t.exports=o.p+"img/intro.edfc5ec.jpg"},420:function(t,n,o){"use strict";o(13),o(6),o(12),o(71),o(37),o(278),o(196),o(72),o(89);var e=o(1);var r,c=o(63);n.a=(r="container",e.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var o=n.props,data=n.data,e=n.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,data,e)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var o,e=n.props,data=n.data,r=n.children,l=data.attrs;return l&&(data.attrs={},o=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(o||[])}),r)}})},468:function(t,n,o){var content=o(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("2778308a",content,!0,{sourceMap:!1})},495:function(t,n,o){"use strict";o(468)},496:function(t,n,o){var e=o(18)(!1);e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Zen+Antique&family=Zen+Maru+Gothic&display=swap);"]),e.push([t.i,'.v-application .page-title{font-size:2.4rem;color:#b9b9b9;margin-bottom:0}.v-application .v-card{box-shadow:0 3px 11px 0 #e8eafc,0 3px 3px -2px hsla(0,0%,69.8%,.10196),0 1px 8px 0 hsla(0,0%,60.4%,.10196)!important}.v-application .v-card .v-card__title p{color:#6e6e6e;line-height:1.33;margin:0;font-size:20px;font-weight:400}.v-application .v-card .card-dark-grey{color:#4a4a4a!important}.v-application .v-card .card-light-grey{color:#6e6e6e!important}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active:before{opacity:0}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item:hover{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item:hover:before{opacity:0}.v-application h1{font-size:3rem}.v-application h1,.v-application h2{font-weight:400;margin-bottom:16px;line-height:1}.v-application h2{font-size:2rem}.v-application h3{font-size:1.64rem}.v-application h3,.v-application h4{font-weight:400;margin-bottom:16px;line-height:1}.v-application h4{font-size:1.5rem}.v-application h5{font-size:1.285rem;font-weight:400;margin-bottom:16px}.v-application h6{font-size:1.142rem;font-weight:400;margin-bottom:16px}.mapContainer+footer.v-footer{display:none}.toasted-container .toasted{height:50px!important;box-shadow:none}.toasted-container .toasted.default{background:#536dfe!important}.toasted-container .toasted.error{background:#ff4081!important}.toasted-container .toasted.success{background:#3cd4a0!important}.toasted-container .toasted.info{background-color:#536dfe!important}.toasted-container .toasted.warning{background:#ffc260!important}.toasted-container .toasted .action{color:#6e6e6e}.gnt-sec-0,.gnt-sec-1{flex:0 0 100%;max-width:100%}.gnt-sec-1{margin-top:5em;margin-bottom:5em}.gnt-sec-2{margin-top:4em;margin-bottom:4em}.gnt-sec-2,.gnt-sec-3{flex:0 0 100%;max-width:100%}.gnt-sec-3{margin-top:3em;margin-bottom:3em}.gnt-sec-4{margin-top:2em;margin-bottom:2em}.gnt-sec-4,.gnt-sec-5{flex:0 0 100%;max-width:100%}.gnt-sec-5{margin-top:1em;margin-bottom:1em}.v-application .text--primary,.v-application .text-body-1,.v-application .text-body-2,.v-application .text-button,.v-application .text-caption,.v-application .text-h1,.v-application .text-h2,.v-application .text-h3,.v-application .text-h4,.v-application .text-h5,.v-application .text-h6,.v-application .text-headline,.v-application .text-overline,.v-application .text-subtitle-1,.v-application .text-subtitle-2,.v-application .text-title{font-family:"Zen Maru Gothic",sans-serif!important}.underline{position:relative}.underline:after{content:"";position:absolute;left:50%;bottom:-12px;width:300px;height:2px;transform:translateX(-50%);background-color:red}.gnt-intro-a-contents{line-height:1.6em}.gnt-intro-a-contents .gnt-intro-a-btn{text-transform:none}',""]),t.exports=e},518:function(t,n,o){"use strict";o.r(n);var e={name:"IntroSection",data:function(){return{imgSrc:o(411)}}},r=(o(495),o(57)),c=o(70),l=o.n(c),d=o(401),v=o(420),m=o(158),f=o(403),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-container",[o("v-row",{staticClass:"d-flex justify-center align-stretch"},[o("v-col",{staticClass:"gnt-intro-a-contents d-none d-sm-block",attrs:{cols:"12",sm:"6"}},[o("h1",{staticClass:"font-weight-bold d-block"},[t._v("\r\n        刺激に溢れた"),o("br"),t._v("\r\n        カーライフを"),o("br"),t._v("\r\n        始めてみませんか？"),o("br"),t._v("\r\n        主将\r\n      ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"5"}},[o("v-img",{attrs:{src:t.imgSrc}})],1),t._v(" "),o("v-col",{staticClass:"gnt-intro-a-contents d-block d-sm-none",attrs:{cols:"12",sm:"6"}},[o("h1",{staticClass:"font-weight-bold d-block"},[t._v("\r\n        刺激に溢れた"),o("br"),t._v("\r\n        カーライフを"),o("br"),t._v("\r\n        始めてみませんか？"),o("br"),t._v("\r\n        主将\r\n      ")])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VCol:d.a,VContainer:v.a,VImg:m.a,VRow:f.a})}}]);