(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"+pnj":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("dEAq"),i={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,a=e.export,c=Object(l["useApiData"])(t),o=Object(n["useContext"])(l["context"]),d=o.locale,m=/^zh|cn$/i.test(d)?i["zh-CN"]:i["en-US"];return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("table",{style:{marginTop:24}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,m.name),r.a.createElement("th",null,m.description),r.a.createElement("th",null,m.type),r.a.createElement("th",null,m.default))),r.a.createElement("tbody",null,c[a].map((function(e){return r.a.createElement("tr",{key:e.identifier},r.a.createElement("td",null,e.identifier),r.a.createElement("td",null,e.description||"--"),r.a.createElement("td",null,r.a.createElement("code",null,e.type)),r.a.createElement("td",null,r.a.createElement("code",null,e.default||e.required&&m.required||"--")))})))))}},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},vgwI:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("dEAq"),i=a("+pnj"),c=a("Zxc8"),o=r.a.memo((e=>{var t=e.demos,a=t["grid-basic"].component,n=t["grid-gutter"].component,o=t["grid-wrap"].component,d=t["grid-align"].component,m=t["grid-justify"].component,s=t["grid-offset"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"grid-\u6805\u683c"},r.a.createElement(l["AnchorLink"],{to:"#grid-\u6805\u683c","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Grid \u6805\u683c"),r.a.createElement("h6",{id:"24-\u6805\u683c\u7cfb\u7edf"},r.a.createElement(l["AnchorLink"],{to:"#24-\u6805\u683c\u7cfb\u7edf","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"24 \u6805\u683c\u7cfb\u7edf"),r.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(c["default"],t["grid-basic"].previewerProps,r.a.createElement(a,null)),r.a.createElement(c["default"],t["grid-gutter"].previewerProps,r.a.createElement(n,null)),r.a.createElement(c["default"],t["grid-wrap"].previewerProps,r.a.createElement(o,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u5bf9\u9f50\u65b9\u5f0f"},r.a.createElement(l["AnchorLink"],{to:"#\u5bf9\u9f50\u65b9\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5bf9\u9f50\u65b9\u5f0f")),r.a.createElement(c["default"],t["grid-align"].previewerProps,r.a.createElement(d,null)),r.a.createElement(c["default"],t["grid-justify"].previewerProps,r.a.createElement(m,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u5217\u504f\u79fb"},r.a.createElement(l["AnchorLink"],{to:"#\u5217\u504f\u79fb","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5217\u504f\u79fb")),r.a.createElement(c["default"],t["grid-offset"].previewerProps,r.a.createElement(s,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement("h3",{id:"api-row"},r.a.createElement(l["AnchorLink"],{to:"#api-row","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Row"),r.a.createElement(i["a"],{src:"./index.tsx",identifier:"grid",export:"Row"}),r.a.createElement("h3",{id:"api-col"},r.a.createElement(l["AnchorLink"],{to:"#api-col","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Col"),r.a.createElement(i["a"],{src:"./index.tsx",identifier:"grid",export:"Col"}))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),a=t.demos;return r.a.useEffect((()=>{var t;(null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.hash)&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:a})}}}]);