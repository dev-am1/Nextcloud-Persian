(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{252:function(t,a,i){"use strict";var e=i(259),o=i.n(e);function n(t,a,i,e,o,n,r){try{var s=t[n](r),d=s.value}catch(t){return void i(t)}s.done?a(d):Promise.resolve(d).then(e,o)}a.a=function(t){var a=o.a.CancelToken.source();return{request:function(){var i,e=(i=regeneratorRuntime.mark((function i(e,o){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",t(e,Object.assign({cancelToken:a.token},o)));case 1:case"end":return i.stop()}}),i)})),function(){var t=this,a=arguments;return new Promise((function(e,o){var r=i.apply(t,a);function s(t){n(r,e,o,s,d,"next",t)}function d(t){n(r,e,o,s,d,"throw",t)}s(void 0)}))});return function(t,a){return e.apply(this,arguments)}}(),cancel:a.cancel}}},269:function(t,a,i){"use strict";var e=i(137),o=Object(e.loadState)("photos","mimes");a.a=o},270:function(t,a,i){var e=i(378);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(148).default)("4deb72a7",e,!0,{})},274:function(t,a,i){var e=i(382);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(148).default)("019e1002",e,!0,{})},275:function(t,a,i){var e=i(384);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(148).default)("7086606b",e,!0,{})},276:function(t,a,i){var e=i(388);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(148).default)("545fc046",e,!0,{})},298:function(t,a,i){"use strict";function e(t,a,i,e,o,n,r){try{var s=t[n](r),d=s.value}catch(t){return void i(t)}s.done?a(d):Promise.resolve(d).then(e,o)}var o={name:"EmptyContent",props:{illustrationName:{type:String,default:""}},data:function(){return{illustration:""}},computed:{haveIllustration:function(){return""!==this.illustrationName},isLoaded:function(){return!this.haveIllustration||""!==this.illustration},isReady:function(){return!this.haveIllustration||this.haveIllustration&&this.isLoaded}},watch:{illustrationName:function(){this.getIllustration()}},beforeMount:function(){this.getIllustration()},methods:{getIllustration:function(){var t,a=this;return(t=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.illustration="",""===a.illustrationName){t.next=12;break}return t.prev=2,t.next=5,i(376)("./".concat(a.illustrationName,".svg"));case 5:e=t.sent,a.illustration=e.default,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.error("Could not get the error illustration",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})),function(){var a=this,i=arguments;return new Promise((function(o,n){var r=t.apply(a,i);function s(t){e(r,o,n,s,d,"next",t)}function d(t){e(r,o,n,s,d,"throw",t)}s(void 0)}))})()}}},n=(i(377),i(76)),r=Object(n.a)(o,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.isReady?i("div",{staticClass:"emptycontent"},[t.haveIllustration?i("div",{staticClass:"illustration",domProps:{innerHTML:t._s(t.illustration)}}):i("div",{staticClass:"icon-error"}),t._v(" "),i("h2",[t._t("default")],2),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:t.$slots.desc,expression:"$slots.desc"}]},[t._t("desc")],2)]):t._e()}),[],!1,null,null,null);a.a=r.exports},300:function(a,i,e){"use strict";var o=e(18),n=e(77),r={name:"File",inheritAttrs:!1,props:{basename:{type:String,required:!0},filename:{type:String,required:!0},etag:{type:String,required:!0},fileid:{type:Number,required:!0},mime:{type:String,required:!0},list:{type:Array,required:!0},loadMore:{type:Function,default:function(){return[]}}},data:function(){return{loaded:!1}},computed:{davPath:function(){return Object(o.generateRemoteUrl)("dav/files/".concat(Object(n.getCurrentUser)().uid))+this.filename},ariaUuid:function(){return"image-".concat(this.fileid)},ariaLabel:function(){return t("photos",'Open the full size "{name}" image',{name:this.basename})},isImage:function(){return this.mime.startsWith("image")},src:function(){return Object(o.generateUrl)("/core/preview?fileId=".concat(this.fileid,"&x=",256,"&y=",256,"&a=false&v=").concat(this.etag))}},beforeDestroy:function(){this.$refs.src=""},methods:{openViewer:function(){OCA.Viewer.open({path:this.filename,list:this.list,loadMore:this.loadMore})},onLoad:function(){this.loaded=!0}}},s=(e(381),e(76)),d=Object(s.a)(r,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("a",{staticClass:"file",class:{"file--clear":!t.loaded},attrs:{href:t.davPath,"aria-label":t.ariaLabel},on:{click:function(a){return a.preventDefault(),t.openViewer(a)}}},[i("transition",{attrs:{name:"fade"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],ref:"img",attrs:{src:t.src,alt:t.basename,"aria-describedby":t.ariaUuid},on:{load:t.onLoad}})]),t._v(" "),t.loaded?t._e():i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"url(#placeholder__gradient)"}},[t.isImage?i("use",{attrs:{"xlink:href":"#placeholder--img"}}):i("use",{attrs:{"xlink:href":"#placeholder--video"}})]),t._v(" "),i("p",{staticClass:"hidden-visually",attrs:{id:t.ariaUuid}},[t._v(t._s(t.basename))]),t._v(" "),i("div",{staticClass:"cover",attrs:{role:"none"}})],1)}),[],!1,null,"bd62cb82",null);i.a=d.exports},301:function(t,a,i){"use strict";var e={name:"Grid"},o=(i(383),i(76)),n=Object(o.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("transition-group",{staticClass:"photos-grid",attrs:{role:"grid",name:"list",tag:"div"}},[this._t("default"),this._v(" "),a("div",{key:"footer",staticClass:"photos-grid__footer-spacer",attrs:{role:"none"}})],2)}),[],!1,null,"05633275",null);a.a=n.exports},302:function(a,i,e){"use strict";var o=e(385),n=e.n(o),r=e(386),s={name:"Navigation",components:{ActionButton:e.n(r).a,Actions:n.a},inheritAttrs:!1,props:{basename:{type:String,required:!0},filename:{type:String,required:!0},showActions:{type:Boolean,default:!1},rootTitle:{type:String,default:t("photos","Photos")}},computed:{isRoot:function(){return"/"===this.filename},name:function(){return this.isRoot?this.rootTitle:this.basename},parentPath:function(){var t=this.filename.split("/");t.pop();var a=t.join("/");return this.isRoot||""===a.trim()?"/":t.join("/")},parentName:function(){return this.parentPath&&this.parentPath.split("/").pop()},backToText:function(){return"/"===this.parentPath?t("photos","Back to {folder}",{folder:this.rootTitle}):t("photos","Back to {folder}",{folder:this.parentName})},to:function(){var t=/^\/?(.*)/i.exec(this.parentPath)[1],a=Object.assign({},this.$route,{params:{path:t}}),i=a.name,e=a.params;return""===t?{name:i}:decodeURIComponent(this.$router.resolve({name:i,params:e}).resolved.path)}},methods:{folderUp:function(){this.$router.push(this.to)},showSidebar:function(){OCA.Files.Sidebar.open(this.filename)}}},d=(e(387),e(76)),p=Object(d.a)(s,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"photos-navigation",class:{"photos-navigation--root":t.isRoot},attrs:{role:"toolbar"}},[t.isRoot?t._e():i("Actions",{staticClass:"photos-navigation__back"},[i("ActionButton",{attrs:{icon:"icon-confirm"},on:{click:t.folderUp}},[t._v("\n\t\t\t"+t._s(t.backToText)+"\n\t\t")])],1),t._v(" "),i("h2",{staticClass:"photos-navigation__title"},[t._v("\n\t\t"+t._s(t.name)+"\n\t")]),t._v(" "),!t.isRoot&&t.showActions?i("Actions",{staticClass:"photos-navigation__share"},[i("ActionButton",{attrs:{icon:"icon-shared"},on:{click:t.showSidebar}},[t._v("\n\t\t\t"+t._s(t.t("photos","Share this folder"))+"\n\t\t")])],1):t._e()],1)}),[],!1,null,"60433307",null);i.a=p.exports},376:function(t,a,i){var e={"./empty.svg":[502,7],"./folder.svg":[503,8],"./images.svg":[504,9]};function o(t){if(!i.o(e,t))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=e[t],o=a[0];return i.e(a[1]).then((function(){return i.t(o,7)}))}o.keys=function(){return Object.keys(e)},o.id=376,t.exports=o},377:function(t,a,i){"use strict";var e=i(270);i.n(e).a},378:function(t,a,i){(a=i(147)(!1)).push([t.i,".emptycontent{grid-column:1/-1;margin-top:20vh}.illustration{min-width:200px;max-width:15%;width:300px;margin:auto;margin-bottom:20px;position:relative}.illustration svg{width:100%;height:100%;max-height:40vh}.illustration [fill*='6c63ff']{fill:var(--color-primary-element)}\n",""]),t.exports=a},381:function(t,a,i){"use strict";var e=i(274);i.n(e).a},382:function(t,a,i){(a=i(147)(!1)).push([t.i,".file[data-v-bd62cb82],.folder[data-v-bd62cb82]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.file .cover[data-v-bd62cb82],.folder .cover[data-v-bd62cb82]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-bd62cb82],.file:active .cover[data-v-bd62cb82],.file:hover .cover[data-v-bd62cb82],.file:focus .cover[data-v-bd62cb82],.folder.active .cover[data-v-bd62cb82],.folder:active .cover[data-v-bd62cb82],.folder:hover .cover[data-v-bd62cb82],.folder:focus .cover[data-v-bd62cb82]{opacity:.3}.file--clear.active .cover[data-v-bd62cb82],.file--clear:active .cover[data-v-bd62cb82],.file--clear:hover .cover[data-v-bd62cb82],.file--clear:focus .cover[data-v-bd62cb82],.folder--clear.active .cover[data-v-bd62cb82],.folder--clear:active .cover[data-v-bd62cb82],.folder--clear:hover .cover[data-v-bd62cb82],.folder--clear:focus .cover[data-v-bd62cb82]{opacity:.1}.fade-enter-active[data-v-bd62cb82],.fade-leave-active[data-v-bd62cb82]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-bd62cb82],.fade-leave-to[data-v-bd62cb82]{opacity:0}img[data-v-bd62cb82]{position:absolute;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}svg[data-v-bd62cb82]{position:absolute;width:70%;height:70%}\n",""]),t.exports=a},383:function(t,a,i){"use strict";var e=i(275);i.n(e).a},384:function(t,a,i){(a=i(147)(!1)).push([t.i,".photos-grid[data-v-05633275]{display:grid;align-items:center;justify-content:center;grid-template-columns:repeat(10, 1fr);position:relative}.photos-grid__footer-spacer[data-v-05633275]{grid-column:1;padding-bottom:100%}.list-move[data-v-05633275]{transition:transform var(--animation-quick)}@media (min-width: 0px) and (max-width: 400px){.photos-grid[data-v-05633275]{gap:8px;padding:66px 8px 8px 8px;grid-template-columns:repeat(3, 1fr)}}@media (min-width: 400px) and (max-width: 700px){.photos-grid[data-v-05633275]{gap:8px;padding:66px 8px 8px 8px;grid-template-columns:repeat(4, 1fr)}}@media (min-width: 700px) and (max-width: 1024px){.photos-grid[data-v-05633275]{gap:8px;padding:66px 44px 44px 44px;grid-template-columns:repeat(5, 1fr)}}@media (min-width: 1024px) and (max-width: 1280px){.photos-grid[data-v-05633275]{gap:8px;padding:66px 44px 44px 44px;grid-template-columns:repeat(4, 1fr)}}@media (min-width: 1280px) and (max-width: 1440px){.photos-grid[data-v-05633275]{gap:8px;padding:88px 66px 66px 66px;grid-template-columns:repeat(5, 1fr)}}@media (min-width: 1440px) and (max-width: 1600px){.photos-grid[data-v-05633275]{gap:8px;padding:88px 66px 66px 66px;grid-template-columns:repeat(6, 1fr)}}@media (min-width: 1600px) and (max-width: 2048px){.photos-grid[data-v-05633275]{gap:8px;padding:88px 66px 66px 66px;grid-template-columns:repeat(7, 1fr)}}@media (min-width: 2048px) and (max-width: 2560px){.photos-grid[data-v-05633275]{gap:8px;padding:88px 88px 88px 88px;grid-template-columns:repeat(8, 1fr)}}@media (min-width: 2560px) and (max-width: 3440px){.photos-grid[data-v-05633275]{gap:8px;padding:88px 88px 88px 88px;grid-template-columns:repeat(9, 1fr)}}@media (min-width: 3440px){.photos-grid[data-v-05633275]{gap:8px;padding:88px 88px 88px 88px;grid-template-columns:repeat(10, 1fr)}}\n",""]),t.exports=a},387:function(t,a,i){"use strict";var e=i(276);i.n(e).a},388:function(t,a,i){(a=i(147)(!1)).push([t.i,".icon-confirm[data-v-60433307]{transform:rotate(180deg)}.photos-navigation[data-v-60433307]{display:flex;position:absolute;height:44px;align-items:center;max-width:100%;padding-right:10px}.photos-navigation__title[data-v-60433307]{margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.photos-navigation__share[data-v-60433307]{margin-left:10px}.photos-navigation__back[data-v-60433307],.photos-navigation__share[data-v-60433307]{flex-grow:0;flex-shrink:0}@media (min-width: 0px) and (max-width: 400px){.photos-navigation[data-v-60433307]{top:14.66667px}.photos-navigation--root .photos-navigation__title[data-v-60433307]{padding-left:8px}}@media (min-width: 400px) and (max-width: 700px){.photos-navigation[data-v-60433307]{top:14.66667px}.photos-navigation--root .photos-navigation__title[data-v-60433307]{padding-left:8px}}@media (min-width: 700px) and (max-width: 1024px){.photos-navigation[data-v-60433307]{top:14.66667px}.photos-navigation__back[data-v-60433307]{margin:0 0px}.photos-navigation--root .photos-navigation__title[data-v-60433307]{padding-left:44px}}@media (min-width: 1024px) and (max-width: 1280px){.photos-navigation[data-v-60433307]{top:14.66667px}.photos-navigation__back[data-v-60433307]{margin:0 0px}.photos-navigation--root .photos-navigation__title[data-v-60433307]{padding-left:44px}}@media (min-width: 1280px) and (max-width: 1440px){.photos-navigation[data-v-60433307]{top:29.33333px}.photos-navigation__back[data-v-60433307]{margin:0 11px}.photos-navigation--root .photos-navigation__title[data-v-60433307]{padding-left:66px}}@media (min-width: 1440px) and (max-width: 1600px){.photos-navigation[data-v-60433307]{top:29.33333px}.photos-navigation__back[data-v-60433307]{margin:0 11px}.photos-navigation--root .photos-navigation__title[data-v-60433307]{padding-left:66px}}@media (min-width: 1600px) and (max-width: 2048px){.photos-navigation[data-v-60433307]{top:29.33333px}.photos-navigation__back[data-v-60433307]{margin:0 11px}.photos-navigation--root .photos-navigation__title[data-v-60433307]{padding-left:66px}}@media (min-width: 2048px) and (max-width: 2560px){.photos-navigation[data-v-60433307]{top:29.33333px}.photos-navigation__back[data-v-60433307]{margin:0 22px}.photos-navigation--root .photos-navigation__title[data-v-60433307]{padding-left:88px}}@media (min-width: 2560px) and (max-width: 3440px){.photos-navigation[data-v-60433307]{top:29.33333px}.photos-navigation__back[data-v-60433307]{margin:0 22px}.photos-navigation--root .photos-navigation__title[data-v-60433307]{padding-left:88px}}@media (min-width: 3440px){.photos-navigation[data-v-60433307]{top:29.33333px}.photos-navigation__back[data-v-60433307]{margin:0 22px}.photos-navigation--root .photos-navigation__title[data-v-60433307]{padding-left:88px}}\n",""]),t.exports=a}}]);
//# sourceMappingURL=photos.1.js.map?v=c290b053f0260110d7ae