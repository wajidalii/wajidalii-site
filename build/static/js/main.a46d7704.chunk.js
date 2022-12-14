(this["webpackJsonpwajidalii-site"]=this["webpackJsonpwajidalii-site"]||[]).push([[1],{19:function(e,t,n){"use strict";var c=n(1),i=n(15),r=n(3),l=n(12),a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),s=a.NODE_ENV,j=a.REACT_APP_GA_TRACKING_ID;"production"===s&&l.a.initialize(j);var o=function(){var e=Object(r.f)().pathname;return Object(c.useEffect)((function(){"production"===s&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},b=n(5),d=n(21),h=[{index:!0,label:"Wajid Ali",path:"/"},{label:"Home",path:"/"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],u=n(0),O=Object(c.lazy)((function(){return n.e(4).then(n.t.bind(null,62,7))})),m=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"hamburger-container",children:[Object(u.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(u.jsx)("ul",{children:n?Object(u.jsx)("li",{className:"menu close-menu",children:Object(u.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(u.jsx)("li",{className:"menu open-menu",children:Object(u.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(u.jsx)(c.Suspense,{fallback:Object(u.jsx)(u.Fragment,{}),children:Object(u.jsx)(O,{right:!0,isOpen:n,children:Object(u.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(b.b,{to:e.path,onClick:function(){return i(!n)},children:Object(u.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})})},x=function(){return Object(u.jsxs)("header",{id:"header",children:[Object(u.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(u.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(u.jsx)("nav",{className:"links",children:Object(u.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(u.jsx)("li",{style:{transition:"200ms ease"},children:Object(u.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(u.jsx)(m,{})]})},p=n(20),f=n(24),g=n(28),k=n(29),v=[{link:"https://github.com/wajidalii",label:"Github",icon:f.faGithub},{link:"https://www.linkedin.com/in/wajid-alii",label:"LinkedIn",icon:g.faLinkedinIn},{link:"mailto:wajidalii.me@gmail.com",label:"Email",icon:k.faEnvelope}],w=function(){return Object(u.jsx)("ul",{className:"icons",children:v.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.link,rel:"noreferrer",target:"_blank",children:Object(u.jsx)(p.a,{icon:e.icon})})},e.label)}))})},N=function(){return Object(u.jsxs)("section",{id:"sidebar",children:[Object(u.jsxs)("section",{id:"intro",children:[Object(u.jsx)(b.b,{to:"/",className:"logo",children:Object(u.jsx)("img",{src:"https://github.com/wajidalii.png",alt:""})}),Object(u.jsxs)("header",{children:[Object(u.jsx)(b.b,{to:"/",children:Object(u.jsx)("h2",{children:"Wajid Ali"})}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"mailto:wajidalii.me@gmail.com",children:"wajidalii.me@gmail.com"})})]})]}),Object(u.jsxs)("section",{className:"blurb",children:[Object(u.jsx)("h2",{children:"About"}),Object(u.jsxs)("p",{children:["Hi, I'm Wajid. A code-blooded Computer Scientist,"," ",Object(u.jsx)("a",{href:"https://skillcrush.com/blog/front-end-back-end-full-stack/",rel:"noreferrer",target:"_blank",children:"Full Stack Engineer"}),", and Alumni of"," ",Object(u.jsx)("a",{href:"https://itu.edu.pk/",rel:"noreferrer",target:"_blank",children:"Information Technology University"}),". I live in"," ",Object(u.jsx)("a",{href:"https://en.wikipedia.org/wiki/Lahore",rel:"noreferrer",target:"_blank",children:"Lahore - the city of gardens"}),". I enjoy learning and creating new things. I'm passionate about"," ",Object(u.jsx)("a",{href:"https://javascript.info/intro",rel:"noreferrer",target:"_blank",children:"JavaScript"}),","," ",Object(u.jsx)("a",{href:"https://medium.com/engineered-publicis-sapient/javascript-es6-es7-es10-where-are-we-8ac044dfd964",rel:"noreferrer",target:"_blank",children:"ECMAScript"}),","," ",Object(u.jsx)("a",{href:"https://reactjs.org/",rel:"noreferrer",target:"_blank",children:"ReactJS"}),","," ",Object(u.jsx)("a",{href:"https://nodejs.org/en/about/",rel:"noreferrer",target:"_blank",children:"NodeJS"}),","," ",Object(u.jsx)("a",{href:"https://www.mongodb.com/why-use-mongodb",rel:"noreferrer",target:"_blank",children:"MongoDB"}),", and"," ",Object(u.jsx)("a",{href:"https://dev.to/andrewbaisden/modern-full-stack-developer-tech-stack-2021-49ij",rel:"noreferrer",target:"_blank",children:"Latest Technologies"}),"."]}),Object(u.jsx)("ul",{className:"actions",children:Object(u.jsx)("li",{children:Object(u.jsx)(b.b,{to:"/resume",className:"button",children:"Resume"})})})]}),Object(u.jsxs)("section",{id:"footer",children:[Object(u.jsx)(w,{}),Object(u.jsxs)("p",{className:"copyright",children:["\xa9 Wajid Ali ",Object(u.jsx)(b.b,{to:"/",children:"wajidalii.me"}),"."]})]})]})},_=function(){var e=Object(r.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},S=function(e){return Object(u.jsxs)(i.b,{children:[Object(u.jsx)(o,{}),Object(u.jsx)(_,{}),Object(u.jsxs)(i.a,{titleTemplate:"%s | Wajid Ali",defaultTitle:"Wajid Ali",defer:!1,children:[e.title&&Object(u.jsx)("title",{children:e.title}),Object(u.jsx)("meta",{name:"description",content:e.description})]}),Object(u.jsxs)("div",{id:"wrapper",children:[Object(u.jsx)(x,{}),Object(u.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(u.jsx)(N,{})]})]})};S.defaultProps={children:null,fullPage:!1,title:null,description:"Wajid Ali's personal website."};t.a=S},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(14),l=n(5),a=n(3),s=n(19),j=(n(41),n(0)),o=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(8)]).then(n.bind(null,58))})),b=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,59))})),d=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,60))})),h=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,64))})),u=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,61))})),O=Object(c.lazy)((function(){return Promise.all([n.e(5),n.e(12)]).then(n.bind(null,63))}));var m=function(){return console.log("true"===localStorage.getItem("isLight")),Object(j.jsx)(l.a,{basename:"",children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(s.a,{}),children:Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(a.a,{path:"/projects",component:h}),Object(j.jsx)(a.a,{path:"/stats",component:O}),Object(j.jsx)(a.a,{path:"/contact",component:o}),Object(j.jsx)(a.a,{path:"/resume",component:u}),Object(j.jsx)(a.a,{component:d,status:404})]})})})},x=function(){return Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(m,{})})},p=document.getElementById("root");p.hasChildNodes()?Object(r.hydrate)(Object(j.jsx)(x,{}),p):Object(r.render)(Object(j.jsx)(x,{}),p)}},[[42,2,3]]]);
//# sourceMappingURL=main.a46d7704.chunk.js.map