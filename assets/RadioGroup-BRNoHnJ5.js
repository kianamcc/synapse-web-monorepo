import{_ as v,b as g}from"./createTheme-CWLQ-DuD.js";import{r as o}from"./index-Cu9bd8lq.js";import{a as j}from"./Radio-eyhGV30W.js";import{j as i}from"./jsx-runtime-DoxjgJx5.js";import{u as C}from"./useControlled-JEQ1v-P8.js";import{u as G}from"./useForkRef-Bm_QQ74L.js";import{u as b}from"./useId-g68bhPgm.js";import{F as P}from"./FormGroup-DbSnk97O.js";const V=["actions","children","defaultValue","name","onChange","value"],H=o.forwardRef(function(a,l){const{actions:c,children:d,defaultValue:m,name:f,onChange:r,value:p}=a,R=v(a,V),t=o.useRef(null),[u,n]=C({controlled:p,default:m,name:"RadioGroup"});o.useImperativeHandle(c,()=>({focus:()=>{let e=t.current.querySelector("input:not(:disabled):checked");e||(e=t.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);const h=G(l,t),s=b(f),x=o.useMemo(()=>({name:s,onChange(e){n(e.target.value),r&&r(e,e.target.value)},value:u}),[s,r,n,u]);return i.jsx(j.Provider,{value:x,children:i.jsx(P,g({role:"radiogroup",ref:h},R,{children:d}))})});export{H as R};