(this["webpackJsonpsmarthome-client"]=this["webpackJsonpsmarthome-client"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(9),l=a.n(o),r=(a(81),a(82),a(22)),i=a.n(r),u=a(18),s=a(38),m=a(13),h=a(152),f=a(64),d=a.n(f),g=a(65),p=a.n(g);var v=c.a.memo((function(e){var t=e.toggleLight,a=e.deleteLight,n=e.id,o=e.checkOn;return c.a.createElement("div",{className:"box"},o?c.a.createElement("img",{className:"canoo",src:d.a,alt:"loop"}):c.a.createElement("img",{className:"canoo",src:p.a,alt:"loop"}),c.a.createElement("span",{className:"delete",onClick:function(){return a(n)}},"\u2716"),c.a.createElement(h.a,{checked:o,onChange:function(){return t(n)},color:"primary"}))})),b=a(154),E=a(145),O=Object(E.a)({root:{color:"white"},disabled:{color:"purple"}});function k(e){var t=O(),a=t.root,n=t.disabled;function o(){var t=5*(e.value-50);return"rgb(".concat(t,",0,").concat(250-t,")")}return c.a.createElement("div",null,c.a.createElement("h1",null,"Temperature"),c.a.createElement("div",{className:"thermostat",style:{backgroundColor:"".concat(o())}},c.a.createElement(b.a,{className:a,orientation:"vertical",value:e.value,min:50,step:1,max:100,onChangeCommitted:e.handleSubmit,getAriaValueText:function(e){return"".concat(e)},marks:[{value:60,label:"60\xb0F"},{value:50,label:"50\xb0F"},{value:70,label:"70\xb0F"},{value:80,label:"80\xb0F"},{value:90,label:"90\xb0F"},{value:100,label:"100\xb0F"}],onChange:e.handleChange,valueLabelDisplay:"auto","aria-labelledby":"vertical-slider",style:{height:270}}),c.a.createElement(b.a,{className:n,disabled:!0,orientation:"vertical",max:100,marks:[{value:77,label:"77\xb0F"}],step:1,min:50,defaultValue:77,"aria-labelledby":"vertical-slider",style:{height:270}})),c.a.createElement("p",{className:"tempature"},"Thermostat:",c.a.createElement("span",{style:{color:"".concat(o()," ")}},e.value,"\xb0F "),"Current Value:77\xb0F"))}var j=a(30),y=a.n(j),L=a(68),C=a.n(L),w=a(67),x=a.n(w),N=a(142);function S(e){return y.a.browserSupportsSpeechRecognition()?c.a.createElement("div",{className:"speech"},c.a.createElement(N.a,null,c.a.createElement(x.a,{className:"icon",onClick:y.a.startListening})),c.a.createElement(N.a,null,c.a.createElement(C.a,{className:"icon",onClick:y.a.stopListening})),c.a.createElement("p",null,"Your Voice Command : ",e.transcript?e.transcript:"Waiting for recording")):null}var T=a(146),F=Object(E.a)((function(e){return{root:{position:"relative"},dropdown:{position:"absolute",top:28,right:0,left:0,zIndex:1,border:"1px solid",padding:e.spacing(1),backgroundColor:"white"}}}));function _(){var e=F(),t=c.a.useState(!1),a=Object(m.a)(t,2),n=a[0],o=a[1];return c.a.createElement(T.a,{onClickAway:function(){o(!1)}},c.a.createElement("div",{className:e.root},c.a.createElement("button",{type:"button",onClick:function(){o((function(e){return!e}))}},"Valid Command List"),n?c.a.createElement("div",{className:e.dropdown},c.a.createElement("p",null,"Turn on/off the nth light"),c.a.createElement("p",null," Set the temperature to N"),c.a.createElement("p",null,"Add a new light"),c.a.createElement("p",null,"Remove the nth/Last Light"),c.a.createElement("p",null,"Increase/decrease the temperature")):null))}var A=a(151),V=a(147),D=a(155),H=a(156),I=a(69),R=a.n(I);function W(e){var t,a=Object(n.useState)(!1),o=Object(m.a)(a,2),l=o[0],r=o[1],i=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r(e)}};return e.logsAll&&(t=e.logsAll.map((function(e,t){return c.a.createElement(D.a,{button:!0,key:t},c.a.createElement(H.a,{primary:"".concat(t+1,". ").concat(e)}))}))),c.a.createElement("div",null,c.a.createElement("div",{className:"notification"},c.a.createElement(V.a,{onClick:i(!0),badgeContent:t?t.length:0,color:"primary"},c.a.createElement("img",{onClick:i(!0),className:"canoo icon",src:R.a,alt:"canoo"}))),c.a.createElement(A.a,{anchor:"bottom",open:l,onClose:i(!1),style:{height:"200px"}},c.a.createElement("div",{className:"log-list",role:"presentation",onClick:i(!1),onKeyDown:i(!1)},t)))}var z=a(44),B=a(45),J=a(25),Y=a.n(J),K=function(){function e(){Object(z.a)(this,e)}return Object(B.a)(e,null,[{key:"fetchHome",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.a.get("api/home");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"addLight",value:function(){return Y.a.post("api/home")}},{key:"deleteLastLigth",value:function(){return Y.a.delete("api/home/lights")}},{key:"removeLight",value:function(e){return Y.a.delete("api/home/lights/".concat(e))}},{key:"toggleLight",value:function(e){return Y.a.put("api/home/lights/toggle/".concat(e))}},{key:"setTempature",value:function(e){return Y.a.put("api/home/tempature",e)}}]),e}(),$=function(){function e(){Object(z.a)(this,e)}return Object(B.a)(e,null,[{key:"ordinal_suffix_of",value:function(e){var t=e%10;return"".concat(e,1===t?"st":2===t?"nd":3===t?"rd":"th")}},{key:"split_of",value:function(e){var t=e.toLowerCase().split(" "),a=Object(m.a)(t,5),n=a[0],c=a[1],o=a[2],l=a[3],r=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"];return[n,a[4],"".concat(n," ").concat(c),"".concat(n," ").concat(c," ").concat(o),"".concat(n," ").concat(c," ").concat(o," ").concat(l),r.indexOf(t[3]),r.indexOf(t[2])]}}]),e}(),q=a(153);function G(e){var t=c.a.useState(!1),a=Object(m.a)(t,2),o=a[0],l=a[1];Object(n.useEffect)((function(){l(!0)}),[e.logs]);return c.a.createElement("div",null,c.a.createElement(q.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},message:e.logs?e.logs[e.logs.length-1]:"",open:o,autoHideDuration:2e3,onClose:function(e,t){"clickaway"!==t&&l(!1)}}))}var M=a(149),P=a(150);function Q(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"Lights"),c.a.createElement(N.a,null,c.a.createElement(M.a,{onClick:e.addLight})),c.a.createElement(N.a,null,c.a.createElement(P.a,{onClick:e.removeLastLight})))}function U(){var e,t=Object(n.useState)(),a=Object(m.a)(t,2),o=a[0],l=a[1],r=Object(n.useState)(82),h=Object(m.a)(r,2),f=h[0],d=h[1],g=Object(n.useState)(),p=Object(m.a)(g,2),b=p[0],E=p[1],O=Object(j.useSpeechRecognition)("").transcript,y=Object(n.useState)(""),L=Object(m.a)(y,2),C=L[0],w=L[1],x=Object(n.useState)(!1),N=Object(m.a)(x,2);N[0],N[1];function T(){return(T=Object(s.a)(i.a.mark((function e(){var t,a,n,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.fetchHome();case 3:t=e.sent,a=t.data,n=a.lights,c=a.value,o=a.logs,l(n),d(c),E(o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function F(){K.addLight().then((function(e){E([].concat(Object(u.a)(b),["A new light added"])),l([].concat(Object(u.a)(o),[{isOn:!1}]))})).catch((function(e){return console.log(e)}))}function A(){K.deleteLastLigth().then((function(e){var t=Object(u.a)(o);t.pop(),l(t),E([].concat(Object(u.a)(b),["Last light deleted"]))})).catch((function(e){return console.log(e)}))}function V(e){K.removeLight(e).then((function(t){var a=Object(u.a)(o);a.splice(e,1),l(a);var n=$.ordinal_suffix_of(e+1);E([].concat(Object(u.a)(b),["The ".concat(n," light deleted")]))})).catch((function(e){return console.log(e)}))}function D(e){K.toggleLight(e).then((function(t){var a=Object(u.a)(o);a[e].isOn=!a[e].isOn,l(a);var n=$.ordinal_suffix_of(e+1);if(!a[e].isOn)return E([].concat(Object(u.a)(b),["The ".concat(n," light turned off")]));E([].concat(Object(u.a)(b),["The ".concat(n," light turned on")]))})).catch((function(e){return console.log(e)}))}function H(e){if(""!==e&&void 0!==e){var t=$.split_of(e),a=Object(m.a)(t,7),n=a[0],c=a[1],l=a[2],r=a[3],i=a[4],u=a[5],s=a[6];"add a new light"!==i&&"add a light"!==r||F(),"delete the last light"!==i&&"remove the last light"!==i||A(),"set the temperature"===r&&c>=50&&c<=100&&(R("",c),I("",c)),-1===u&&-1===s||("delete"!==n&&"remove"!==n||V(s),"turn on"===l&&!1===o[u].isOn&&D(u),"turn off"===l&&!0===o[u].isOn&&D(u))}}function I(e,t){d(t)}function R(e,t){K.setTempature({value:t}).then((function(e){E([].concat(Object(u.a)(b),["Set the thermostat to ".concat(t,"\xb0F")]))})).catch((function(e){return console.log(e)}))}return Object(n.useEffect)((function(){!function(){T.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){H(O)}),[O]),Object(n.useEffect)((function(){H(C)}),[C]),o&&(e=o.map((function(e,t){return c.a.createElement("div",{key:t,className:"light"},c.a.createElement(v,{toggleLight:D,deleteLight:V,id:t,checkOn:!o[t]||o[t].isOn}))}))),c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"left"},c.a.createElement(Q,{addLight:F,removeLastLight:A}),c.a.createElement("div",{className:"light-container"},e)),c.a.createElement("div",{className:"right"},c.a.createElement(k,{key:"thermo",handleSubmit:R,handleChange:I,value:f}),c.a.createElement(S,{transcript:O,transcriptCheck:H,key:"speech",toggleLight:D}),c.a.createElement("p",null," Your Text Command : ",c.a.createElement("input",{value:C,onChange:function(e){w(e.target.value)}})),c.a.createElement(_,null),c.a.createElement(W,{logsAll:b}))),c.a.createElement(G,{logs:b}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,a){e.exports=a.p+"static/media/loop.6f5879ce.gif"},65:function(e,t,a){e.exports=a.p+"static/media/canoodark.15a18071.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/canoo.541da1bb.png"},76:function(e,t,a){e.exports=a(111)},81:function(e,t,a){},82:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.ee46ec63.chunk.js.map