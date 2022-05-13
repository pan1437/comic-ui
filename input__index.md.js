(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"+pnj":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};a["a"]=function(e){var a=e.identifier,t=e.export,i=Object(l["useApiData"])(a),m=Object(n["useContext"])(l["context"]),o=m.locale,d=/^zh|cn$/i.test(o)?c["zh-CN"]:c["en-US"];return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement("table",{style:{marginTop:24}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,d.name),r.a.createElement("th",null,d.description),r.a.createElement("th",null,d.type),r.a.createElement("th",null,d.default))),r.a.createElement("tbody",null,i[t].map((function(e){return r.a.createElement("tr",{key:e.identifier},r.a.createElement("td",null,e.identifier),r.a.createElement("td",null,e.description||"--"),r.a.createElement("td",null,r.a.createElement("code",null,e.type)),r.a.createElement("td",null,r.a.createElement("code",null,e.default||e.required&&d.required||"--")))})))))}},"9kvl":function(e,a,t){"use strict";var n=t("FfOG");t.d(a,"a",(function(){return n["b"]}));t("bCY9")},YJ7s:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("dEAq"),c=t("+pnj"),i=t("Zxc8"),m=r.a.memo((e=>{var a=e.demos,t=a["input-basic"].component,n=a["input-disabled"].component,m=a["input-size"].component,o=a["input-password"].component,d=a["input-primordial"].component,u=a["input-clear"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"input-\u8f93\u5165\u6846"},r.a.createElement(l["AnchorLink"],{to:"#input-\u8f93\u5165\u6846","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Input \u8f93\u5165\u6846"),r.a.createElement("h6",{id:"\u901a\u8fc7\u9f20\u6807\u6216\u952e\u76d8\u8f93\u5165\u5b57\u7b26"},r.a.createElement(l["AnchorLink"],{to:"#\u901a\u8fc7\u9f20\u6807\u6216\u952e\u76d8\u8f93\u5165\u5b57\u7b26","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u901a\u8fc7\u9f20\u6807\u6216\u952e\u76d8\u8f93\u5165\u5b57\u7b26"),r.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(i["default"],a["input-basic"].previewerProps,r.a.createElement(t,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u7981\u7528\u72b6\u6001"},r.a.createElement(l["AnchorLink"],{to:"#\u7981\u7528\u72b6\u6001","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7981\u7528\u72b6\u6001")),r.a.createElement(i["default"],a["input-disabled"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u5c3a\u5bf8"},r.a.createElement(l["AnchorLink"],{to:"#\u5c3a\u5bf8","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5c3a\u5bf8")),r.a.createElement(i["default"],a["input-size"].previewerProps,r.a.createElement(m,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u5bc6\u7801\u6846"},r.a.createElement(l["AnchorLink"],{to:"#\u5bc6\u7801\u6846","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5bc6\u7801\u6846")),r.a.createElement(i["default"],a["input-password"].previewerProps,r.a.createElement(o,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u66f4\u591a\u5c5e\u6027"},r.a.createElement(l["AnchorLink"],{to:"#\u66f4\u591a\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u66f4\u591a\u5c5e\u6027"),r.a.createElement("h6",{id:"\u66f4\u591a\u5c5e\u6027\u7528\u6cd5-maxlengthreadonly\u76f8\u5173\u4e8b\u4ef6\u7b49\u7b49\u5c5e\u6027"},r.a.createElement(l["AnchorLink"],{to:"#\u66f4\u591a\u5c5e\u6027\u7528\u6cd5-maxlengthreadonly\u76f8\u5173\u4e8b\u4ef6\u7b49\u7b49\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u66f4\u591a\u5c5e\u6027\u7528\u6cd5 maxlength\u3001readOnly\u3001\u76f8\u5173\u4e8b\u4ef6\u7b49\u7b49\u5c5e\u6027")),r.a.createElement(i["default"],a["input-primordial"].previewerProps,r.a.createElement(d,null)),r.a.createElement(i["default"],a["input-clear"].previewerProps,r.a.createElement(u,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{src:"./index.tsx",identifier:"input",export:"default"}))))}));a["default"]=e=>{var a=r.a.useContext(l["context"]),t=a.demos;return r.a.useEffect((()=>{var a;(null===e||void 0===e||null===(a=e.location)||void 0===a?void 0:a.hash)&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(m,{demos:t})}}}]);