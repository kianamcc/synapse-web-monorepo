import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{r as a}from"./index-Cu9bd8lq.js";import{l as v,m as x,n as w}from"./useFiles-od6qlkTh.js";import{F}from"./VerificationSubmission-DL9jxYsQ.js";import{S as V}from"./SynapseConstants-D-PFMQZz.js";import"./RegularExpressions-CmcMRs19.js";import"./OrientationBanner-BX0HvA84.js";function g({params:e}){const{accessToken:i}=v(),[d,c]=a.useState(),[u,f]=a.useState(),o=e.width??"",r=e.height??"";a.useEffect(()=>{const y=()=>{if(e.videoId)c(`https://www.youtube.com/embed/${e.videoId}`);else if(e.vimeoId)c(`https://player.vimeo.com/video/${e.vimeoId}`);else{const n=e.oggSynapseId||e.mp4SynapseId||e.webmSynapseId;x(i,n).then(s=>{const p=[{associateObjectId:n,associateObjectType:F.FileEntity,fileHandleId:s.dataFileHandleId}];h(p,s.dataFileHandleId)})}},h=(n,s)=>{w({includeFileHandles:!1,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:n},i).then(l=>{const{preSignedURL:S}=l.requestedFiles.filter(I=>I.fileHandleId===s)[0];f(S)}).catch(l=>{console.error("Error on getting video ",l)})};y()},[d,e,i,r,o]);const m=()=>u?i?t.jsx("video",{controls:!0,src:u,width:o,height:r,"data-testid":"synapse-video-url",children:"It does not support the HTML5 Video element."}):t.jsxs("p",{children:["You will need to",t.jsx("button",{"data-testid":"video-login",className:`${V} sign-in-btn default
                `,children:"Sign in"}),"in for access to that resource."]}):d?t.jsx("iframe",{title:"video frame",src:d,width:o,height:r}):t.jsx(t.Fragment,{});return t.jsx(m,{})}try{g.displayName="SynapseVideo",g.__docgenInfo={description:"",displayName:"SynapseVideo",props:{params:{defaultValue:null,description:"",name:"params",required:!0,type:{name:"{ width?: string | undefined; height?: string | undefined; videoId?: string | undefined; vimeoId?: string | undefined; oggSynapseId?: string | undefined; mp4SynapseId?: string | undefined; webmSynapseId?: string | undefined; }"}}}}}catch{}export{g as S};