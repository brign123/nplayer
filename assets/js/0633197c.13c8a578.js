(window.webpackJsonp=window.webpackJsonp||[]).push([[4,11,16],{108:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(2),c=a(61),r=a.n(c),o=a(101);t.a=e=>{const{to:t,children:a,className:n}=e,c=Object(s.k)();return i.a.createElement("button",{className:Object(o.a)(r.a.ButtonContainer,n),onClick:()=>{t.startsWith("http")?window.open(t,"_blank"):c.push(t)}},a)}},56:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(62),c=a.n(s);t.default=()=>i.a.createElement("div",{className:c.a.MouseContainer},i.a.createElement("div",{className:c.a.Mouse},i.a.createElement("span",{className:c.a.MouseWheel})))},57:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(63),c=a.n(s);t.default=()=>i.a.createElement("div",{className:c.a.Container},i.a.createElement("img",{className:c.a.Img,src:"img/preview.jpg"}),i.a.createElement("div",{className:c.a.Text},"\u70b9\u51fb \ud83d\udc46 \u5728\u7ebf\u9884\u89c8"))},66:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(16),c=a(108),r=a(155),o=a(2),l=a(68),d=a.n(l),m=a(101);var u=e=>{const{to:t,className:a}=e,n=Object(o.k)();return i.a.createElement("button",{className:Object(m.a)(d.a.ButtonContainer,a),onClick:()=>{t.startsWith("http")?window.open(t,"_blank"):n.push(t)}},i.a.createElement(r.a,{className:d.a.GithubIcon}),i.a.createElement("div",null,"GITHUB"))},w=a(69),h=a.n(w);var v=a(56),E=a(57);t.default=()=>{const{siteConfig:e}=Object(s.default)(),{windowHeight:t}=function(){const[e,t]=Object(n.useState)({windowWidth:void 0,windowHeight:void 0,scrollHeight:void 0});return Object(n.useEffect)((()=>{function e(){t({windowWidth:window.innerWidth,windowHeight:window.innerHeight,scrollHeight:document.documentElement.scrollHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),e}();return i.a.createElement("div",{className:h.a.Container,style:{height:t>800?t:void 0}},i.a.createElement("div",{style:{paddingBottom:"5rem"}},i.a.createElement("div",{className:h.a.HeaderTitle},"RPlayer"),i.a.createElement("div",{className:h.a.DescriptionText},"\u53ef\u5b9a\u5236\u3001\u63d2\u4ef6\u5316\u3001\u7f8e\u89c2\u3001\u5b9e\u7528\u7684\u89c6\u9891\u64ad\u653e\u5668"),i.a.createElement("div",{className:h.a.ButtonContainer},i.a.createElement(c.a,{className:h.a.GetStartedButton,to:"/docs/introduction"},"\u5feb\u901f\u5f00\u59cb"),i.a.createElement(u,{className:h.a.GithubButton,to:e.customFields.githubUrl}))),i.a.createElement(E.default,null),t>900&&t<1200&&i.a.createElement(v.default,null))}}}]);