(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"+pnj":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),c=t("dEAq"),l={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};a["a"]=function(e){var a=e.identifier,t=e.export,i=Object(c["useApiData"])(a),o=Object(n["useContext"])(c["context"]),d=o.locale,m=/^zh|cn$/i.test(d)?l["zh-CN"]:l["en-US"];return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement("table",{style:{marginTop:24}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,m.name),r.a.createElement("th",null,m.description),r.a.createElement("th",null,m.type),r.a.createElement("th",null,m.default))),r.a.createElement("tbody",null,i[t].map((function(e){return r.a.createElement("tr",{key:e.identifier},r.a.createElement("td",null,e.identifier),r.a.createElement("td",null,e.description||"--"),r.a.createElement("td",null,r.a.createElement("code",null,e.type)),r.a.createElement("td",null,r.a.createElement("code",null,e.default||e.required&&m.required||"--")))})))))}},"9kvl":function(e,a,t){"use strict";var n=t("FfOG");t.d(a,"a",(function(){return n["b"]}));t("bCY9")},"m/zN":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("dEAq"),l=t("+pnj"),i=t("Zxc8"),o=r.a.memo((e=>{var a=e.demos,t=a["scrape-card-basic"].component,n=a["scrape-card-round"].component,o=a["scrape-card-image"].component,d=a["scrape-card-color"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"scrapecard-\u522e\u522e\u4e50"},r.a.createElement(c["AnchorLink"],{to:"#scrapecard-\u522e\u522e\u4e50","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"ScrapeCard \u522e\u522e\u4e50"),r.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(c["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(i["default"],a["scrape-card-basic"].previewerProps,r.a.createElement(t,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u5706\u89d2"},r.a.createElement(c["AnchorLink"],{to:"#\u5706\u89d2","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5706\u89d2")),r.a.createElement(i["default"],a["scrape-card-round"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h6",{id:"\u540c\u65f6\u4e5f\u80fd\u5d4c\u5957\u56fe\u7247\u4f7f\u7528"},r.a.createElement(c["AnchorLink"],{to:"#\u540c\u65f6\u4e5f\u80fd\u5d4c\u5957\u56fe\u7247\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u540c\u65f6\u4e5f\u80fd\u5d4c\u5957\u56fe\u7247\u4f7f\u7528")),r.a.createElement(i["default"],a["scrape-card-image"].previewerProps,r.a.createElement(o,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u989c\u8272"},r.a.createElement(c["AnchorLink"],{to:"#\u989c\u8272","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u989c\u8272"),r.a.createElement("h6",{id:"comic-ui-\u53ef\u4ee5\u901a\u8fc7-color-\u5c5e\u6027\u91cd\u65b0\u5236\u5b9a\u753b\u5e03\u989c\u8272\u54e6"},r.a.createElement(c["AnchorLink"],{to:"#comic-ui-\u53ef\u4ee5\u901a\u8fc7-color-\u5c5e\u6027\u91cd\u65b0\u5236\u5b9a\u753b\u5e03\u989c\u8272\u54e6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"comic UI \u53ef\u4ee5\u901a\u8fc7 color \u5c5e\u6027\u91cd\u65b0\u5236\u5b9a\u753b\u5e03\u989c\u8272\u54e6")),r.a.createElement(i["default"],a["scrape-card-color"].previewerProps,r.a.createElement(d,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(c["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement("h3",{id:"api-scrapecard"},r.a.createElement(c["AnchorLink"],{to:"#api-scrapecard","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"ScrapeCard"),r.a.createElement(l["a"],{src:"./index.tsx",identifier:"scrape-card",export:"ScrapeCard"}))))}));a["default"]=e=>{var a=r.a.useContext(c["context"]),t=a.demos;return r.a.useEffect((()=>{var a;(null===e||void 0===e||null===(a=e.location)||void 0===a?void 0:a.hash)&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:t})}}}]);