import{j as i}from"./jsx-runtime-DoxjgJx5.js";import{r as R,a as E}from"./index-Cu9bd8lq.js";import{I as P}from"./IconSvg-D7Q47tWe.js";import{g as V,a as _,b as m,c as W,_ as O,d as q,e as n}from"./createTheme-CWLQ-DuD.js";import{s as D,u as N,c as A}from"./styled-BNZh1-oq.js";import{a as H,b as F,B as L}from"./Button-CnDFdqMc.js";import{P as U}from"./Tooltip-CQm22TSO.js";import{G as J}from"./Grow-Bq_CDIHS.js";import{P as K}from"./Paper-CK0RlmZk.js";import{M as Q}from"./MenuList-BNT0Hd0h.js";import{M as X}from"./MenuItem-CiBYe7yt.js";import{C as Y}from"./ClickAwayListener-Ba-YFlDA.js";function Z(t){return R.Children.toArray(t).filter(o=>R.isValidElement(o))}function S(t){return _("MuiButtonGroup",t)}const r=V("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),w=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],oo=(t,o)=>{const{ownerState:e}=t;return[{[`& .${r.grouped}`]:o.grouped},{[`& .${r.grouped}`]:o[`grouped${n(e.orientation)}`]},{[`& .${r.grouped}`]:o[`grouped${n(e.variant)}`]},{[`& .${r.grouped}`]:o[`grouped${n(e.variant)}${n(e.orientation)}`]},{[`& .${r.grouped}`]:o[`grouped${n(e.variant)}${n(e.color)}`]},{[`& .${r.firstButton}`]:o.firstButton},{[`& .${r.lastButton}`]:o.lastButton},{[`& .${r.middleButton}`]:o.middleButton},o.root,o[e.variant],e.disableElevation===!0&&o.disableElevation,e.fullWidth&&o.fullWidth,e.orientation==="vertical"&&o.vertical]},to=t=>{const{classes:o,color:e,disabled:u,disableElevation:x,fullWidth:B,orientation:a,variant:l}=t,d={root:["root",l,a==="vertical"&&"vertical",B&&"fullWidth",x&&"disableElevation"],grouped:["grouped",`grouped${n(a)}`,`grouped${n(l)}`,`grouped${n(l)}${n(a)}`,`grouped${n(l)}${n(e)}`,u&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return A(d,S,o)},eo=D("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:oo})(({theme:t,ownerState:o})=>m({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},o.variant==="contained"&&{boxShadow:(t.vars||t).shadows[2]},o.disableElevation&&{boxShadow:"none"},o.fullWidth&&{width:"100%"},o.orientation==="vertical"&&{flexDirection:"column"},{[`& .${r.grouped}`]:m({minWidth:40,"&:hover":m({},o.variant==="contained"&&{boxShadow:"none"})},o.variant==="contained"&&{boxShadow:"none"}),[`& .${r.firstButton},& .${r.middleButton}`]:m({},o.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},o.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},o.variant==="text"&&o.orientation==="horizontal"&&{borderRight:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${r.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},o.variant==="text"&&o.orientation==="vertical"&&{borderBottom:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${r.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},o.variant==="text"&&o.color!=="inherit"&&{borderColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / 0.5)`:W(t.palette[o.color].main,.5)},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"transparent"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"transparent"},o.variant==="contained"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${r.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},o.variant==="contained"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${r.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},o.variant==="contained"&&o.color!=="inherit"&&{borderColor:(t.vars||t).palette[o.color].dark},{"&:hover":m({},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"currentColor"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${r.lastButton},& .${r.middleButton}`]:m({},o.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},o.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},o.variant==="outlined"&&o.orientation==="horizontal"&&{marginLeft:-1},o.variant==="outlined"&&o.orientation==="vertical"&&{marginTop:-1})})),ro=R.forwardRef(function(o,e){const u=N({props:o,name:"MuiButtonGroup"}),{children:x,className:B,color:a="primary",component:l="div",disabled:d=!1,disableElevation:b=!1,disableFocusRipple:c=!1,disableRipple:v=!1,fullWidth:h=!1,orientation:z="horizontal",size:f="medium",variant:C="outlined"}=u,p=O(u,w),g=m({},u,{color:a,component:l,disabled:d,disableElevation:b,disableFocusRipple:c,disableRipple:v,fullWidth:h,orientation:z,size:f,variant:C}),s=to(g),y=R.useMemo(()=>({className:s.grouped,color:a,disabled:d,disableElevation:b,disableFocusRipple:c,disableRipple:v,fullWidth:h,size:f,variant:C}),[a,d,b,c,v,h,f,C,s.grouped]),j=Z(x),k=j.length,M=I=>{const $=I===0,G=I===k-1;return $&&G?"":$?s.firstButton:G?s.lastButton:s.middleButton};return i.jsx(eo,m({as:l,role:"group",className:q(s.root,B),ref:e,ownerState:g},p,{children:i.jsx(H.Provider,{value:y,children:j.map((I,$)=>i.jsx(F.Provider,{value:M($),children:I},$))})}))});function T(t){const{options:o,selectedIndex:e,setSelectedIndex:u,variant:x="contained",buttonGroupAriaLabel:B,onButtonClick:a,...l}=t,[d,b]=E.useState(!1),c=E.useRef(null),[v,h]=R.useState(e??0),z=(p,g)=>{u?u(g):h(g),b(!1)},f=()=>{b(p=>!p)},C=p=>{c.current&&c.current.contains(p.target)||b(!1)};return i.jsxs(E.Fragment,{children:[i.jsxs(ro,{variant:x,ref:c,"aria-label":"split button",...l,children:[i.jsx(L,{onClick:()=>{a?a(e??v):f()},children:o[e??v]}),i.jsx(L,{size:"small","aria-controls":d?"split-button-menu":void 0,"aria-expanded":d?"true":void 0,"aria-label":B,"aria-haspopup":"menu",onClick:f,sx:{width:"36px"},children:i.jsx(P,{icon:"expandMore",wrap:!1})})]}),i.jsx(U,{sx:{zIndex:10},open:d,placement:"bottom-start",anchorEl:c.current,role:void 0,transition:!0,disablePortal:!0,children:({TransitionProps:p,placement:g})=>i.jsx(J,{...p,style:{transformOrigin:g==="bottom"?"center top":"center bottom"},children:i.jsx(K,{children:i.jsx(Y,{onClickAway:C,children:i.jsx(Q,{id:"split-button-menu",autoFocusItem:!0,children:o.map((s,y)=>i.jsx(X,{selected:y===e,onClick:j=>z(j,y),children:s},s))})})})})})]})}try{T.displayName="DropdownSelect",T.__docgenInfo={description:"Renders a button group that acts as a select group",displayName:"DropdownSelect",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"string[]"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!1,type:{name:"((selectedIndex: number) => void)"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"((selectedIndex: number) => void)"}},buttonGroupAriaLabel:{defaultValue:null,description:"",name:"buttonGroupAriaLabel",required:!1,type:{name:"string"}}}}}catch{}export{ro as B,T as D};