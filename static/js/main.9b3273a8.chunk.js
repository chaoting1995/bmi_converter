(this.webpackJsonpbmi_converter=this.webpackJsonpbmi_converter||[]).push([[0],{14:function(n,e,t){},18:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t(1),i=t.n(r),c=t(6),a=t.n(c),s=(t(14),t(4)),p=t(2),d=t(3);function l(){var n=Object(p.a)(["\n  ","\n  box-sizing: border-box;\n  flex: 1;\n  padding: 50px 50px 25px 50px;\n  display: flex;\n  flex-direction: column;\n  ","\n  ","\n  label {\n    margin-bottom: 30px;\n    span:first-of-type {\n      display: inline-block;\n      width: 70px;\n    }\n    cursor: pointer;\n  }\n  input[type='number'] {\n    margin-left: 20px;\n    margin-right: 10px;\n    padding-right: 10px;\n    padding-left: 10px;\n\n    font-size: 20px;\n    background-color: #ebebeb;\n    outline: none;\n    border: none;\n    width: 90px;\n    height: 35px;\n    border-radius: 15px;\n  }\n  input[type='range'] {\n    margin-bottom: 35px;\n    outline: none;\n    width: 100%;\n    cursor: pointer;\n\n    appearance: none;\n    height: 1px;\n    background-color: #a3a3a3;\n    border-radius: 10px;\n  }\n  /* Special styling for WebKit/Blink */\n  input[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    border: 2.5px solid #858585;\n    height: 20px;\n    width: 20px;\n    border-radius: 40px;\n    background: white;\n    cursor: pointer;\n    margin-top: 0px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */\n    /*   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */ /* Add cool effects to your sliders! */\n  }\n\n  /* All the same stuff for Firefox */\n  input[type='range']::-moz-range-thumb {\n    /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */\n    border: 2.5px solid #858585;\n    height: 20px;\n    width: 20px;\n    border-radius: 40px;\n    background: white;\n    cursor: pointer;\n  }\n\n  /* All the same stuff for IE */\n  input[type='range']::-ms-thumb {\n    /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */\n    border: 2.5px solid #858585;\n    height: 20px;\n    width: 20px;\n    border-radius: 40px;\n    background: white;\n    cursor: pointer;\n  }\n  & > div {\n    display: flex;\n    align-items: center;\n    margin-bottom: 15px;\n  }\n  & > div > :first-of-type {\n    width: 70px;\n    font-weight: 600;\n    overflow: hidden;\n  }\n  & > div > :nth-of-type(2) {\n    margin-left: 20px;\n    margin-right: 10px;\n    padding-right: 10px;\n    padding-left: 10px;\n\n    font-size: 20px;\n    font-weight: 600;\n    background-color: #f6f6f6;\n    width: 90px;\n    height: 35px;\n    border-radius: 15px;\n    line-height: 35px;\n    overflow: hidden;\n  }\n  .wrap {\n    height: 35px;\n    overflow: hidden;\n  }\n  .normal-prompt-70 div {\n    margin-top: -70px;\n    transition: 0.5s;\n  }\n  .normal-prompt-0 div {\n    margin-top: 0px;\n    transition: 0.5s;\n  }\n"]);return l=function(){return n},n}var x=d.a.div(l(),"","","");var h=function(n){var e=Object(r.useState)(0),t=Object(s.a)(e,2),i=t[0],c=t[1],a=Object(r.useState)(0),p=Object(s.a)(a,2),d=p[0],l=p[1],h=n.setBmi,b=n.bmi;return Object(r.useEffect)((function(){var n,e;h((e=+d,(n=+i)>0&&e>0?(e/Math.pow(n/100,2)).toFixed(1):""))}),[i,d]),Object(o.jsxs)(x,{children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"HEIGHT"}),Object(o.jsx)("input",{type:"number",min:"0",max:"220",value:i,onChange:function(n){c(n.target.value)}}),Object(o.jsx)("span",{children:"cm"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"range",max:"220",value:i,onChange:function(n){c(n.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"WEIGHT"}),Object(o.jsx)("input",{type:"number",min:"0",value:d,onChange:function(n){l(n.target.value)}}),Object(o.jsx)("span",{children:"kg"})]}),Object(o.jsx)("input",{type:"range",max:"180",value:d,onChange:function(n){l(n.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"BMI"}),Object(o.jsx)("div",{children:b})]}),Object(o.jsxs)("div",{className:"wrap  ".concat(i>0&&d>0&&(b<18.5||b>=24)?"normal-prompt-0":"normal-prompt-70"),children:[Object(o.jsx)("div",{children:"NORMAL"}),Object(o.jsxs)("div",{children:[(18.5*Math.pow(+i/100,2)).toFixed(0)," ~"," ",(24*Math.pow(+i/100,2)).toFixed(0)]}),Object(o.jsx)("div",{children:"kg"})]})]})};function b(){var n=Object(p.a)(["\n  min-height: 60px;\n  margin: 5px;\n  border-radius: 0 0 16px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 18px;\n  cursor: pointer;\n"]);return b=function(){return n},n}var u=d.a.footer(b()),j=function(n){var e=n.bmi,t={};return e?e<18.5?t={title:"\u9ad4\u91cd\u904e\u8f15",backgroundColor:"#1ba6f1"}:18.5<=e&&e<24?t={title:"\u6b63\u5e38\u7bc4\u570d",backgroundColor:"#13d569"}:24<=e&&e<27?t={title:"\u904e\u91cd",backgroundColor:"#dcc200"}:27<=e&&e<30?t={title:"\u8f15\u5ea6\u80a5\u80d6",backgroundColor:"#f09831"}:30<=e&&e<35?t={title:"\u4e2d\u5ea6\u80a5\u80d6",backgroundColor:"#e47a00"}:e>=35&&(t={title:"\u91cd\u5ea6\u80a5\u80d6",backgroundColor:"#ee362d"}):t={title:"---",backgroundColor:"#d3d8e2"},Object(o.jsx)(u,{style:{backgroundColor:t.backgroundColor},children:t.title})};function f(){var n=Object(p.a)(["\n  background-color: #fff;\n  height: 360px;\n  width: 303px;\n  font-size: 20px;\n  span {\n    color: #858585;\n  }\n  h3 {\n    font-size: 20px;\n    display: inline-block;\n    margin: 0 0 20px 20px;\n    width: 120px;\n  }\n  h3:nth-of-type(1) {\n    color: #1ba6f1;\n  }\n  h3:nth-of-type(2) {\n    color: #13d569;\n  }\n  h3:nth-of-type(3) {\n    color: #dcc200;\n  }\n  h3:nth-of-type(4) {\n    color: #f09831;\n  }\n  h3:nth-of-type(5) {\n    color: #e47a00;\n  }\n  h3:nth-of-type(6) {\n    color: #ee362d;\n  }\n"]);return f=function(){return n},n}var g=d.a.section(f()),m=function(){return Object(o.jsxs)(g,{children:[Object(o.jsx)("h3",{children:"\u9ad4\u91cd\u904e\u8f15"}),Object(o.jsxs)("span",{children:[" BMI ","<"," 18.5"]}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"\u6b63\u5e38\u7bc4\u570d"}),Object(o.jsxs)("span",{children:[" ","18.5","<=","BMI","<","24"]}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"\u904e\u91cd"}),Object(o.jsxs)("span",{children:["24","<=","BMI","<","27"]}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"\u8f15\u5ea6\u80a5\u80d6"}),Object(o.jsxs)("span",{children:["27 ","<="," BMI ","<","30"," "]}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"\u4e2d\u5ea6\u80a5\u80d6"}),Object(o.jsxs)("span",{children:["30 ","<="," BMI","<","35"," "]}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"\u91cd\u5ea6\u80a5\u80d6"}),Object(o.jsxs)("span",{children:["BMI ",">="," 35 "]})]})};function v(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 0px 10px hsl(0, 0%, 73.9%);\n  &:hover {\n    box-shadow: 0px 8px 50px rgba(0, 0, 0, 0.15);\n  }\n  border-radius: 20px;\n  background-color: white;\n  min-width: 400px;\n  min-height: 320px;\n  transition: 0.3s;\n  ","\n  h1 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 50px;\n    margin-bottom: 0px;\n    ","\n    ","\n  ","\n  font-size: 25px;\n    font-weight: 600;\n  }\n  position: relative;\n  overflow: hidden;\n  section {\n    opacity: 0;\n    transition: 0.5s;\n    position: absolute;\n    top: 125px;\n    left: 400px;\n  }\n  footer:hover ~ section {\n    opacity: 1;\n    transition: 0.8s;\n    position: absolute;\n    top: 125px;\n    left: 50px;\n  }\n"]);return v=function(){return n},n}var O=d.a.div(v(),"","","","");var w=function(){var n=Object(r.useState)(""),e=Object(s.a)(n,2),t=e[0],i=e[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(O,{children:[Object(o.jsx)("h1",{children:"BMI Converter"}),Object(o.jsx)(h,{bmi:t,setBmi:i}),Object(o.jsx)(j,{bmi:t,setBmi:i}),Object(o.jsx)(m,{})]})})};var y=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(w,{})})},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/bmi_converter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/bmi_converter","/service-worker.js");k?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):C(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(e,n)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.9b3273a8.chunk.js.map