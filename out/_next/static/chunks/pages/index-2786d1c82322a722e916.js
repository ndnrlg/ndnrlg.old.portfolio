(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,n,t){"use strict";var i=t(3038),r=t(862);n.default=void 0;var o=r(t(7294)),a=t(1689),s=t(2441),c=t(5749),l={};function d(e,n,t,i){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[n+"%"+t+(r?"%"+r:"")]=!0}}var u=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),r=t&&t.asPath||"/",u=o.default.useMemo((function(){var n=(0,a.resolveHref)(r,e.href,!0),t=i(n,2),o=t[0],s=t[1];return{href:o,as:e.as?(0,a.resolveHref)(r,e.as):s||o}}),[r,e.href,e.as]),p=u.href,f=u.as,m=e.children,h=e.replace,x=e.shallow,g=e.scroll,b=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var y=o.Children.only(m),v=y&&"object"===typeof y&&y.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),j=i(w,2),k=j[0],_=j[1],C=o.default.useCallback((function(e){k(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,k]);(0,o.useEffect)((function(){var e=_&&n&&(0,a.isLocalURL)(p),i="undefined"!==typeof b?b:t&&t.locale,r=l[p+"%"+f+(i?"%"+i:"")];e&&!r&&d(t,p,f,{locale:i})}),[f,p,_,b,n,t]);var z={ref:C,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,i,r,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=i.indexOf("#")<0),n[r?"replace":"push"](t,i,{shallow:o,locale:c,scroll:s}))}(e,t,p,f,h,x,g,b)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),d(t,p,f,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var N="undefined"!==typeof b?b:t&&t.locale,I=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(f,N,t&&t.locales,t&&t.domainLocales);z.href=I||(0,a.addBasePath)((0,a.addLocale)(f,N,t&&t.defaultLocale))}return o.default.cloneElement(y,z)};n.default=u},5749:function(e,n,t){"use strict";var i=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,c=(0,r.useRef)(),l=(0,r.useState)(!1),d=i(l,2),u=d[0],p=d[1],f=(0,r.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||u||e&&e.tagName&&(c.current=function(e,n,t){var i=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=i.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:r,elements:i}),t}(t),r=i.id,o=i.observer,a=i.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(r))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,u]);return(0,r.useEffect)((function(){if(!a&&!u){var e=(0,o.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[u]),[f,u]};var r=t(7294),o=t(8391),a="undefined"!==typeof IntersectionObserver;var s=new Map},7344:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var i=t(5893),r=(t(7294),t(9163)),o=r.default.section.withConfig({displayName:"GlobalComponents__Section",componentId:"sc-6qzy6y-0"})(["display:",";flex-direction:",";padding:",";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ","{padding:24px 48px 0;flex-direction:column;}@media ","{padding:",";width:calc(100vw - 32px);flex-direction:column;}"],(function(e){return e.grid?"grid":"flex"}),(function(e){return e.row?"row":"column"}),(function(e){return e.nopadding?"0":"32px 48px 0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.nopadding?"0":"16px 16px 0"})),a=r.default.h2.withConfig({displayName:"GlobalComponents__SectionTitle",componentId:"sc-6qzy6y-1"})(["font-weight:800;font-size:",";line-height:",";width:max-content;max-width:100%;background:#2D2924;-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:",";@media ","{font-size:",";line-height:",";margin-bottom:12px;padding:",";}@media ","{font-size:32px;line-height:40px;font-size:",";line-height:",";margin-bottom:8px;padding:",";max-width:100%;}"],(function(e){return e.main?"65px":"56px"}),(function(e){return e.main?"72px":"56px"}),(function(e){return e.main?"58px 0 16px":"0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"40px 0 12px":"0"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.main?"28px":"32px"}),(function(e){return e.main?"32px":"40px"}),(function(e){return e.main?"16px 0 8px":"0"})),s=r.default.p.withConfig({displayName:"GlobalComponents__SectionText",componentId:"sc-6qzy6y-2"})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:1.6rem;color:#5D160F;@media ","{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ","{font-size:16px;line-height:24px;padding-bottom:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),c=(r.default.div.withConfig({displayName:"GlobalComponents__SectionDivider",componentId:"sc-6qzy6y-3"})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:",";margin:",";@media ","{width:48px;height:4px;}@media ","{width:32px;height:2px;}"],(function(e){return e.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.divider?"4rem 0":""}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),r.default.div.withConfig({displayName:"GlobalComponents__ButtonBack",componentId:"sc-6qzy6y-4"})(["width:",";height:",";border-radius:25px;font-size:",";font-weight:600;display:flex;align-items:center;justify-content:center;margin:",";color:#ffffff;background:#5D160F;cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:",";@media ","{width:",";height:",";font-size:",";margin-bottom:",";}@media ","{width:100%;height:32px;font-size:14px;margin-bottom:",";}"],(function(e){return e.alt?"150px":"262px"}),(function(e){return e.alt?"45px":"64px"}),(function(e){return e.alt?"20px":"24px"}),(function(e){var n=e.alt,t=e.form;return n||t?"0":"0 0 80px"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"150px":"184px"}),(function(e){return e.alt?"52px":"48px"}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.alt?"0":"64px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.alt?"0":"32px"}))),l=r.default.button.withConfig({displayName:"GlobalComponents__ButtonFront",componentId:"sc-6qzy6y-5"})(["border:none;border-radius:2px;color:#ffffff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:#5D160F;opacity:",";transition:.4s ease;font-size:",";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:",";&:hover{opacity:0.5;}&:focus{outline:none;}&:active{opacity:2;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{font-size:",";}@media ","{font-size:14px;}"],(function(e){return e.disabled?".5":"1"}),(function(e){return e.alt?"20px":"24px"}),(function(e){return e.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.theme.breakpoints.sm})),d=(r.default.div.withConfig({displayName:"GlobalComponents__LinkContainer",componentId:"sc-6qzy6y-6"})(["margin-left:",";transition:0.3s ease;justify-content:center;border-radius:30px;padding:8px;&:hover{background-color:#FFFFFF;transform:scale(1.2);cursor:pointer;}@media ","{margin-left:",";}@media ","{margin-left:",";}"],(function(e){return e.large?"24px":"16px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.large?"16px":"8px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"0":"8px"})),r.default.div.withConfig({displayName:"GlobalComponents__LinkIconImg",componentId:"sc-6qzy6y-7"})(["display:flex;height:",";@media ","{height:",";}@media ","{height:",";}"],(function(e){return e.large?"32px":"24px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.nav?"16px":"24px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"32px":"16px"})),function(e){return(0,i.jsxs)(c,{alt:e.alt,form:e.form,disabled:e.disabled,children:[e.children,(0,i.jsx)(l,{alt:e.alt,onClick:e.onClick,disabled:e.disabled,children:e.children})]})}),u=r.default.div.withConfig({displayName:"HeroStyles__LeftSection",componentId:"pbjia3-0"})(["width:100%;padding-right:15rem;@media ","{width:80%;display:flex;flex-direction:column;}"],(function(e){return e.theme.breakpoints.md})),p=function(e){return(0,i.jsxs)(o,{row:!0,nopadding:!0,children:[(0,i.jsxs)(u,{children:[(0,i.jsxs)(a,{main:!0,center:!0,children:["nandini ",(0,i.jsx)("br",{}),"neralagi"]}),(0,i.jsx)(s,{children:"first-year statistics & machine learning student @ carnegie mellon"}),(0,i.jsx)(d,{onClick:function(){return window.location="mailto: nandinineralagi@gmail.com"},children:" contact me "})]}),(0,i.jsx)("img",{src:"/images/n.jpg",alt:"",width:"500",height:"400"})]})},f=r.default.section.withConfig({displayName:"ProjectsStyles__GridContainer",componentId:"l76idc-0"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:1rem;place-items:center;column-gap:3rem;row-gap:3rem;@media ","{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"],(function(e){return e.theme.breakpoints.sm})),m=[{title:"wafte app",description:"helped build a sustainability app for a non-profit. helped develop app using swift/xcode and designed with figma."},{title:"using solar to reduce C02 from power plants in LA by 25%",description:"research project that i conduct at UCSB. used arcGIS + R for data collection and analysis."},{title:"next generation innovators",description:"i started an organization that teaches challenging stem concepts (ML, neuroscience, robotics engineering, etc.) to middle school students. featured in multiple newspapers."},{title:"music diversity index",description:"spotify api project - currently working on this"}],h=function(){return(0,i.jsxs)(o,{id:"projects",children:[(0,i.jsx)(a,{main:!0,children:" projects"}),(0,i.jsx)(f,{children:m.map((function(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)("u",{children:e.title}),(0,i.jsx)("br",{}),e.description]})}))})]})},x=function(){return(0,i.jsxs)(o,{id:"about",children:[(0,i.jsx)(a,{children:"about me"}),(0,i.jsx)(s,{children:"- i am based in the bay area"}),(0,i.jsx)(s,{children:"- i love learning (and have a lot to learn)"}),(0,i.jsx)(s,{children:"- i'm interest in  the applications of NLP + image recognition for ASL and GIS + augmented reality for environmental/social issues"}),(0,i.jsx)(s,{children:"- i'm exploring blockchain and crypto"}),(0,i.jsx)(s,{children:"- i enjoy running, the outdoors, and music"}),(0,i.jsx)(s,{children:"- i am currently searching for a summer 2022 internship"})]})},g=function(){return(0,i.jsx)("div",{children:"created with next.js"})},b=t(1664),y=t(2821),v=t(9352),w=r.default.div.withConfig({displayName:"HeaderStyles__Container",componentId:"sc-9w0vkp-0"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ","{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),j=r.default.div.withConfig({displayName:"HeaderStyles__Div1",componentId:"sc-9w0vkp-1"})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ","{grid-area:1 / 1 / 2 / 3;}"],(function(e){return e.theme.breakpoints.sm})),k=r.default.div.withConfig({displayName:"HeaderStyles__Div2",componentId:"sc-9w0vkp-2"})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ","{grid-area:2 / 2 / 3 / 5;}"],(function(e){return e.theme.breakpoints.sm})),_=r.default.div.withConfig({displayName:"HeaderStyles__Div3",componentId:"sc-9w0vkp-3"})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ","{align-items:center;grid-area:1 / 4 / 2 / 6;}"],(function(e){return e.theme.breakpoints.sm})),C=r.default.a.withConfig({displayName:"HeaderStyles__NavLink",componentId:"sc-9w0vkp-4"})(["font-size:2rem;line-height:32px;color:#5D160F;transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ","{padding:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),z=r.default.a.withConfig({displayName:"HeaderStyles__SocialIcons",componentId:"sc-9w0vkp-5"})(["transition:0.3s ease;color:#5D160F;border-radius:20px;padding:8px;&:hover{background-color:#ffffff;transform:scale(1.2);cursor:pointer;}"]),N=function(){return(0,i.jsxs)(w,{children:[(0,i.jsx)(j,{children:(0,i.jsx)(b.default,{href:"/",children:(0,i.jsx)("a",{style:{display:"flex",alignItems:"center",color:"#5D160F",marginBottom:"20px"},children:(0,i.jsx)(v.QeY,{size:"3rem"})})})}),(0,i.jsxs)(k,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(b.default,{href:"#about",children:(0,i.jsx)(C,{children:"about"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(b.default,{href:"#projects",children:(0,i.jsx)(C,{children:"projects"})})})]}),(0,i.jsxs)(_,{children:[(0,i.jsx)(z,{href:"https://www.linkedin.com/in/nandinineralagi/",children:(0,i.jsx)(y._iD,{size:"3rem"})}),(0,i.jsx)(z,{href:"https://twitter.com/ndnrlg",children:(0,i.jsx)(y.wod,{size:"3rem"})}),(0,i.jsx)(z,{href:"https://github.com/ndnrlg",children:(0,i.jsx)(y.RrF,{size:"3rem"})})]})]})},I=r.default.div.withConfig({displayName:"LayoutStyles__Container",componentId:"mzu455-0"})(["max-width:1280px;width:100%;margin:auto;"]),D=function(e){var n=e.children;return(0,i.jsxs)(I,{children:[(0,i.jsx)(N,{}),(0,i.jsx)("main",{children:n}),(0,i.jsx)(g,{})]})},L=function(){return(0,i.jsxs)(D,{children:[(0,i.jsx)(o,{grid:!0,children:(0,i.jsx)(p,{})}),(0,i.jsx)(x,{}),(0,i.jsx)(h,{})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7344)}])},1664:function(e,n,t){e.exports=t(6071)},4405:function(e,n,t){"use strict";t.d(n,{w_:function(){return l}});var i=t(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),a=function(){return(a=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},s=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]])}return t};function c(e){return e&&e.map((function(e,n){return i.createElement(e.tag,a({key:n},e.attr),c(e.child))}))}function l(e){return function(n){return i.createElement(d,a({attr:a({},e.attr)},n),c(e.child))}}function d(e){var n=function(n){var t,r=e.attr,o=e.size,c=e.title,l=s(e,["attr","size","title"]),d=o||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:t,style:a(a({color:e.color||n.color},n.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&i.createElement("title",null,c),e.children)};return void 0!==o?i.createElement(o.Consumer,null,(function(e){return n(e)})):n(r)}}},function(e){e.O(0,[937,617,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);