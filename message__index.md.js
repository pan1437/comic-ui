(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"+pnj":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};a["a"]=function(e){var a=e.identifier,t=e.export,i=Object(l["useApiData"])(a),m=Object(n["useContext"])(l["context"]),s=m.locale,o=/^zh|cn$/i.test(s)?c["zh-CN"]:c["en-US"];return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement("table",{style:{marginTop:24}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,o.name),r.a.createElement("th",null,o.description),r.a.createElement("th",null,o.type),r.a.createElement("th",null,o.default))),r.a.createElement("tbody",null,i[t].map((function(e){return r.a.createElement("tr",{key:e.identifier},r.a.createElement("td",null,e.identifier),r.a.createElement("td",null,e.description||"--"),r.a.createElement("td",null,r.a.createElement("code",null,e.type)),r.a.createElement("td",null,r.a.createElement("code",null,e.default||e.required&&o.required||"--")))})))))}},"9kvl":function(e,a,t){"use strict";var n=t("FfOG");t.d(a,"a",(function(){return n["b"]}));t("bCY9")},x8z3:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("dEAq"),c=t("+pnj"),i=t("Zxc8"),m=r.a.memo((e=>{var a=e.demos,t=a["message-basic"].component,n=a["message-type"].component,m=a["message-duration"].component,s=a["message-callback"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"message-\u5168\u5c40\u63d0\u793a"},r.a.createElement(l["AnchorLink"],{to:"#message-\u5168\u5c40\u63d0\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Message \u5168\u5c40\u63d0\u793a"),r.a.createElement("h6",{id:"\u5168\u5c40\u5c55\u793a\u64cd\u4f5c\u53cd\u9988\u4fe1\u606f"},r.a.createElement(l["AnchorLink"],{to:"#\u5168\u5c40\u5c55\u793a\u64cd\u4f5c\u53cd\u9988\u4fe1\u606f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5168\u5c40\u5c55\u793a\u64cd\u4f5c\u53cd\u9988\u4fe1\u606f\u3002"),r.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(i["default"],a["message-basic"].previewerProps,r.a.createElement(t,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u63d0\u793a\u7c7b\u578b"},r.a.createElement(l["AnchorLink"],{to:"#\u63d0\u793a\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u63d0\u793a\u7c7b\u578b")),r.a.createElement(i["default"],a["message-type"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u5ef6\u65f6"},r.a.createElement(l["AnchorLink"],{to:"#\u5ef6\u65f6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5ef6\u65f6")),r.a.createElement(i["default"],a["message-duration"].previewerProps,r.a.createElement(m,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u6d88\u5931\u56de\u8c03"},r.a.createElement(l["AnchorLink"],{to:"#\u6d88\u5931\u56de\u8c03","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6d88\u5931\u56de\u8c03")),r.a.createElement(i["default"],a["message-callback"].previewerProps,r.a.createElement(s,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{src:"./message.tsx",identifier:"message",export:"default"}))))}));a["default"]=e=>{var a=r.a.useContext(l["context"]),t=a.demos;return r.a.useEffect((()=>{var a;(null===e||void 0===e||null===(a=e.location)||void 0===a?void 0:a.hash)&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(m,{demos:t})}}}]);