(this["webpackJsonpcnc-calc-react"]=this["webpackJsonpcnc-calc-react"]||[]).push([[0],{24:function(e,n,t){"use strict";t.r(n);var r,i,a,d,o,c,l,u,s,m,b,p,h,f,j,g,x,O,v,y,w,S,A,k,C,I,F=t(1),R=t.n(F),z=t(13),L=t.n(z),T=t(5),P=t(7),V=t(4),E=(new Date).getFullYear(),Q=[{key:"EN",mainTitle:"Cutting parameters calculator",welcomeTitle:"Choose an option, please.",section1Title:"Milling/drilling",section2Title:"Threading/tapping",form1Legend:"Surface cutting speed",form2Legend:"Tool rotational speed",form3Legend:"Linear feedrate",form4Legend:"Tapping feedrate",diameter:{name:"D",unit:" [mm]:",placeholder:"tool diameter"},rotSpeed:{name:"n",sub:"rev",unit:" [rev/min]:",placeholder:"tool rotations"},cutSpeed:{name:"V",sub:"c",unit:" [m/min]:",placeholder:"cutting speed"},feedrate:{name:"f",unit:" [mm/min]:",placeholder:"feedrate"},feedPerRev:{name:"f",sub:"r",unit:" [mm/rev]:",placeholder:"feed per rev."},feedPerTooth:{name:"f",sub:"t",unit:" [mm]:",placeholder:"feed per tooth"},teethNumber:{name:"t:",placeholder:"numer of teeth"},pitch:{name:"P",unit:" [mm]",placeholder:"thread pitch"},buttonLabel:{submit:"Calculate",reset:"Reset"}},{key:"PL",mainTitle:"Kalkulator parametr\xf3w skrawania",welcomeTitle:"Wybierz jedn\u0105 z opcji.",section1Title:"Frezowanie/wiercenie",section2Title:"Gwintowanie",form1Legend:"Liniowa pr\u0119dko\u015b\u0107 skrawania",form2Legend:"Pr\u0119dko\u015b\u0107 obrotowa narz\u0119dzia",form3Legend:"Wielko\u015b\u0107 posuwu liniowego",form4Legend:"Wielko\u015b\u0107 posuwu przy gwintowaniu",diameter:{name:"D",unit:" [mm]:",placeholder:"\u015brednica narz\u0119dzia"},rotSpeed:{name:"n",sub:"obr",unit:" [obr/min]:",placeholder:"obroty wrzeciona"},cutSpeed:{name:"V",sub:"c",unit:" [m/min]:",placeholder:"pr\u0119dko\u015b\u0107 skrawania"},feedrate:{name:"f",unit:" [mm/min]:",placeholder:"posuw liniowy"},feedPerRev:{name:"f",sub:"o",unit:" [mm/obr]:",placeholder:"posuw na obr\xf3t"},feedPerTooth:{name:"f",sub:"z",unit:" [mm]:",placeholder:"posuw na z\u0105b"},teethNumber:{name:"z:",placeholder:"liczba z\u0119b\xf3w"},pitch:{name:"P",unit:" [mm]",placeholder:"skok gwintu"},buttonLabel:{submit:"Oblicz",reset:"Wyczy\u015b\u0107"}}],D=function(e){var n;window.innerWidth>768&&(null===(n=e.current)||void 0===n||n.focus())},B=t(3),W=t(2),M=W.d.div(r||(r=Object(B.a)(["\n    max-width: 30rem;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    gap: 0.75rem;\n\n    @media (max-width: ",") {\n        flex-direction: column;\n        align-items: stretch;\n    }\n"])),(function(e){return e.theme.breakpoint.xs})),U=W.d.button(i||(i=Object(B.a)(["\n    display: flex;\n    min-width: 12rem;\n    width: 100%;\n    justify-content: center;\n    color: ",";\n    background-color: ",";\n    border: solid ",";\n    padding: 0.25rem;\n    border-radius: 1.5rem;\n\n    &:hover {\n        filter: brightness(150%);\n    }\n\n    &:active {\n        filter: brightness(200%);\n        border-color: currentColor;\n    }\n\n    ","\n    \n    ","\n"])),(function(e){return e.theme.color.primaryContrast}),(function(e){return e.theme.color.primary}),(function(e){return e.theme.color.primary}),(function(e){return"submit"===e.type&&Object(W.c)(a||(a=Object(B.a)(["\n        color: ",";\n    "])),(function(e){return e.theme.color.submitButtonFont}))}),(function(e){return"reset"===e.type&&Object(W.c)(d||(d=Object(B.a)(["\n        color: ",";\n    "])),(function(e){return e.theme.color.resetButtonFont}))})),G=t(0),H=function(e){var n,t,r=e.langId;return Object(G.jsxs)(M,{children:[Object(G.jsx)(U,{type:"submit",children:null===(n=Q[r])||void 0===n?void 0:n.buttonLabel.submit}),Object(G.jsx)(U,{type:"reset",children:null===(t=Q[r])||void 0===t?void 0:t.buttonLabel.reset})]})},K=W.d.form(o||(o=Object(B.a)(["\n    color: ",";\n"])),(function(e){return e.theme.color.primary})),N=W.d.fieldset(c||(c=Object(B.a)(["\n    border-radius: 2rem;\n    padding: 1rem;\n"]))),Z=W.d.legend(l||(l=Object(B.a)(["\n    text-align: center;\n    margin: 0.5rem;\n"]))),J=W.d.div(u||(u=Object(B.a)(["\n    display: grid;\n    justify-content: center;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n\n    @media (max-width: ",") {\n        gap: 0.5rem;\n    }\n"])),(function(e){return e.theme.breakpoint.xs})),X=function(e){var n=e.langId,t=e.legend,r=e.children,i=e.onSubmit,a=e.onReset;return Object(G.jsx)(K,{onSubmit:i,onReset:a,children:Object(G.jsxs)(N,{children:[Object(G.jsx)(Z,{children:t}),Object(G.jsx)(J,{children:r}),Object(G.jsx)(H,{langId:n})]})})},Y=W.d.div(s||(s=Object(B.a)(["\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n    justify-content: space-between;\n\n    @media (max-width: ",") {\n        flex-direction: column;\n        justify-content: center;\n        gap: 0.25rem;\n    }\n"])),(function(e){return e.theme.breakpoint.xs})),q=W.d.input(m||(m=Object(B.a)(["\n    min-width: 16rem;\n    border: solid 1px ",";\n    border-radius: 5px;\n    padding: 5px;\n\n    @media (max-width: ",") {\n        width: 100%;\n    }\n\n    &:invalid {\n        background-color: ",";\n    }\n\n    &:disabled {\n        background-color: ",";\n    }\n"])),(function(e){return e.theme.color.primary}),(function(e){return e.theme.breakpoint.xs}),(function(e){return e.theme.color.invalid}),(function(e){return e.theme.color.disabled})),_=W.d.span(b||(b=Object(B.a)(["\n    vertical-align: sub;\n    font-size: 0.7em;\n    margin-right: 0.15em;\n"]))),$=W.d.label(p||(p=Object(B.a)(["\n    text-align: right;\n\n    @media (max-width: ",") {\n        align-self: flex-start;\n    }\n"])),(function(e){return e.theme.breakpoint.xs})),ee=function(e){var n=e.name,t=e.sub,r=e.unit,i=e.inputRef,a=e.value,d=e.type,o=e.min,c=e.step,l=e.placeholder,u=e.required,s=e.disabled,m=e.readOnly,b=e.autoFocus,p=e.onChange;return Object(G.jsxs)(Y,{children:[Object(G.jsx)($,{children:Object(G.jsxs)("label",{children:[n,Object(G.jsx)(_,{children:t}),r]})}),Object(G.jsx)(q,{ref:i,value:a,type:d,min:o,step:c,placeholder:l,required:u,disabled:s,readOnly:m,autoFocus:b,onChange:p})]})},ne=function(e){var n=e.langId,t=Object(F.useState)(""),r=Object(T.a)(t,2),i=r[0],a=r[1],d=Object(F.useState)(""),o=Object(T.a)(d,2),c=o[0],l=o[1],u=Object(F.useState)(""),s=Object(T.a)(u,2),m=s[0],b=s[1],p=Object(F.useRef)();return Object(G.jsxs)(X,{legend:Q[n].form1Legend,onSubmit:function(e){e.preventDefault(),b((Math.PI*i*c/1e3).toFixed(2)),D(p)},onReset:function(e){e.preventDefault(),a(""),l(""),b(""),D(p)},langId:n,children:[Object(G.jsx)(ee,{name:Q[n].diameter.name,unit:Q[n].diameter.unit,inputRef:p,value:i,type:"number",min:"0.0001",step:"0.0001",placeholder:Q[n].diameter.placeholder,required:!0,autoFocus:!0,onChange:function(e){var n=e.target;return a(n.value-0)}}),Object(G.jsx)(ee,{name:Q[n].rotSpeed.name,sub:Q[n].rotSpeed.sub,unit:Q[n].rotSpeed.unit,value:c,type:"number",min:"1",step:"1",placeholder:Q[n].rotSpeed.placeholder,required:!0,onChange:function(e){var n=e.target;return l(n.value)}}),Object(G.jsx)(ee,{name:Q[n].cutSpeed.name,sub:Q[n].cutSpeed.sub,unit:Q[n].cutSpeed.unit,value:m,readOnly:!0,placeholder:Q[n].cutSpeed.placeholder})]})},te=function(e){var n=e.langId,t=Object(F.useState)(""),r=Object(T.a)(t,2),i=r[0],a=r[1],d=Object(F.useState)(""),o=Object(T.a)(d,2),c=o[0],l=o[1],u=Object(F.useState)(""),s=Object(T.a)(u,2),m=s[0],b=s[1],p=Object(F.useRef)(null);return Object(G.jsxs)(X,{legend:Q[n].form2Legend,onSubmit:function(e){e.preventDefault(),b((1e3*c/Math.PI/i).toFixed(2)),D(p)},onReset:function(e){e.preventDefault(),a(""),l(""),b(""),D(p)},langId:n,children:[Object(G.jsx)(ee,{name:Q[n].diameter.name,unit:Q[n].diameter.unit,inputRef:p,value:i,type:"number",min:"0.0001",step:"0.0001",placeholder:Q[n].diameter.placeholder,required:!0,autoFocus:!0,onChange:function(e){var n=e.target;return a(n.value)}}),Object(G.jsx)(ee,{name:Q[n].cutSpeed.name,sub:Q[n].cutSpeed.sub,unit:Q[n].cutSpeed.unit,value:c,type:"number",min:"1",step:"1",placeholder:Q[n].cutSpeed.placeholder,required:!0,onChange:function(e){var n=e.target;return l(n.value)}}),Object(G.jsx)(ee,{name:Q[n].rotSpeed.name,sub:Q[n].rotSpeed.sub,unit:Q[n].rotSpeed.unit,value:m,readOnly:!0,placeholder:Q[n].rotSpeed.placeholder})]})},re=W.d.div(h||(h=Object(B.a)(["\n    display: flex;\n    gap: 10px;\n\n    @media (max-width: ",") {\n        align-self: flex-start;\n    }\n"])),(function(e){return e.theme.breakpoint.xs})),ie=function(e){var n=e.name,t=e.option,r=e.parameter,i=e.onChange;return Object(G.jsxs)(re,{children:[Object(G.jsx)("input",{type:"radio",name:n,id:null===t||void 0===t?void 0:t.id,value:null===t||void 0===t?void 0:t.id,checked:r===(null===t||void 0===t?void 0:t.id),onChange:i}),Object(G.jsxs)("label",{htmlFor:null===t||void 0===t?void 0:t.id,children:[null===t||void 0===t?void 0:t.name,Object(G.jsx)(_,{children:null===t||void 0===t?void 0:t.sub}),null===t||void 0===t?void 0:t.unit]})]})},ae=function(e){var n=e.langId,t=e.feedType,r=e.setFeedType,i=e.feedFactor1,a=e.setFeedFactor1,d=function(e){var n,t,r,i,a,d,o,c;return[{id:"FPR",name:null===(n=Q[e])||void 0===n?void 0:n.feedPerRev.name,sub:null===(t=Q[e])||void 0===t?void 0:t.feedPerRev.sub,unit:null===(r=Q[e])||void 0===r?void 0:r.feedPerRev.unit,placeholder:null===(i=Q[e])||void 0===i?void 0:i.feedPerRev.placeholder,disabled:!1},{id:"FPT",name:null===(a=Q[e])||void 0===a?void 0:a.feedPerTooth.name,sub:null===(d=Q[e])||void 0===d?void 0:d.feedPerTooth.sub,unit:null===(o=Q[e])||void 0===o?void 0:o.feedPerTooth.unit,placeholder:null===(c=Q[e])||void 0===c?void 0:c.feedPerTooth.placeholder,disabled:!0}]}(n),o=function(e){var n=e.target;r(n.value)};return Object(G.jsx)(G.Fragment,{children:d.map((function(e){return Object(G.jsxs)(Y,{children:[Object(G.jsx)(ie,{name:"feedType",option:e,parameter:t,onChange:o}),Object(G.jsx)(q,{value:e.id===t?i:"",type:"number",min:"0.01",step:"0.01",required:!0,disabled:e.id!==t,placeholder:e.placeholder,onChange:function(e){var n=e.target;return a(n.value)}})]},e.id)}))})},de=function(e){var n=e.langId,t=Object(F.useState)(""),r=Object(T.a)(t,2),i=r[0],a=r[1],d=Object(F.useState)(""),o=Object(T.a)(d,2),c=o[0],l=o[1],u=Object(F.useState)(""),s=Object(T.a)(u,2),m=s[0],b=s[1],p=Object(F.useState)("FPR"),h=Object(T.a)(p,2),f=h[0],j=h[1],g=Object(F.useState)(""),x=Object(T.a)(g,2),O=x[0],v=x[1],y=Object(F.useRef)(null);Object(F.useEffect)((function(){l(""),b("")}),[f]);return Object(G.jsxs)(X,{legend:Q[n].form3Legend,onSubmit:function(e){e.preventDefault(),v("FPR"===f?(i*c).toFixed():(i*c*m).toFixed()),D(y)},onReset:function(e){e.preventDefault(),a(""),j("FPR"),l(""),b(""),v(""),D(y)},langId:n,children:[Object(G.jsx)(ee,{name:Q[n].rotSpeed.name,sub:Q[n].rotSpeed.sub,unit:Q[n].rotSpeed.unit,inputRef:y,value:i,type:"number",min:"1",step:"1",placeholder:Q[n].rotSpeed.placeholder,required:!0,autoFocus:!0,onChange:function(e){var n=e.target;return a(n.value)}}),Object(G.jsx)(ae,{langId:n,feedType:f,setFeedType:j,feedFactor1:c,setFeedFactor1:l}),Object(G.jsx)(ee,{name:Q[n].teethNumber.name,value:"FPT"===f?m:"",type:"number",min:"1",step:"1",placeholder:Q[n].teethNumber.placeholder,required:!0,disabled:"FPR"===f,onChange:function(e){var n=e.target;return b(n.value)}}),Object(G.jsx)(ee,{name:Q[n].feedrate.name,unit:Q[n].feedrate.unit,value:O,readOnly:!0,placeholder:Q[n].feedrate.placeholder})]})},oe=[{id:0,diameter:"",pitch:""},{id:1,diameter:1,pitch:.25},{id:2,diameter:1.1,pitch:.25},{id:3,diameter:1.2,pitch:.25},{id:4,diameter:1.4,pitch:.3},{id:5,diameter:1.6,pitch:.35},{id:6,diameter:1.8,pitch:.35},{id:7,diameter:2,pitch:.4},{id:8,diameter:2.2,pitch:.45},{id:9,diameter:2.5,pitch:.45},{id:10,diameter:3,pitch:.5},{id:11,diameter:3.5,pitch:.6},{id:12,diameter:4,pitch:.7},{id:13,diameter:4.5,pitch:.75},{id:14,diameter:5,pitch:.8},{id:15,diameter:6,pitch:1},{id:16,diameter:7,pitch:1},{id:17,diameter:8,pitch:1.25},{id:18,diameter:9,pitch:1.25},{id:19,diameter:10,pitch:1.5},{id:20,diameter:11,pitch:1.5},{id:21,diameter:12,pitch:1.75},{id:22,diameter:14,pitch:2},{id:23,diameter:16,pitch:2},{id:24,diameter:18,pitch:2.5},{id:25,diameter:20,pitch:2.5},{id:26,diameter:22,pitch:2.5},{id:27,diameter:24,pitch:3},{id:28,diameter:27,pitch:3},{id:29,diameter:30,pitch:3.5},{id:30,diameter:33,pitch:3.5},{id:31,diameter:36,pitch:4},{id:32,diameter:39,pitch:4},{id:33,diameter:42,pitch:4.5},{id:34,diameter:45,pitch:4.5},{id:35,diameter:48,pitch:5},{id:36,diameter:52,pitch:5},{id:37,diameter:56,pitch:5.5},{id:38,diameter:60,pitch:5.5},{id:39,diameter:64,pitch:6},{id:40,diameter:68,pitch:6}],ce=W.d.select(f||(f=Object(B.a)(["\n    min-width: 16rem;\n    border: solid 1px ",";\n    border-radius: 5px;\n    padding: 5px;\n\n    @media (max-width: ",") {\n        width: 100%;\n    }\n"])),(function(e){return e.theme.color.primary}),(function(e){return e.theme.breakpoint.xs})),le=function(e){var n=e.name,t=e.sub,r=e.unit,i=e.id,a=e.value,d=e.data,o=e.onChange;return Object(G.jsxs)(Y,{children:[Object(G.jsx)($,{children:Object(G.jsxs)("label",{htmlFor:i,children:[n,Object(G.jsx)(_,{children:t}),r]})}),Object(G.jsx)(ce,{id:i,value:a,onChange:o,children:d.map((function(e){return Object(G.jsx)("option",{children:e.value},e.key)}))})]})},ue=oe.map((function(e){return{key:e.id,value:e.diameter}})),se=function(e){var n=e.langId,t=Object(F.useState)(""),r=Object(T.a)(t,2),i=r[0],a=r[1],d=Object(F.useState)(""),o=Object(T.a)(d,2),c=o[0],l=o[1],u=Object(F.useState)(""),s=Object(T.a)(u,2),m=s[0],b=s[1],p=Object(F.useState)(""),h=Object(T.a)(p,2),f=h[0],j=h[1],g=Object(F.useRef)(null);return Object(G.jsxs)(X,{legend:Q[n].form4Legend,onSubmit:function(e){e.preventDefault(),j((i*m).toFixed()),D(g)},onReset:function(e){e.preventDefault(),a(""),l(""),b(""),j(""),D(g)},langId:n,children:[Object(G.jsx)(ee,{name:Q[n].rotSpeed.name,sub:Q[n].rotSpeed.sub,unit:Q[n].rotSpeed.unit,inputRef:g,value:i,type:"number",min:"1",step:"1",placeholder:Q[n].rotSpeed.placeholder,required:!0,autoFocus:!0,onChange:function(e){var n=e.target;return a(n.value)}}),Object(G.jsx)(le,{name:Q[n].diameter.name,unit:Q[n].diameter.unit,id:"diameterSelector",onChange:function(e){var n=e.target;l(n.value),b(oe[oe.findIndex((function(e){return e.diameter.toString()===n.value}))].pitch)},value:c,data:ue}),Object(G.jsx)(ee,{name:Q[n].pitch.name,unit:Q[n].pitch.unit,value:m,placeholder:Q[n].pitch.placeholder,readOnly:!0}),Object(G.jsx)(ee,{name:Q[n].feedrate.name,unit:Q[n].feedrate.unit,value:f,readOnly:!0,placeholder:Q[n].feedrate.placeholder})]})},me=W.d.div(j||(j=Object(B.a)(["\n  align-self: flex-start;\n\n  @media (max-width: ",") {\n    display: none;\n  }\n"])),(function(e){return e.theme.breakpoint.md})),be=W.d.div(g||(g=Object(B.a)(["\n  display: none;\n\n  @media (max-width: ",") {\n    display: block;\n  }\n"])),(function(e){return e.theme.breakpoint.md})),pe=W.d.ul(x||(x=Object(B.a)(["\n  padding: 0;\n  list-style: none;\n"]))),he=Object(W.d)(P.b)(O||(O=Object(B.a)(["\n    color: ",";\n    background-color: ",";\n    display: block;\n    font-size: 1.25rem;\n    border-radius: 1.5rem;\n    padding: 0.5rem 1.5rem;\n    margin: 1rem;\n    font-weight: 400;\n    font-family: 'Ubuntu', sans-serif;\n    margin: 0 auto 0.75rem auto;\n    transition: all 0.3s ease-in-out;\n    transition: transform 0.1s ease-in-out;\n\n    &:hover {\n      filter: brightness(1.5);\n    }\n\n    &:active {\n      filter: brightness(1);\n      transform: scale(0.98);\n    }\n    \n    ","\n"])),(function(e){return e.theme.color.primaryContrast}),(function(e){return e.theme.color.primary}),(function(e){return e.sidebar&&Object(W.c)(v||(v=Object(B.a)(["\n      border-radius: 0;\n      border-bottom: 1px solid currentColor;\n      background-color: transparent;\n      transition: transform 0.1s ease-in-out;\n\n      &:hover {\n        filter: brightness(0.8);\n        transform: scale(1.02);\n      }\n\n      &:active {\n        filter: brightness(1);\n        transform: scale(0.98);\n      }\n    "])))})),fe=function(e){var n=e.langId,t=e.handleClose,r=e.sidebar,i=e.baseUrl,a=function(e){var n,t,r,i;return[{id:1,path:"surface-speed",label:null===(n=Q[e])||void 0===n?void 0:n.form1Legend},{id:2,path:"spindle-speed",label:null===(t=Q[e])||void 0===t?void 0:t.form2Legend},{id:3,path:"feedrate",label:null===(r=Q[e])||void 0===r?void 0:r.form3Legend},{id:4,path:"tapping-feed",label:null===(i=Q[e])||void 0===i?void 0:i.form4Legend}]}(n);return Object(G.jsx)(pe,{children:a.map((function(e){return Object(G.jsx)("li",{children:Object(G.jsx)(he,{sidebar:r,to:"".concat(i||"").concat(e.path),onClick:t,children:e.label})},e.id)}))})},je=W.d.h2(y||(y=Object(B.a)(["\n  text-align: center;\n\n  @media (max-width: ",") {\n    display: none;\n  }\n"])),(function(e){return e.theme.breakpoint.md})),ge=function(e){var n,t=e.langId;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(je,{children:null===(n=Q[t])||void 0===n?void 0:n.welcomeTitle}),Object(G.jsx)(be,{children:Object(G.jsx)(fe,{langId:t})})]})},xe=W.d.div(w||(w=Object(B.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 10px;\n  height: 100%;\n  background: transparent;\n"]))),Oe=W.d.div(S||(S=Object(B.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  color: ",";\n  background-color: ",";\n  padding: 1rem;\n  padding-top: 6rem;\n  display: none;\n\n  @media (max-width: ",") {\n    display: ",";\n  }\n"])),(function(e){return e.theme.color.primaryContrast}),(function(e){return e.theme.color.primary}),(function(e){return e.theme.breakpoint.md}),(function(e){return e.visible&&"block"})),ve=function(e){var n=e.langId,t=e.open,r=e.setOpen,i=Object(V.f)().pathname,a=function(){r(!1)};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(xe,{onPointerEnter:function(){setTimeout((function(){r(!0)}),1e3)}}),Object(G.jsx)(Oe,{visible:t&&"/"!==i,onPointerLeave:a,children:Object(G.jsx)(fe,{langId:n,sidebar:"true",baseUrl:"cnc-calc-react/",handleClose:a})})]})},ye=W.d.div(A||(A=Object(B.a)(["\n    color: ",";\n    background-color: ",";\n    border-radius: 1.5rem;\n    padding: 0.5rem 1.5rem;\n    margin: 0 auto 10px auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    @media (max-width: ",") {\n        border-radius: 0;\n        margin: 0 0 10px 0;\n        padding: 0.5rem;\n    }\n"])),(function(e){return e.theme.color.primaryContrast}),(function(e){return e.theme.color.primary}),(function(e){return e.theme.breakpoint.md})),we=Object(W.d)(P.b)(k||(k=Object(B.a)(["\n    &:hover {\n        filter: brightness(0.8);\n    }\n\n    &:active {\n        filter: unset;\n    }\n\n    &:focus {\n        outline: none;\n    }\n"]))),Se=W.d.h1(C||(C=Object(B.a)(["\n    font-size: 2rem;\n    font-weight: 300;\n    font-family: 'Ubuntu', sans-serif;\n    text-align: center;\n    margin: 0;\n\n    @media (max-width: ",") {\n        font-size: 1.5rem;\n    }\n"])),(function(e){return e.theme.breakpoint.md}));function Ae(){return(Ae=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ke(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Ce(e,n){var t=e.title,r=e.titleId,i=ke(e,["title","titleId"]);return F.createElement("svg",Ae({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",height:"100%",viewBox:"0 0 122.879 103.609",enableBackground:"new 0 0 122.879 103.609",xmlSpace:"preserve",ref:n,"aria-labelledby":r},i),t?F.createElement("title",{id:r},t):null,I||(I=F.createElement("g",null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"}))))}var Ie,Fe,Re,ze,Le,Te,Pe,Ve,Ee=F.forwardRef(Ce),Qe=(t.p,W.d.button(Ie||(Ie=Object(B.a)(["\n  height: 1.5rem;\n  margin: 0.5rem;\n  margin-right: 1rem;\n  background: transparent;\n  border: none;\n  color: inherit;\n  display: none;\n  z-index: 25;\n\n  &:hover {\n      filter: brightness(0.8);\n  }\n\n  &:active {\n      filter: unset;\n  }\n\n  &:focus {\n      outline: none;\n  }\n\n  @media (max-width: ",") {\n    display: block;\n    margin: 0.5rem;\n  }\n\n  @media (max-width: ",") {\n    margin: 0;\n  }\n"])),(function(e){return e.theme.breakpoint.md}),(function(e){return e.theme.breakpoint.xs}))),De=function(e){var n=e.onClick;return Object(G.jsx)(Qe,{onClick:n,children:Object(G.jsx)(Ee,{})})},Be=W.d.div(Fe||(Fe=Object(B.a)(["\n    display: flex;\n    \n    @media (max-width: ",") {\n        flex-direction: column;\n    }\n"])),(function(e){return e.theme.breakpoint.sm})),We=W.d.button(Re||(Re=Object(B.a)(["\n    color: ",";\n    background-color: ",";\n    border: 2px solid ",";\n    border-radius: 2px;\n    \n    &:hover {\n        filter: brightness(125%);\n    }\n\n    &:active {\n        filter: brightness(150%);\n    }\n"])),(function(e){return e.theme.color.primary}),(function(e){return e.theme.color.primaryContrast}),(function(e){return e.theme.color.primary})),Me=function(e){var n=e.setLangId;return Object(G.jsx)(Be,{children:Q.map((function(e){return Object(G.jsx)(We,{onClick:function(){return t=e.key,void n(Q.findIndex((function(e){return e.key===t})));var t},style:{backgroundImage:"url(".concat("EN"===e.key?"data:image/png;base64,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":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAidJREFUWIXtl7FuE0EQhr/Zm7sz8QVFyBSIygUFr0BBeAZeh5J3oKGngKfII6RwB4qMqJCCTGQsn2PPUNze5WISiOwzbjKSvV55T/83M7uzc7Bnk1t+3zTf1vymeS0i/4DpGqIZFWA8Hj8xs6zX61GWpQDkec5isegExN0b7/M89/l8DjAZDocTGY1GbwaDwds0TQEQ2ZXz4O6ICO7ObDYrx+PxS03T9NXR0RGqujPhmyzLsvz09PRFWC6XyS69vs1EBDPT8N+V1yyEsF+G/UfgHuAe4B5g3wB6/v4dDx8PSK4VJGldyNuU6VYL4B6nDu7MLy/5+fkLOvn0kR/9XgXg4CJIEKjvh23uifoWjuLuDmbgRmnGxXRGIFQL3Cy2KPLnw5up32mVBgVRJ4QYdnEQqThq5903z0TLD6nT4BBWkKSgSQahByFcidNkoBbeUL0VPW/EPQI4YQGqB0Zy4CSJV0ISRUVa+3DDNDTet8QjWLICLUH1AWjhhOBX4tDRKYgUjXD8MlBz0gWo9kEPnSAOYiDxODZedwAAESLCuOHmVQSywtHCkWAx7HEfdNKlr3Xh7jEd1Ud/WRWB5NAJ66GXmDcR7nqk/grha5EwSPugZ5fLr0+LgNAqPi2Pu6hD10DiH7YyG01W3yTLsufPHoXXmnhW9YdBdtEmGoCZV4NxMef72Xn5ofYviaMcHx8znU4779OLonCAk5MTaMoRtq+X0202Vbf2G0PL9Fg33ZVqAAAAAElFTkSuQmCC",")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"},children:e.key},e.key)}))})},Ue=function(e){var n,t=e.langId,r=e.setLangId,i=e.open,a=e.setOpen;return Object(G.jsx)("header",{id:"start",children:Object(G.jsxs)(ye,{children:[Object(G.jsx)(De,{onClick:function(){return a(!i)}}),Object(G.jsx)(we,{to:"/",children:Object(G.jsx)(Se,{children:null===(n=Q[t])||void 0===n?void 0:n.mainTitle})}),Object(G.jsx)(Me,{setLangId:r})]})})},Ge=W.d.a(ze||(ze=Object(B.a)(["\n  color: inherit;\n\n  &:hover {\n    color: crimson;\n    border-bottom: 1px solid currentColor;\n    padding-bottom: 4px;\n  }\n"]))),He=function(e){var n=e.adress,t=e.text;return Object(G.jsx)(Ge,{href:n||"#",children:t})},Ke=W.d.footer(Le||(Le=Object(B.a)(["\n  text-align: center;\n  margin: 0;\n"]))),Ne=W.d.p(Te||(Te=Object(B.a)(["\n  color: ",";\n  padding: 0 25px;\n  font-size: 14px;\n"])),(function(e){return e.theme.color.primary})),Ze=function(e){var n=e.date,t=e.address,r=e.name;return Object(G.jsx)(Ke,{children:Object(G.jsxs)(Ne,{children:["Copyright \xa9 ",n," by\xa0",Object(G.jsx)(He,{adress:t,text:r})]})})},Je=W.d.main(Pe||(Pe=Object(B.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    gap: 2rem;\n    padding: 1rem;\n    width: 100%;\n    min-height: 16rem;\n\n    @media (max-width: ",") {\n        grid-template-columns: 1fr;\n    }\n"])),(function(e){return e.theme.breakpoint.md})),Xe=function(){var e=function(){var e=Object(F.useState)(localStorage.getItem("langId")||0),n=Object(T.a)(e,2),t=n[0],r=n[1];return Object(F.useEffect)((function(){localStorage.setItem("langId",t)}),[t]),{langId:t,setLangId:r}}(),n=e.langId,t=e.setLangId,r=Object(F.useState)(!1),i=Object(T.a)(r,2),a=i[0],d=i[1];return Object(G.jsxs)(P.a,{children:[Object(G.jsx)(ve,{langId:n,open:a,setOpen:d}),Object(G.jsx)(Ue,{langId:n,setLangId:t,open:a,setOpen:d}),Object(G.jsxs)(Je,{children:[Object(G.jsx)(me,{children:Object(G.jsx)(fe,{langId:n,baseUrl:"cnc-calc-react/"})}),Object(G.jsxs)(V.d,{children:[Object(G.jsx)(V.b,{path:"/",element:Object(G.jsx)(V.a,{to:"cnc-calc-react"})}),Object(G.jsxs)(V.b,{path:"cnc-calc-react",children:[Object(G.jsx)(V.b,{index:!0,element:Object(G.jsx)(ge,{langId:n})}),Object(G.jsx)(V.b,{path:"surface-speed",element:Object(G.jsx)(ne,{langId:n})}),Object(G.jsx)(V.b,{path:"spindle-speed",element:Object(G.jsx)(te,{langId:n})}),Object(G.jsx)(V.b,{path:"feedrate",element:Object(G.jsx)(de,{langId:n})}),Object(G.jsx)(V.b,{path:"tapping-feed",element:Object(G.jsx)(se,{langId:n})})]})]})]}),Object(G.jsx)(Ze,{date:E,address:"mailto:michal.cesarczyk@gmail.com",name:"Micha\u0142\xa0Cesarczyk"})]})},Ye=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,d=n.getTTFB;t(e),r(e),i(e),a(e),d(e)}))},qe=Object(W.b)(Ve||(Ve=Object(B.a)(["\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\n*:root {\n  font-size: 20px;\n\n  @media (max-width: ",") {\n    font-size: 18px;\n  }\n  \n  @media (max-width: ",") {\n    font-size: 16px;\n  }\n  \n  @media (max-width: ",") {\n    font-size: 14px;\n  }\n}\n\nbody {\n  color: #1E3246;\n  background-color: #fff;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 1.5rem 0.5rem;\n  line-height: 1.15;\n  font-family: 'Ubuntu', sans-serif;\n  min-width: 248px;\n\n  @media (max-width: ",") {\n    padding: 0;\n  }\n\n  @media (max-width: ",") {\n    overflow-y: scroll;\n  }\n}\n\nbutton, a {\n  cursor: pointer;\n  color: inherit;\n}\n\na {\n  text-decoration: none;\n}\n"])),(function(e){return e.theme.breakpoint.xl}),(function(e){return e.theme.breakpoint.lg}),(function(e){return e.theme.breakpoint.md}),(function(e){return e.theme.breakpoint.md}),(function(e){return e.theme.breakpoint.xs}));L.a.render(Object(G.jsx)(R.a.StrictMode,{children:Object(G.jsxs)(W.a,{theme:{color:{primary:"#1e3246",primaryContrast:"#fff",background:"#133246",submitButtonFont:"#19aa6e",resetButtonFont:"#dc3223",invalid:"beige",disabled:"#ddd"},breakpoint:{xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"}},children:[Object(G.jsx)(qe,{}),Object(G.jsx)(Xe,{})]})}),document.getElementById("root")),Ye()}},[[24,1,2]]]);
//# sourceMappingURL=main.01e6734e.chunk.js.map