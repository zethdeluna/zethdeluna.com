(this["webpackJsonpzethdeluna.com"]=this["webpackJsonpzethdeluna.com"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(7),c=n.n(a),r=(n(12),n(2)),l=n(3),j=n(5),o=n(4),d=(n(13),n.p+"static/media/background_ink.84e99b86.mp4"),b=n(0),h=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={animate:!0},i}return Object(l.a)(n,[{key:"DidMount",value:function(){null===window.sessionStorage.getItem("firstLoadDone")?(this.setState({animate:!0}),window.sessionStorage.setItem("firstLoadDone",1)):this.setState({animate:!1})}},{key:"render",value:function(){return Object(b.jsxs)("div",{id:"homepage",children:[Object(b.jsx)("video",{id:"bkgdVideo",autoPlay:!0,loop:!0,muted:!0,children:Object(b.jsx)("source",{src:d,type:"video/mp4"})}),Object(b.jsxs)("div",{id:"navbar",className:this.state.animate?"fade-in":"",children:[Object(b.jsx)("h1",{id:"myName",children:Object(b.jsx)("a",{href:"#homepage",children:"Zeth De Luna"})}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://github.com/zethdeluna",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{class:"fab fa-github-alt"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/zethdeluna/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{class:"fab fa-linkedin-in"})})})]})]}),Object(b.jsx)("div",{id:"myOpening",className:this.state.animate?"slide-top":"",children:Object(b.jsxs)("h2",{children:["Hi,",Object(b.jsx)("br",{})," my name is ",Object(b.jsx)("span",{children:"Zeth"}),",",Object(b.jsx)("br",{}),"an aspiring ",Object(b.jsx)("span",{children:"web developer"}),"."]})}),Object(b.jsx)("div",{id:"skills",className:this.state.animate?"slide-left":"",children:Object(b.jsxs)("h3",{children:["<div>",Object(b.jsx)("br",{}),"\xa0\xa0 html ",Object(b.jsx)("br",{}),"\xa0\xa0 css ",Object(b.jsx)("br",{}),"\xa0\xa0 javascript ",Object(b.jsx)("br",{}),"\xa0\xa0 react ",Object(b.jsx)("br",{}),"</div>"]})})]})}}]),n}(i.Component),u=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleMouseMove=function(e){var t=e.clientX,n=e.clientY;i.setState({xMain:t,yMain:n},(function(){setTimeout((function(){i.setState({xTrailing:t,yTrailing:n})}),120)}))},i.state={xMain:0,yMain:0,xTrailing:0,yTrailing:0},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.xMain,i=t.yMain,s=t.xTrailing,a=t.yTrailing;return Object(b.jsxs)("div",{className:"App",onMouseMove:function(t){e.handleMouseMove(t)},children:[Object(b.jsxs)("div",{className:"cursors",children:[Object(b.jsx)("div",{className:"cursor fade-in",style:{left:n,top:i}}),Object(b.jsx)("div",{className:"cursor fade-in",style:{left:s,top:a}})]}),Object(b.jsx)(h,{})]})}}]),n}(s.a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.7726f618.chunk.js.map