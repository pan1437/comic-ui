(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"/7QA":function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return y})),n.d(t,"e",(function(){return N})),n.d(t,"c",(function(){return L})),n.d(t,"d",(function(){return C})),n.d(t,"f",(function(){return A}));var r=n("0Owb");function a(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function c(e,t){if(null==e)return{};var n,r,c=a(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=n("q1tI"),l=n.n(o),i=n("TSYQ"),s=n.n(i),u="comic",d=e=>"".concat(u,"-").concat(e),p=d("btn"),f=e=>{var t=e.children,n=e.type,a=void 0===n?"default":n,o=e.plain,i=e.size,u=e.round,d=e.className,f=c(e,["children","type","plain","size","round","className"]),m=()=>s()(p,{["".concat(p,"-").concat(a)]:!0,["".concat(p,"-").concat(i)]:!!i,["is-plain"]:o,["is-round"]:u},d);return l.a.createElement("button",Object(r["a"])({className:m()},f),t)},m=f,v="comic-btn-group",h=e=>{var t=e.children,n=()=>s()(v);return l.a.createElement("div",{className:n()},t)},y=h;function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=Object(o["createContext"])({}),w=d("row"),j=e=>{var t=e.align,n=e.gutter,a=e.justify,i=e.wrap,u=e.children,d=e.style,p=e.className,f=c(e,["align","gutter","justify","wrap","children","style","className"]),m=()=>s()(w,{["".concat(w,"-").concat(t)]:!!t,["".concat(w,"-").concat(a)]:!!a,["".concat(w,"-no-wrap")]:!i},p),v={};n&&(v.marginLeft=n/-2,v.marginRight=n/-2);var h=Object(o["useMemo"])((()=>({gutter:n})),[n]);return l.a.createElement(O.Provider,{value:h},l.a.createElement("div",Object(r["a"])({className:m(),style:E(E({},v),d)},f),u))},N=j,x=d("col"),P=e=>{var t=e.span,n=e.children,a=e.style,i=e.className,u=e.offset,d=c(e,["span","children","style","className","offset"]),p=Object(o["useContext"])(O),f=p.gutter,m=()=>s()(x,{["".concat(x,"-").concat(t)]:"number"===typeof t&&t>=0,["".concat(x,"-offset-").concat(u)]:"number"===typeof u&&u>=0},i),v={};return f&&f>0&&(v.paddingLeft=f/2,v.paddingRight=f/2),l.a.createElement("div",Object(r["a"])({className:m(),style:E(E({},v),a)},d),n)},L=P,S=d("divider"),C=e=>{var t=e.children,n=e.color,a=e.className,o=e.style,i=e.position,u=e.type,d=void 0===u?"horizontal":u,p=c(e,["children","color","className","style","position","type"]),f=()=>s()(S,{["".concat(S,"-").concat(d)]:!0,["".concat(S,"-with-text")]:"vertical"!==d&&t,["".concat(S,"-with-text-").concat(i)]:"vertical"!==d&&i},a),m={};return n&&(m.borderColor=n),l.a.createElement("div",Object(r["a"])({className:f()},p,{style:E(E({},m),o)}),t&&l.a.createElement("span",{className:"".concat(S,"-inner-text")},t))},D=d("scrape");function k(e,t){var n,r,a,c=0,o=0,l=e;while(null!==l)c+=l.offsetLeft,o+=l.offsetTop,l=l.offsetParent;return"changedTouches"in t?(n=t.changedTouches[0],r=n.pageX,a=n.pageY):(r=t.pageX,a=t.pageY),{x:r-c,y:a-o}}function I(e,t,n,r,a){var c=t;c=c||.5,(c>1||c<0)&&(c=1);for(var o=e.getImageData(0,0,r,a),l=o.data,i=l.length,s=.25*i,u=1,d=0;u<=s;u++)0===l[4*u-1]&&d++;d>s*c&&n.apply(e,[d])}function T(e,t,n,r,a,c){var o=e.getContext("2d");o.globalCompositeOperation="destination-out",o.lineWidth=45,o.lineCap=o.lineJoin="round",o.strokeStyle="rgba(0,0,0,1)",r&&(o.beginPath(),o.moveTo(t+.1,n)),o.lineTo(t,n),o.stroke();var l=e.style;l.lineHeight="1"==l.lineHeight?"1.1":"1",I(o,.5,(function(){}),a,c)}var A=e=>{var t=e.children,n=e.className,a=(e.style,e.width),i=void 0===a?400:a,u=e.height,d=void 0===u?100:u,p=c(e,["children","className","style","width","height"]),f=()=>s()(D,{},n),m=Object(o["createRef"])();Object(o["useEffect"])((()=>{var e=m.current;e.width=i,e.height=d;var t=m.current.getContext("2d"),n=!1;t.fillStyle="#CCC",t.fillRect(0,0,e.width,e.height);var r=function(t){var r=k(e,t);return n=!0,T(e,r.x,r.y,!0,i,d),t.cancelable&&t.preventDefault(),!1},a=function(t){if(!n)return!0;var r=k(e,t);return T(e,r.x,r.y,!1,i,d),t.cancelable&&t.preventDefault(),!1},c=function(e){return!n||(n=!1,e.cancelable&&e.preventDefault(),!1)};e.addEventListener("mousedown",r),e.addEventListener("touchstart",r),window.addEventListener("mousemove",a),window.addEventListener("touchmove",a),window.addEventListener("mouseup",c),window.addEventListener("touchend",c)}),[]);return l.a.createElement("div",{className:f(),style:{width:"".concat(i,"px"),height:"".concat(d,"px")}},l.a.createElement("canvas",Object(r["a"])({className:"".concat(D,"-canvas"),ref:m},p,{width:i,height:d})),t&&l.a.createElement("span",{className:"".concat(D,"-inner-text")},t))}},SvC9:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=n("/7QA");n("oByo");t["default"]=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(c["d"],{color:"indianred"}),a.a.createElement("p",null,"\u4e0d\u7ba1\u4f60\u662f\u5426\u613f\u610f\u76f8\u4fe1\uff0c\u5728\u7f8e\u4e3d\u7684\u6bd4\u57fa\u5c3c\u6d77\u6ee9\uff0c\u6bcf\u4e2a\u5ca9\u6d1e\u4e0b\u9762\uff0c\u90fd\u85cf\u7740\u4e00\u4e2a\u5947\u8ff9"),a.a.createElement(c["d"],{color:"plum"}),a.a.createElement("p",null,"\u5982\u679c\u4f60\u603b\u662f\u8ba9\u4eba\u8e29\u8fc7\u4f60\u7684\u5934\uff0c\u4f60\u6c38\u8fdc\u90fd\u4e0d\u4f1a\u5f97\u5230\u4f60\u60f3\u8981\u7684\u4e1c\u897f"),a.a.createElement(c["d"],{color:"cadetblue"}),a.a.createElement("p",null,"\u6211\u8981\u4e24\u4e2a\u51b0\u6dc7\u6dcb\uff0c\u4e00\u4e2a\u7ed9\u6211\u5403\u4e00\u4e2a\u7ed9\u6211\u7684\u597d\u670b\u53cb\u6d77\u7ef5\u5b9d\u5b9d\u3002"),a.a.createElement(c["d"],{color:"deepskyblue"}))},"T5+R":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=n("/7QA");n("oByo");t["default"]=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(c["d"],null,"\u4e00\u7ea7\u6807\u9898"),a.a.createElement(c["d"],{color:"indianred"},"\u5c45\u4e2d\u6807\u9898"),a.a.createElement(c["d"],{color:"plum",position:"left"},"\u5de6\u6807\u9898"),a.a.createElement(c["d"],{color:"cadetblue",position:"right"},"\u53f3\u6807\u9898"))},TSYQ:function(e,t,n){var r,a;(function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var o=c.apply(null,r);o&&e.push(o)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(c["default"]=c,e.exports=c):(r=[],a=function(){return c}.apply(t,r),void 0===a||(e.exports=a))})()},X2mM:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=n("/7QA");n("oByo");t["default"]=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,"\u6d77\u7ef5\u5b9d\u5b9d"),a.a.createElement(c["d"],{type:"vertical"}),a.a.createElement("span",null,"\u6d3e\u5927\u661f"),a.a.createElement(c["d"],{type:"vertical"}),a.a.createElement("span",null,"\u7ae0\u9c7c\u54e5"),a.a.createElement(c["d"],{type:"vertical"}))},kLIs:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=n("/7QA");n("oByo");t["default"]=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"\u5728\u6211\u4eec\u751f\u547d\u4e2d\u7684\u9ec4\u91d1\u5c81\u6708\uff0c\u4f60\u5374\u6d6a\u8d39\u65f6\u95f4\u53bb\u5439\u6ce1\u6ce1\uff0c\u6211\u4eec\u5e94\u8be5\u6d3b\u5728\u5f53\u4e0b"),a.a.createElement(c["d"],null),a.a.createElement("p",null,"\u867d\u7136\u5e73\u5e38\u4e00\u76f4\u8ba8\u538c\u4f60\uff0c\u53ef\u662f\u5176\u5b9e\u6211\u4e5f\u4e0d\u60f3\u770b\u5230\u4f60\u96be\u8fc7\u7684\u6837\u5b50\uff0c\u7279\u522b\u662f\u56e0\u4e3a\u6211\u7684\u65f6\u5019"))},mLDn:function(e,t,n){},oByo:function(e,t,n){"use strict";n("mLDn")}}]);