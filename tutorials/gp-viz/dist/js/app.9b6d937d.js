(function(t){function e(e){for(var i,c,a=e[0],s=e[1],u=e[2],d=0,f=[];d<a.length;d++)c=a[d],r[c]&&f.push(r[c][0]),r[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},o=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"0f91":function(t,e,n){},"155b":function(t,e,n){"use strict";var i=n("0f91"),r=n.n(i);r.a},"3eb5":function(t,e,n){"use strict";var i=n("8452"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("GenViz")},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"genviz"},[n("GridViz",{attrs:{traces:t.traces,info:t.info}})],1)},a=[],s=(n("34ef"),n("6b54"),n("a481"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Traces")]),n("div",{attrs:{id:"traces"}},t._l(t.traces,function(e,i){return n("div",{key:i},[n("Trace",{attrs:{trace:e,info:t.info,size:t.traceSize,tId:i}})],1)}),0)])}),u=[],l=(n("ac6a"),n("456d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("svg",{attrs:{height:t.size.w,width:t.size.w}},[t._l(t.points,function(e,i){return n("circle",{key:i,attrs:{cx:t.xLogicalToPixel(e.x),cy:t.yLogicalToPixel(e.y),r:"2",fill:"rgba(0,0,0,0.5)"}})}),t._l(t.curvePoints,function(t,e){return n("polyline",{key:e,style:"fill:none;stroke:rgba(0,200,0,0.5);stroke-width:1",attrs:{points:t}})})],2)])}),d=[],f=n("2909"),h={name:"Trace",props:["trace","info","size","tId"],computed:{paddingPixels:function(){return.1*this.size.w},actualSize:function(){return this.size.w-2*this.paddingPixels},minX:function(){return Math.min.apply(Math,Object(f["a"])(this.trace["curveXs"]))},minY:function(){return Math.min.apply(Math,Object(f["a"])(this.trace["curveYs"][0]))},maxX:function(){return Math.max.apply(Math,Object(f["a"])(this.trace["curveXs"]))},maxY:function(){return Math.max.apply(Math,Object(f["a"])(this.trace["curveYs"][0]))},colors:function(){return["red","blue","green","cyan","orange","purple","lightblue","lightgreen","darkred","darkgreen","pink"]},points:function(){var t=this;return this.info[0].map(function(e,n){return{x:e,y:t.trace["y-coords"][n]}})},curvePoints:function(){var t=this;return this.trace["curveYs"].map(function(e,n){return t.trace["curveXs"].map(function(n,i){return"".concat(t.xLogicalToPixel(n),", ").concat(t.yLogicalToPixel(e[i]))}).join(" ")})}},methods:{xLogicalToPixel:function(t){return this.paddingPixels+this.actualSize*((t-this.minX)/(this.maxX-this.minX))},yLogicalToPixel:function(t){return this.size.w-this.paddingPixels-this.actualSize*((t-this.minY)/(this.maxY-this.minY))},xPixelToLogical:function(t){return(t-this.paddingPixels)/this.actualSize*(this.maxX-this.minX)+this.minX},stdLogicalToPixel:function(t){return t/(this.maxY-this.minY)*this.actualSize}}},p=h,w=(n("155b"),n("2877")),v=Object(w["a"])(p,l,d,!1,null,"e47e7d44",null);v.options.__file="Trace.vue";var g=v.exports,m={name:"GridViz",components:{Trace:g},data:function(){return{windowSize:{height:window.innerHeight,width:window.innerWidth}}},props:["traces","info"],computed:{traceSize:function(){var t=Object.keys(this.traces).length,e=t<5?t:5,n=Math.ceil(t/e);return{h:this.windowSize.height/n,w:Math.min(500,(this.windowSize.width-10)/e)}}},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("resize",function(){t.windowSize={height:window.innerHeight,width:window.innerWidth}})})}},b=m,x=(n("3eb5"),n("5d9b"),Object(w["a"])(b,s,u,!1,null,"678d3a0d",null));x.options.__file="GridViz.vue";var y=x.exports;function z(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}window.clientId=z(),window.vizId=window.location.pathname.replace(/\//g,""),window.socket=new WebSocket("ws://"+window.location.hostname+":"+window.location.port),window.onbeforeunload=function(){window.socket.send(JSON.stringify({clientId:window.clientId,vizId:window.vizId,action:"disconnect"})),window.socket.close()},window.getCSS=function(){for(var t=[],e=0;e<document.styleSheets.length;e++)for(var n=document.styleSheets[e],i=("cssRules"in n?n.cssRules:n.rules),r=0;r<i.length;r++){var o=i[r];"cssText"in o?t.push(o.cssText):t.push(o.selectorText+" {\n"+o.style.cssText+"\n}\n")}return t.join("\n")};var T={name:"GenViz",components:{GridViz:y},data:function(){return{traces:{},info:{}}},methods:{initialize:function(t,e){this.info=t,this.traces=e},putTrace:function(t,e){this.$set(this.traces,t,e)},removeTrace:function(t){this.$delete(this.traces,t)},sendHTML:function(){var t=this.$refs["genviz"].innerHTML+"<style>".concat(window.getCSS(),"</style>");window.socket.send(JSON.stringify({clientId:window.clientId,vizId:window.vizId,action:"save",content:t}))}},mounted:function(){var t=this;window.socket.onopen=function(){window.socket.onmessage=function(e){var n=e.data,i=JSON.parse(n);switch(i.action){case"initialize":t.initialize(i.info,i.traces);break;case"putTrace":t.putTrace(i.tId,i.t);break;case"removeTrace":t.removeTrace(i.tId);break;case"saveHTML":t.sendHTML();break}},window.socket.send(JSON.stringify({clientId:window.clientId,vizId:window.vizId,action:"connect"}))}}},S=T,_=Object(w["a"])(S,c,a,!1,null,null,null);_.options.__file="GenViz.vue";var k=_.exports,O={components:{GenViz:k}},P=O,j=(n("034f"),Object(w["a"])(P,r,o,!1,null,null,null));j.options.__file="App.vue";var I=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(I)}}).$mount("#app")},"5d9b":function(t,e,n){"use strict";var i=n("f0cb"),r=n.n(i);r.a},"64a9":function(t,e,n){},8452:function(t,e,n){},f0cb:function(t,e,n){}});
//# sourceMappingURL=app.9b6d937d.js.map