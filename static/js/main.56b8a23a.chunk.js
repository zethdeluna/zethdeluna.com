(this["webpackJsonpzethdeluna.com"]=this["webpackJsonpzethdeluna.com"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(7),c=n.n(s),r=(n(12),n(2)),l=n(3),o=n(5),d=n(4),j=(n(13),n.p+"static/media/background_ink.84e99b86.mp4"),u=n(0),b=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).onNameClick=function(e){var t=document.getElementById("zethGithub"),n=document.getElementById("zethLinkedIn");i.state.clickActive?(t.classList.remove("fade"),n.classList.remove("fade"),i.setState({clickActive:!1})):(t.classList.add("fade"),n.classList.add("fade"),i.setState({clickActive:!0}))},i.state={animate:!0,clickActive:!1},i}return Object(l.a)(n,[{key:"DidMount",value:function(){null===window.sessionStorage.getItem("firstLoadDone")?(this.setState({animate:!0}),window.sessionStorage.setItem("firstLoadDone",1)):this.setState({animate:!1})}},{key:"render",value:function(){return Object(u.jsxs)("div",{id:"homepage",children:[Object(u.jsx)("video",{id:"bkgdVideo",autoPlay:!0,loop:!0,muted:!0,children:Object(u.jsx)("source",{src:j,type:"video/mp4"})}),Object(u.jsx)("div",{id:"myOpening",className:this.state.animate?"slide-top":"",children:Object(u.jsxs)("h2",{children:["Hi,",Object(u.jsx)("br",{}),"my name is",Object(u.jsx)("span",{children:Object(u.jsx)("button",{id:"zethButton",onClick:this.onNameClick,children:"Zeth"})}),", \xa0",Object(u.jsx)("a",{href:"https://github.com/zethdeluna",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("button",{id:"zethGithub",children:Object(u.jsx)("i",{class:"fab fa-github-alt"})})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/zethdeluna/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("button",{id:"zethLinkedIn",children:Object(u.jsx)("i",{class:"fab fa-linkedin-in"})})}),Object(u.jsx)("br",{}),"an aspiring ",Object(u.jsx)("span",{children:"web developer"}),"."]})}),Object(u.jsx)("div",{id:"skills",className:this.state.animate?"slide-left":"",children:Object(u.jsxs)("h3",{children:["<div>",Object(u.jsx)("br",{}),"\xa0\xa0 html ",Object(u.jsx)("br",{}),"\xa0\xa0 css ",Object(u.jsx)("br",{}),"\xa0\xa0 javascript ",Object(u.jsx)("br",{}),"\xa0\xa0 react ",Object(u.jsx)("br",{}),"</div>"]})})]})}}]),n}(i.Component),h=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={animate:!0},i.myRef=a.a.createRef(),i}return Object(l.a)(n,[{key:"DidMount",value:function(){null===window.sessionStorage.getItem("firstLoadDone")?(this.setState({animate:!0}),window.sessionStorage.setItem("firstLoadDone",1)):this.setState({animate:!1})}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{id:"navbar",className:this.state.animate?"fade-in":"",children:[Object(u.jsx)("h1",{id:"myName",children:Object(u.jsx)("a",{href:"https://zethdeluna.com/",children:"Zeth De Luna"})}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://github.com/zethdeluna",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("i",{class:"fab fa-github-alt"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/zethdeluna/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("i",{class:"fab fa-linkedin-in"})})})]})]})})}}]),n}(i.Component),f=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleMouseMove=function(e){var t=e.clientX,n=e.clientY;i.setState({xMain:t,yMain:n},(function(){setTimeout((function(){i.setState({xTrailing:t,yTrailing:n})}),100)}))},i.state={xMain:897.5,yMain:470.8,xTrailing:897.5,yTrailing:470.8},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.xMain,i=t.yMain,a=t.xTrailing,s=t.yTrailing,c=document.querySelector(".cursor:nth-child(2)");return document.querySelectorAll("a, button").forEach((function(e){e.addEventListener("mouseenter",(function(e){c.classList.add("enlarged")})),e.addEventListener("mouseout",(function(e){c.classList.remove("enlarged")}))})),Object(u.jsxs)("div",{className:"App",onMouseMove:function(t){e.handleMouseMove(t)},children:[Object(u.jsxs)("div",{className:"cursors",children:[Object(u.jsx)("div",{className:"cursor fade-in",style:{left:n,top:i}}),Object(u.jsx)("div",{className:"cursor fade-in",style:{left:a,top:s}})]}),Object(u.jsx)(h,{}),Object(u.jsx)(b,{})]})}}]),n}(a.a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.56b8a23a.chunk.js.map