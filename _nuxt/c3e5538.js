(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{414:function(t,e,o){"use strict";o.r(e);var n=o(415),r=o.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(c);e.default=r.a},415:function(t,e){},427:function(t,e,o){var content=o(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("bc9b2d14",content,!0,{sourceMap:!1})},429:function(t,e,o){"use strict";o(13),o(6),o(12),o(71),o(37),o(279),o(196),o(72),o(89);var n=o(1);var r,c=o(64);e.a=(r="container",n.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var o=e.props,data=e.data,n=e.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var o,n=e.props,data=e.data,r=e.children,l=data.attrs;return l&&(data.attrs={},o=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(o||[])}),r)}})},452:function(t,e,o){"use strict";o(427)},453:function(t,e,o){var n=o(18)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Zen+Antique&family=Zen+Maru+Gothic&display=swap);"]),n.push([t.i,'.v-application .page-title{font-size:2.4rem;color:#b9b9b9;margin-bottom:0}.v-application .v-card{box-shadow:0 3px 11px 0 #e8eafc,0 3px 3px -2px hsla(0,0%,69.8%,.10196),0 1px 8px 0 hsla(0,0%,60.4%,.10196)!important}.v-application .v-card .v-card__title p{color:#6e6e6e;line-height:1.33;margin:0;font-size:20px;font-weight:400}.v-application .v-card .card-dark-grey{color:#4a4a4a!important}.v-application .v-card .card-light-grey{color:#6e6e6e!important}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active:before{opacity:0}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item:hover{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item:hover:before{opacity:0}.v-application h1{font-size:3rem}.v-application h1,.v-application h2{font-weight:400;margin-bottom:16px;line-height:1}.v-application h2{font-size:2rem}.v-application h3{font-size:1.64rem}.v-application h3,.v-application h4{font-weight:400;margin-bottom:16px;line-height:1}.v-application h4{font-size:1.5rem}.v-application h5{font-size:1.285rem;font-weight:400;margin-bottom:16px}.v-application h6{font-size:1.142rem;font-weight:400;margin-bottom:16px}.mapContainer+footer.v-footer{display:none}.toasted-container .toasted{height:50px!important;box-shadow:none}.toasted-container .toasted.default{background:#536dfe!important}.toasted-container .toasted.error{background:#ff4081!important}.toasted-container .toasted.success{background:#3cd4a0!important}.toasted-container .toasted.info{background-color:#536dfe!important}.toasted-container .toasted.warning{background:#ffc260!important}.toasted-container .toasted .action{color:#6e6e6e}.gnt-sec-0,.gnt-sec-1{flex:0 0 100%;max-width:100%}.gnt-sec-1{margin-top:5em;margin-bottom:5em}.gnt-sec-2{margin-top:4em;margin-bottom:4em}.gnt-sec-2,.gnt-sec-3{flex:0 0 100%;max-width:100%}.gnt-sec-3{margin-top:3em;margin-bottom:3em}.gnt-sec-4{margin-top:2em;margin-bottom:2em}.gnt-sec-4,.gnt-sec-5{flex:0 0 100%;max-width:100%}.gnt-sec-5{margin-top:1em;margin-bottom:1em}.v-application .text--primary,.v-application .text-body-1,.v-application .text-body-2,.v-application .text-button,.v-application .text-caption,.v-application .text-h1,.v-application .text-h2,.v-application .text-h3,.v-application .text-h4,.v-application .text-h5,.v-application .text-h6,.v-application .text-headline,.v-application .text-overline,.v-application .text-subtitle-1,.v-application .text-subtitle-2,.v-application .text-title{font-family:"Zen Maru Gothic",sans-serif!important}.underline{position:relative}.underline:after{content:"";position:absolute;left:50%;bottom:-12px;width:300px;height:2px;transform:translateX(-50%);background-color:red}.responsive-style{position:relative;width:100%;height:0;padding-top:50%}.responsive-style iframe{position:absolute;top:0;left:0;width:100%;height:100%}',""]),t.exports=n},456:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("h1",{staticClass:"underline font-weight-bold text-center"},[t._v("PV")])]),t._v(" "),o("v-col",{staticClass:"responsive-style",attrs:{cols:"12"}},[o("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/33GSpI49MWw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)],1)},r=[]},459:function(t,e,o){"use strict";o.r(e);var n=o(456),r=o(414);for(var c in r)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return r[t]}))}(c);o(452);var l=o(57),d=o(70),v=o.n(d),f=o(401),m=o(429),h=o(403),component=Object(l.a)(r.default,n.a,n.b,!1,null,null,null);e.default=component.exports,v()(component,{VCol:f.a,VContainer:m.a,VRow:h.a})}}]);