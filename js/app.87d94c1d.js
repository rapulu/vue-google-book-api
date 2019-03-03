(function(t){function e(e){for(var s,a,o=e[0],l=e[1],c=e[2],f=0,p=[];f<o.length;f++)a=o[f],i[a]&&p.push(i[a][0]),i[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},i={app:0},r=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/bookthopia/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),i=n.n(s);i.a},"0782":function(t,e,n){"use strict";var s=n("c366"),i=n.n(s);i.a},"360b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Search")],1)},r=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col text-center"},[t._m(0),s("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.search()}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.search,expression:"form.search"}],staticClass:"form-control",attrs:{type:"text",id:"SearchInput"},domProps:{value:t.form.search},on:{input:function(e){e.target.composing||t.$set(t.form,"search",e.target.value)}}})]),s("button",{staticClass:"btn btn-secondary",attrs:{type:"submit",disabled:t.isDisabled}},[t._v("\n                  Search\n                ")])])])]),t.isApiCall?s("div",{staticClass:"row"},[t._l(t.items,function(e){return t.totalItems>0?s("SearchResults",{attrs:{item:e}}):t._e()}),0==t.totalItems?s("span",{staticClass:"iniMessage"},[s("h4",[t._v("No Book Found.")]),t._v("\n      Try searching for another book.\n    ")]):t._e()],2):t._e(),t.isApiCall?t._e():s("div",{staticClass:"row"},[t.isLoading?s("span",{staticClass:"spinner"},[s("img",{attrs:{src:n("6324")}})]):t._e(),t.isLoading?t._e():s("span",{staticClass:"iniMessage"},[t._v("\n      Nothing Here Yet - Try Searching For A Book!\n    ")])]),t.error?s("div",{staticClass:"row"},[t.isLoading?t._e():s("span",{staticClass:"iniMessage"},[t._v("\n      Something terribly went wrong\n    ")])]):t._e()])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"headerTitle"},[n("h1",[t._v("BOOKTHOPIA")])])}],l=(n("386d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-lg-6 col-sm-12",attrs:{id:"BookDisplay"}},[n("div",{staticClass:"media"},[t.image?n("img",{staticClass:"media-left",attrs:{src:t.image.thumbnail}}):t._e(),n("div",{staticClass:"media-body"},[n("div",{staticClass:"card-title"},[t._v(t._s(t.title))]),n("div",{staticClass:"card-text book-author"},[t._v("\n        By: "),t._l(t.authors,function(e){return n("span",[t._v(t._s(e)+" ")])})],2),n("div",{staticClass:"card-text book-publisher"},[t._v("Published By: "+t._s(t.publisher))]),n("button",{staticClass:"btn btn-link",attrs:{type:"button",href:t.link,target:"_blank"}},[t._v("\n        More\n      ")])])])])}),c=[],u={props:["item"],computed:{image:function(){return this.item.volumeInfo.imageLinks},title:function(){return this.item.volumeInfo.title},authors:function(){return this.item.volumeInfo.authors},publisher:function(){return this.item.volumeInfo.publisher},link:function(){return this.item.volumeInfo.previewLink}}},f=u,p=(n("ad06"),n("2877")),d=Object(p["a"])(f,l,c,!1,null,null,null),m=d.exports,h={data:function(){return{form:{search:""},items:[],totalItems:0,isApiCall:!1,isLoading:!1,error:!1}},methods:{search:function(){var t=this;this.isLoading=!0,this.$axios.get("/volumes?q="+this.form.search).then(function(e){t.isApiCall=!0,t.isLoading=!1,t.items=e.data.items,t.totalItems=e.data.totalItems,console.log(e.data.items)}).catch(function(e){t.isApiCall=!0,t.error=!0,console.log(e)})}},computed:{isDisabled:function(){return!(this.form.search.length>0)&&!this.isLoading}},components:{SearchResults:m}},v=h,b=(n("0782"),Object(p["a"])(v,a,o,!1,null,null,null)),g=b.exports,_={name:"app",components:{Search:g}},y=_,C=(n("034f"),Object(p["a"])(y,i,r,!1,null,null,null)),w=C.exports,k=(n("ab8b"),n("bc3a")),x=n.n(k);s["a"].config.productionTip=!1,x.a.defaults.baseURL="https://www.googleapis.com/books/v1",s["a"].prototype.$axios=x.a,new s["a"]({render:function(t){return t(w)}}).$mount("#app")},6324:function(t,e,n){t.exports=n.p+"img/spinner.5c879ab8.gif"},"64a9":function(t,e,n){},ad06:function(t,e,n){"use strict";var s=n("360b"),i=n.n(s);i.a},c366:function(t,e,n){}});
//# sourceMappingURL=app.87d94c1d.js.map