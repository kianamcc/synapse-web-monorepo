import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{r as a,a as m}from"./index-Cu9bd8lq.js";import{s as p}from"./styled-BNZh1-oq.js";import{F as c,I as u}from"./FormControl-EVF2GEo2.js";import{f,I as y}from"./InputLabel-CtY5MIT3.js";import{i as x}from"./inputBaseClasses-u371dScS.js";const n=p(c,{label:"StyledFormControl"})(({theme:e})=>({"& label":{fontSize:"14px",transform:"none"},[`& .${f.root}`]:{marginLeft:"0","&.Mui-error":{color:"#c13415"}},[`& .${x.root}`]:{marginTop:e.spacing(3)},"& .MuiInputBase-multiline":{padding:"0px"},"& fieldset":{border:"none"}}));try{n.displayName="StyledFormControl",n.__docgenInfo={description:"",displayName:"StyledFormControl",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}function i(e){const o=a.useId(),{noWrapInFormControl:l,label:_,...s}=e,d=a.useMemo(()=>l?t=>r.jsx(m.Fragment,{children:t.children}):t=>r.jsx(n,{fullWidth:!0,sx:{my:1},children:t.children}),[l]);return r.jsxs(d,{children:[e.label&&r.jsx(y,{htmlFor:e.id||o,sx:{fontWeight:700,mb:"4px",pointerEvents:"unset","&::after":({palette:t})=>({content:e.required?'"*"':void 0,marginLeft:"3px",color:t.secondary.main})},children:e.label}),r.jsx(u,{id:o,...s})]})}try{i.displayName="TextField",i.__docgenInfo={description:"A styled text field built using MUI components and designed to match the Sage Design System (SDS) input fields.",displayName:"TextField",props:{noWrapInFormControl:{defaultValue:null,description:"",name:"noWrapInFormControl",required:!1,type:{name:"boolean"}}}}}catch{}export{n as S,i as T};