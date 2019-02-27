(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],f=0,p=[];f<s.length;f++)o=s[f],a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"0782":function(t,e,n){"use strict";var r=n("c366"),a=n.n(r);a.a},"360b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Search")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"SearchBox"}},[n("div",{staticClass:"SearchForm"},[n("h1",[t._v("Book Search")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.search,expression:"form.search"}],staticClass:"form-control",attrs:{type:"text",id:"SearchInput"},domProps:{value:t.form.search},on:{input:function(e){e.target.composing||t.$set(t.form,"search",e.target.value)}}})]),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Search")])])]),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.items,function(t){return n("SearchResults",{attrs:{item:t}})}),1)])])},s=[],u=(n("386d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-6",attrs:{id:"BookDisplay"}},[n("div",{staticClass:"media"},[t.image?n("img",{staticClass:"media-left",attrs:{src:t.image.thumbnail}}):t._e(),n("div",{staticClass:"media-body"},[n("div",{staticClass:"card-title"},[t._v(t._s(t.title))]),n("div",{staticClass:"card-text"},[t._v("\n        By: "),t._l(t.authors,function(e){return n("span",[t._v(t._s(e)+" ")])})],2),n("div",{staticClass:"card-text"},[t._v("Published By: "+t._s(t.publisher))]),n("a",{staticClass:"btn btn-primary",attrs:{href:t.link,target:"_blank"}},[t._v("More")])])])])}),c=[],l={props:["item"],computed:{image:function(){return this.item.volumeInfo.imageLinks},title:function(){return this.item.volumeInfo.title},authors:function(){return this.item.volumeInfo.authors},publisher:function(){return this.item.volumeInfo.publisher},link:function(){return this.item.volumeInfo.previewLink}}},f=l,p=(n("ad06"),n("2877")),d=Object(p["a"])(f,u,c,!1,null,null,null),m=d.exports,h={data:function(){return{form:{search:""},items:""}},methods:{search:function(){var t=this;this.$axios.get("/volumes?q="+this.form.search).then(function(e){t.items=e.data.items,console.log(e.data.items)}).catch(function(t){console.log(t)})}},components:{SearchResults:m}},v=h,b=(n("0782"),Object(p["a"])(v,o,s,!1,null,null,null)),g=b.exports,_={name:"app",components:{Search:g}},y=_,w=(n("034f"),Object(p["a"])(y,a,i,!1,null,null,null)),x=w.exports,C=(n("ab8b"),n("bc3a")),S=n.n(C);r["a"].config.productionTip=!1,S.a.defaults.baseURL="https://www.googleapis.com/books/v1",r["a"].prototype.$axios=S.a,new r["a"]({render:function(t){return t(x)}}).$mount("#app")},"64a9":function(t,e,n){},ad06:function(t,e,n){"use strict";var r=n("360b"),a=n.n(r);a.a},c366:function(t,e,n){}});
//# sourceMappingURL=app.cc48849f.js.map