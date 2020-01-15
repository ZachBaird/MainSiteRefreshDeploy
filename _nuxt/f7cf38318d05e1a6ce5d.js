/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{303:function(t,e,l){"use strict";l.d(e,"a",(function(){return f}));l(60),l(6),l(5),l(9);var o=l(1);function f(t){return o.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,l){var o=l.props,data=l.data,f=l.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var x=data.attrs;if(x){data.attrs={};var r=Object.keys(x).filter((function(t){if("slot"===t)return!1;var e=x[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));r.length&&(data.staticClass+=" ".concat(r.join(" ")))}return o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),e(o.tag,data,f)}})}},304:function(t,e,l){var content=l(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(11).default)("b9f570ac",content,!0,{sourceMap:!1})},305:function(t,e,l){"use strict";l.d(e,"a",(function(){return r}));l(12),l(7);var o=l(2);l(6),l(5),l(9);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function r(){for(var t,e,l={},i=arguments.length;i--;)for(var o=0,f=Object.keys(arguments[i]);o<f.length;o++)switch(t=f[o]){case"class":case"style":case"directives":Array.isArray(l[t])||(l[t]=[]),l[t]=l[t].concat(arguments[i][t]);break;case"staticClass":if(!arguments[i][t])break;void 0===l[t]&&(l[t]=""),l[t]&&(l[t]+=" "),l[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":l[t]||(l[t]={});for(var r=l[t],c=0,n=Object.keys(arguments[i][t]||{});c<n.length;c++)r[e=n[c]]?r[e]=Array().concat(r[e],arguments[i][t][e]):r[e]=arguments[i][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":l[t]||(l[t]={}),l[t]=x({},arguments[i][t],{},l[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:l[t]||(l[t]=arguments[i][t])}return l}},306:function(t,e,l){(t.exports=l(10)(!1)).push([t.i,".container{width:100%;padding:12px;margin-right:auto;margin-left:auto}@media(min-width:960px){.container{max-width:900px}}@media(min-width:1264px){.container{max-width:1185px}}@media(min-width:1904px){.container{max-width:1785px}}.container--fluid{max-width:100%}.row{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-flex:1;flex:1 1 auto;margin-right:-12px;margin-left:-12px}.row--dense{margin-right:-4px;margin-left:-4px}.row--dense>.col,.row--dense>[class*=col-]{padding:4px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{width:100%;padding:12px}.col{flex-basis:0;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1,.col-auto{-webkit-box-flex:0}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-2,.col-3{-webkit-box-flex:0}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-4,.col-5{-webkit-box-flex:0}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-6,.col-7{-webkit-box-flex:0}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-8,.col-9{-webkit-box-flex:0}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-10,.col-11{-webkit-box-flex:0}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.offset-1{margin-left:8.3333333333%}.offset-2{margin-left:16.6666666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.3333333333%}.offset-5{margin-left:41.6666666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.3333333333%}.offset-8{margin-left:66.6666666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.3333333333%}.offset-11{margin-left:91.6666666667%}@media(min-width:600px){.col-sm{flex-basis:0;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-sm-auto{-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{-webkit-box-flex:0;flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{-webkit-box-flex:0;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-sm-4{-webkit-box-flex:0;flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{-webkit-box-flex:0;flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-sm-7{-webkit-box-flex:0;flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{-webkit-box-flex:0;flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-sm-10{-webkit-box-flex:0;flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{-webkit-box-flex:0;flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.3333333333%}.offset-sm-2{margin-left:16.6666666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.3333333333%}.offset-sm-5{margin-left:41.6666666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.3333333333%}.offset-sm-8{margin-left:66.6666666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.3333333333%}.offset-sm-11{margin-left:91.6666666667%}}@media(min-width:960px){.col-md{flex-basis:0;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-md-auto{-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:100%}.col-md-1{-webkit-box-flex:0;flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{-webkit-box-flex:0;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-md-4{-webkit-box-flex:0;flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{-webkit-box-flex:0;flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-md-7{-webkit-box-flex:0;flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{-webkit-box-flex:0;flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-md-10{-webkit-box-flex:0;flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{-webkit-box-flex:0;flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.3333333333%}.offset-md-2{margin-left:16.6666666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.3333333333%}.offset-md-5{margin-left:41.6666666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.3333333333%}.offset-md-8{margin-left:66.6666666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.3333333333%}.offset-md-11{margin-left:91.6666666667%}}@media(min-width:1264px){.col-lg{flex-basis:0;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-lg-auto{-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{-webkit-box-flex:0;flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{-webkit-box-flex:0;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-lg-4{-webkit-box-flex:0;flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{-webkit-box-flex:0;flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-lg-7{-webkit-box-flex:0;flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{-webkit-box-flex:0;flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-lg-10{-webkit-box-flex:0;flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{-webkit-box-flex:0;flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.3333333333%}.offset-lg-2{margin-left:16.6666666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.3333333333%}.offset-lg-5{margin-left:41.6666666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.3333333333%}.offset-lg-8{margin-left:66.6666666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.3333333333%}.offset-lg-11{margin-left:91.6666666667%}}@media(min-width:1904px){.col-xl{flex-basis:0;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-xl-auto{-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{-webkit-box-flex:0;flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{-webkit-box-flex:0;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-xl-4{-webkit-box-flex:0;flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{-webkit-box-flex:0;flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-xl-7{-webkit-box-flex:0;flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{-webkit-box-flex:0;flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-xl-10{-webkit-box-flex:0;flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{-webkit-box-flex:0;flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.3333333333%}.offset-xl-2{margin-left:16.6666666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.3333333333%}.offset-xl-5{margin-left:41.6666666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.3333333333%}.offset-xl-8{margin-left:66.6666666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.3333333333%}.offset-xl-11{margin-left:91.6666666667%}}",""])},307:function(t,e,l){var content=l(315);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(11).default)("f8897072",content,!0,{sourceMap:!1})},308:function(t,e,l){"use strict";l(60),l(6),l(5),l(9),l(165),l(304);var o=l(303),f=l(305);e.a=Object(o.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var l,o=e.props,data=e.data,x=e.children,r=data.attrs;return r&&(data.attrs={},l=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(f.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(l||[])}),x)}})},314:function(t,e,l){"use strict";var o=l(307);l.n(o).a},315:function(t,e,l){(t.exports=l(10)(!1)).push([t.i,".introduction[data-v-0fe5f541]{max-width:650px;width:70%;margin:auto}.puppy-pictures[data-v-0fe5f541]{display:-webkit-box;display:flex}.img-circle[data-v-0fe5f541]{border-radius:50%}@media (min-width:800px){.img-circle[data-v-0fe5f541]{width:200px!important}}",""])},335:function(t,e,l){"use strict";l.r(e);var o={data:function(){return{}}},f=(l(314),l(55)),x=l(74),r=l.n(x),c=l(164),n=l(308),m=l(101),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",[l("v-img",{staticClass:"mx-auto img-circle",attrs:{src:"main-image.jpg",width:"150px",height:"150px",contain:"",alt:"My wife and I"}}),t._v(" "),l("br"),t._v(" "),l("div",{staticClass:"introduction"},[l("p",[t._v("\n      Welcome!"),l("br"),l("br"),t._v("My name is Zach. I am a software engineer currently developing for Leidos in Harrisburg, PA. With almost 3 years of experience, I have primarily worked with software from the healthcare and military sectors."),l("br"),t._v("If you're interested in my work experience,\n      "),l("v-btn",{attrs:{href:"../ZacharyBairdResume.pdf",target:"_blank",color:"primary",small:"",text:""}},[t._v("\n        see my resume!\n      ")])],1),t._v(" "),l("p",[t._v("\n      In my personal time, I take a serious interest in self-investment and open-source development. If I'm not working on a project for myself, I'm either tutoring on The Odin Project or spending time with my wife and 2 dogs; Kona and Chai.\n      "),l("br"),t._v("\n      If you want to see some personal projects,\n      "),l("v-btn",{attrs:{href:"/projects",target:"_blank",color:"primary",small:"",text:""}},[t._v("\n        click here!\n      ")])],1)]),t._v(" "),l("div",{staticClass:"introduction my-5"},[l("h2",{staticClass:"font-weight-regular text-center mb-2"},[t._v("\n      Kona & Chai\n    ")]),t._v(" "),l("div",{staticClass:"puppy-pictures"},[l("v-img",{staticClass:"mx-auto img-circle",attrs:{src:"Kona.jpg",height:"150px",width:"150px",contain:"",alt:"Kona"}}),t._v(" "),l("v-img",{staticClass:"mx-auto img-circle",attrs:{src:"Chai.jpg",height:"150px",width:"150px",contain:"",alt:"Chai"}})],1)])],1)}),[],!1,null,"0fe5f541",null);e.default=component.exports;r()(component,{VBtn:c.a,VContainer:n.a,VImg:m.a})}}]);