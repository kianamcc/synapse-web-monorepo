import{g as $,a as j,p as y,c as M,e as h,b as a,_,d as N}from"./createTheme-CWLQ-DuD.js";import{r as x}from"./index-Cu9bd8lq.js";import{s as P,u as U,c as z}from"./styled-BNZh1-oq.js";import{j as W}from"./jsx-runtime-DoxjgJx5.js";import{T as E}from"./Typography-CaL9sKMg.js";import{u as H}from"./useIsFocusVisible-Lp1_y5xp.js";import{u as I}from"./useForkRef-Bm_QQ74L.js";function O(e){return j("MuiLink",e)}const q=$("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=e=>g[e]||e,G=({theme:e,ownerState:o})=>{const r=w(o.color),n=y(e,`palette.${r}`,!1)||o.color,s=y(e,`palette.${r}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:M(n,.4)},J=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],K=e=>{const{classes:o,component:r,focusVisible:n,underline:s}=e,t={root:["root",`underline${h(s)}`,r==="button"&&"button",n&&"focusVisible"]};return z(t,O,o)},Q=P(E,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[`underline${h(r.underline)}`],r.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>a({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&a({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:G({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${q.focusVisible}`]:{outline:"auto"}})),no=x.forwardRef(function(o,r){const n=U({props:o,name:"MuiLink"}),{className:s,color:t="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:C,underline:k="always",variant:d="inherit",sx:l}=n,V=_(n,J),{isFocusVisibleRef:m,onBlur:F,onFocus:L,ref:R}=H(),[v,f]=x.useState(!1),D=I(r,R),T=i=>{F(i),m.current===!1&&f(!1),u&&u(i)},A=i=>{L(i),m.current===!0&&f(!0),p&&p(i)},b=a({},n,{color:t,component:c,focusVisible:v,underline:k,variant:d}),B=K(b);return W.jsx(Q,a({color:t,className:N(B.root,s),classes:C,component:c,onBlur:T,onFocus:A,ref:D,ownerState:b,variant:d,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},V))});export{no as L,q as l};