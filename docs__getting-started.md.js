(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{VCHF:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),r=t("dEAq"),c=t("H1Ra"),l=o.a.memo((e=>{e.demos;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"\u5feb\u901f\u4e0a\u624b"},o.a.createElement(r["AnchorLink"],{to:"#\u5feb\u901f\u4e0a\u624b","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5feb\u901f\u4e0a\u624b"),o.a.createElement("h2",{id:"\u5b89\u88c5"},o.a.createElement(r["AnchorLink"],{to:"#\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),o.a.createElement("p",null,o.a.createElement("strong",null,"\u4f7f\u7528 npm \u6216 yarn \u5b89\u88c5")),o.a.createElement(c["a"],{code:"npm install comic-ui",lang:"shell"}),o.a.createElement(c["a"],{code:"yarn add comic-ui",lang:"shell"}),o.a.createElement("h2",{id:"\u793a\u4f8b"},o.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),o.a.createElement(c["a"],{code:"import { createRoot } from 'react-dom/client';\nconst container = document.getElementById('app')\nconst root = createRoot(container);\n\nimport Button from 'comic-ui/es/button'; // \u624b\u52a8\u6309\u9700\u52a0\u8f7d js\nimport 'comic-ui/es/button/style'; // \u624b\u52a8\u6309\u9700\u52a0\u8f7d less\n\nroot.render(<Button type=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Button>);",lang:"js"}),o.a.createElement("h3",{id:"\u81ea\u52a8\u6309\u9700\u52a0\u8f7d"},o.a.createElement(r["AnchorLink"],{to:"#\u81ea\u52a8\u6309\u9700\u52a0\u8f7d","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u52a8\u6309\u9700\u52a0\u8f7d"),o.a.createElement("p",null,"\u4f7f\u7528 ",o.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/babel-plugin-import"},"babel-plugin-import ")," \u4f18\u5316\u5f15\u5165\u65b9\u5f0f\uff0c\u5982\u4e0b\uff1a"),o.a.createElement(c["a"],{code:"import { createRoot } from 'react-dom/client';\nconst container = document.getElementById('app')\nconst root = createRoot(container);\n\nimport { Button } from 'comic-ui'; // \u4e0e\u4e0a\u8ff0\u793a\u4f8b\u7b49\u4ef7\n\nroot.render(<Button type=\"primary\">\u8fd9\u662f\u4e00\u4e2a\u6309\u94ae</Button>);",lang:"js"}),o.a.createElement("p",null,"\u5b89\u88c5 ",o.a.createElement("code",null,"babel-plugin-import")),o.a.createElement(c["a"],{code:"yarn add babel-plugin-import --dev",lang:"shell"}),o.a.createElement("p",null,"\u914d\u7f6e",o.a.createElement("code",null,".babelrc")," \u6216 ",o.a.createElement("code",null,"babel-loader")),o.a.createElement(c["a"],{code:'{\n  "plugins": [\n    [\n      "import",\n      {\n        "libraryName": "comic-ui",\n        "libraryDirectory": "esm", // default: lib\n        "style": true // or \'css\'\n      }\n    ]\n  ]\n}',lang:"json"})))}));n["default"]=e=>{var n=o.a.useContext(r["context"]),t=n.demos;return o.a.useEffect((()=>{var n;(null===e||void 0===e||null===(n=e.location)||void 0===n?void 0:n.hash)&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(l,{demos:t})}}}]);