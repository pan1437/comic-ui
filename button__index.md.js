(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"+pnj":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,a=e.export,i=Object(r["useApiData"])(t),o=Object(n["useContext"])(r["context"]),m=o.locale,d=/^zh|cn$/i.test(m)?c["zh-CN"]:c["en-US"];return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement("table",{style:{marginTop:24}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,d.name),l.a.createElement("th",null,d.description),l.a.createElement("th",null,d.type),l.a.createElement("th",null,d.default))),l.a.createElement("tbody",null,i[a].map((function(e){return l.a.createElement("tr",{key:e.identifier},l.a.createElement("td",null,e.identifier),l.a.createElement("td",null,e.description||"--"),l.a.createElement("td",null,l.a.createElement("code",null,e.type)),l.a.createElement("td",null,l.a.createElement("code",null,e.default||e.required&&d.required||"--")))})))))}},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Waql:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("+pnj"),i=a("Zxc8"),o=l.a.memo((e=>{var t=e.demos,a=t["button-basic"].component,n=t["button-disabled"].component,o=t["button-size"].component,m=t["button-group"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"button-\u6309\u94ae"},l.a.createElement(r["AnchorLink"],{to:"#button-\u6309\u94ae","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Button \u6309\u94ae"),l.a.createElement("h6",{id:"\u6309\u94ae\u7528\u4e8e\u5f00\u59cb\u4e00\u4e2a\u5373\u65f6\u64cd\u4f5c"},l.a.createElement(r["AnchorLink"],{to:"#\u6309\u94ae\u7528\u4e8e\u5f00\u59cb\u4e00\u4e2a\u5373\u65f6\u64cd\u4f5c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6309\u94ae\u7528\u4e8e\u5f00\u59cb\u4e00\u4e2a\u5373\u65f6\u64cd\u4f5c\u3002"),l.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.a.createElement("h6",{id:"\u6807\u8bb0\u4e86\u4e00\u4e2a\u6216\u5c01\u88c5\u4e00\u7ec4\u64cd\u4f5c\u547d\u4ee4\u54cd\u5e94\u7528\u6237\u70b9\u51fb\u884c\u4e3a\u89e6\u53d1\u76f8\u5e94\u7684\u4e1a\u52a1\u903b\u8f91"},l.a.createElement(r["AnchorLink"],{to:"#\u6807\u8bb0\u4e86\u4e00\u4e2a\u6216\u5c01\u88c5\u4e00\u7ec4\u64cd\u4f5c\u547d\u4ee4\u54cd\u5e94\u7528\u6237\u70b9\u51fb\u884c\u4e3a\u89e6\u53d1\u76f8\u5e94\u7684\u4e1a\u52a1\u903b\u8f91","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6807\u8bb0\u4e86\u4e00\u4e2a\uff08\u6216\u5c01\u88c5\u4e00\u7ec4\uff09\u64cd\u4f5c\u547d\u4ee4\uff0c\u54cd\u5e94\u7528\u6237\u70b9\u51fb\u884c\u4e3a\uff0c\u89e6\u53d1\u76f8\u5e94\u7684\u4e1a\u52a1\u903b\u8f91\u3002"),l.a.createElement("ol",null,l.a.createElement("li",null,"Comic UI \u4e2d\u6211\u4eec\u63d0\u4f9b\u4e86\u516d\u79cd\u7c7b\u578b\u6309\u94ae\uff1a",l.a.createElement("ul",null,l.a.createElement("li",null,"\u4e3b\u6309\u94ae\uff1a\u7528\u4e8e\u4e3b\u884c\u52a8\u70b9\uff0c\u4e00\u4e2a\u64cd\u4f5c\u533a\u57df\u53ea\u80fd\u6709\u4e00\u4e2a\u4e3b\u6309\u94ae\u3002"),l.a.createElement("li",null,"\u6210\u529f\u6309\u94ae\uff1a\u5e38\u7528\u4e8e\u6210\u529f\u4e4b\u7c7b\u7684\u64cd\u4f5c\u3002"),l.a.createElement("li",null,"\u8b66\u544a\u6309\u94ae\uff1a\u5e38\u7528\u4e8e\u5f39\u51fa\u544a\u8b66\u4fe1\u606f\u3002"),l.a.createElement("li",null,"\u5371\u9669\u6309\u94ae\uff1a\u5e38\u7528\u4e8e\u5220\u9664\u64cd\u4f5c \u9700\u8981\u4e8c\u6b21\u786e\u8ba4\u3002"),l.a.createElement("li",null,"\u6587\u5b57\u6309\u94ae\uff1a\u6734\u7d20\u7684\u6587\u5b57\u6309\u94ae\u3002"),l.a.createElement("li",null,"\u94fe\u63a5\u6309\u94ae\uff1a\u901a\u5e38\u7528\u4e8e\u8df3\u8f6c\u94fe\u63a5\u4f7f\u7528\u3002")))),l.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(i["default"],t["button-basic"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u7981\u7528\u72b6\u6001"},l.a.createElement(r["AnchorLink"],{to:"#\u7981\u7528\u72b6\u6001","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7981\u7528\u72b6\u6001"),l.a.createElement("h6",{id:"\u6309\u94ae\u4e0d\u53ef\u7528\u72b6\u6001"},l.a.createElement(r["AnchorLink"],{to:"#\u6309\u94ae\u4e0d\u53ef\u7528\u72b6\u6001","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6309\u94ae\u4e0d\u53ef\u7528\u72b6\u6001")),l.a.createElement(i["default"],t["button-disabled"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u6309\u94ae\u5c3a\u5bf8"},l.a.createElement(r["AnchorLink"],{to:"#\u6309\u94ae\u5c3a\u5bf8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6309\u94ae\u5c3a\u5bf8"),l.a.createElement("h6",{id:"comic-\u7ec4\u4ef6\u63d0\u4f9b\u9664\u4e86\u9ed8\u8ba4\u503c\u4ee5\u5916\u7684\u4e09\u79cd\u5c3a\u5bf8"},l.a.createElement(r["AnchorLink"],{to:"#comic-\u7ec4\u4ef6\u63d0\u4f9b\u9664\u4e86\u9ed8\u8ba4\u503c\u4ee5\u5916\u7684\u4e09\u79cd\u5c3a\u5bf8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Comic \u7ec4\u4ef6\u63d0\u4f9b\u9664\u4e86\u9ed8\u8ba4\u503c\u4ee5\u5916\u7684\u4e09\u79cd\u5c3a\u5bf8")),l.a.createElement(i["default"],t["button-size"].previewerProps,l.a.createElement(o,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u6309\u94ae\u7ec4"},l.a.createElement(r["AnchorLink"],{to:"#\u6309\u94ae\u7ec4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6309\u94ae\u7ec4"),l.a.createElement("h6",{id:"\u4ee5\u6309\u94ae\u7ec4\u7684\u65b9\u5f0f\u51fa\u73b0\u5e38\u7528\u4e8e\u591a\u9879\u7c7b\u4f3c\u64cd\u4f5c"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee5\u6309\u94ae\u7ec4\u7684\u65b9\u5f0f\u51fa\u73b0\u5e38\u7528\u4e8e\u591a\u9879\u7c7b\u4f3c\u64cd\u4f5c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee5\u6309\u94ae\u7ec4\u7684\u65b9\u5f0f\u51fa\u73b0\uff0c\u5e38\u7528\u4e8e\u591a\u9879\u7c7b\u4f3c\u64cd\u4f5c")),l.a.createElement(i["default"],t["button-group"].previewerProps,l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(c["a"],{src:"./button.tsx",identifier:"button",export:"default"}))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;(null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.hash)&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:a})}}}]);