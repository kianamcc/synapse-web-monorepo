import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as f}from"./index-Cu9bd8lq.js";import{l as w,S as j,a1 as _,P as N,bF as R,X as v}from"./useFiles-od6qlkTh.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./RegularExpressions-CmcMRs19.js";import"./OrientationBanner-BX0HvA84.js";import{I as F}from"./IconSvg-D7Q47tWe.js";import{u as T}from"./index-S6oMIluj.js";import{u as C}from"./useInfiniteQuery-D4rsgeNc.js";import{S as E}from"./SkeletonTable-WTp71Rcs.js";import{a as k}from"./useGetUserTeams-CjbFtB0E.js";import{T as U}from"./Typography-CaL9sKMg.js";import{S as b}from"./Skeleton-D27KV3ni.js";function L(s,l){const{accessToken:c,keyFactory:a}=w();return C({...l,initialPageParam:void 0,queryKey:a.getUserChallengesQueryKey(s),queryFn:async o=>{const r=await j.getUserChallenges(c,s,o.pageParam,10);if(r.results.length>0){const t=Array.from(r.results,i=>i.projectId),u=await j.getEntityHeadersByIds(t);return{results:Array.from(r.results,(i,d)=>({challenge:i,projectHeader:u.results[d]})),totalNumberOfResults:r.totalNumberOfResults}}return{results:[],totalNumberOfResults:r.totalNumberOfResults}},getNextPageParam:(o,r)=>{if(o.results.length>0)return r.length*10}})}function S(s,l,c){const{accessToken:a,keyFactory:o}=w();return C({...c,queryKey:o.getUserProjectsQueryKey(s,l),queryFn:async r=>j.getUserProjects(s,{...l,nextPageToken:r.pageParam},a),initialPageParam:void 0,getNextPageParam:r=>r.nextPageToken})}function y({userId:s}){const l=_(),{ref:c,inView:a}=T(),{data:o,status:r,isFetching:t,isLoading:u,hasNextPage:g,fetchNextPage:i,isError:d,error:p}=L(s);f.useEffect(()=>{d&&p&&l(p)},[d,p,l]),f.useEffect(()=>{r==="success"&&!t&&g&&i&&a&&i()},[r,t,g,i,a]);const m=(o==null?void 0:o.pages.flatMap(n=>n.results))??[];return e.jsxs(e.Fragment,{children:[m.length>0&&e.jsxs(e.Fragment,{children:[m.map(n=>n&&n.challenge&&n.projectHeader?e.jsx("p",{children:e.jsx("a",{target:"_self",rel:"noopener noreferrer",href:`${N.PORTAL}Synapse:${n.challenge.projectId}/challenge`,children:n.projectHeader.name})},`user-challenge-list-item-${n.challenge.projectId}`):!1),e.jsx("div",{ref:c})]}),!t&&m.length==0&&e.jsx("div",{children:"Empty"}),u&&e.jsx(E,{numRows:5,numCols:1})]})}try{y.displayName="UserChallenges",y.__docgenInfo={description:"",displayName:"UserChallenges",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}function x({userId:s}){const l=_(),{ref:c,inView:a}=T(),o={},{data:r,status:t,isFetching:u,isLoading:g,hasNextPage:i,fetchNextPage:d,isError:p,error:m}=S(s,o);f.useEffect(()=>{p&&m&&l(m)},[p,m,l]),f.useEffect(()=>{t==="success"&&!u&&i&&d&&a&&d()},[t,u,i,d,a]);const n=(r==null?void 0:r.pages.flatMap(h=>h.results))??[];return e.jsxs(e.Fragment,{children:[n.length>0&&e.jsxs(e.Fragment,{children:[n.map(h=>h?e.jsx("p",{children:e.jsx("a",{target:"_self",rel:"noopener noreferrer",href:`${N.PORTAL}Synapse:${h.id}`,children:h.name})},`user-project-list-item-${h.id}`):!1),e.jsx("div",{ref:c})]}),!u&&n.length==0&&e.jsx("div",{children:"Empty"}),g&&e.jsx(E,{numRows:5,numCols:1})]})}try{x.displayName="UserProjects",x.__docgenInfo={description:"",displayName:"UserProjects",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}function P({userId:s}){const l=_(),{ref:c,inView:a}=T(),{data:o,status:r,isFetching:t,isLoading:u,hasNextPage:g,fetchNextPage:i,isError:d,error:p}=k(s);f.useEffect(()=>{d&&p&&l(p)},[d,p,l]),f.useEffect(()=>{r==="success"&&!t&&g&&i&&a&&i()},[r,t,g,i,a]);const m=(o==null?void 0:o.pages.flatMap(n=>n.results))??[];return e.jsxs(e.Fragment,{children:[m.length>0&&e.jsxs(e.Fragment,{children:[m.map(n=>n?e.jsx("p",{children:e.jsx("a",{target:"_self",rel:"noopener noreferrer",href:`${N.PORTAL}Team:${n.id}`,children:n.name})},`user-team-list-item-${n.id}`):!1),e.jsx("div",{ref:c})]}),!t&&m.length==0&&e.jsx("div",{children:"Empty"}),u&&e.jsx(E,{numRows:5,numCols:1})]})}try{P.displayName="UserTeams",P.__docgenInfo={description:"",displayName:"UserTeams",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}function I({userId:s}){var r;const[l,c]=f.useState("Projects"),{data:a}=R(s),o=f.useMemo(()=>[{name:"Projects",iconName:"dashboard",render:e.jsx(x,{userId:s})},{name:"Teams",iconName:"peopleTwoTone",render:e.jsx(P,{userId:s})},{name:"Challenges",iconName:"challengesTwoTone",render:e.jsx(y,{userId:s})}],[s]);return e.jsxs("div",{className:"UserProfileLinks",children:[e.jsxs(U,{variant:"headline2",className:"title",children:[a&&e.jsxs(e.Fragment,{children:[a==null?void 0:a.userName,"'s Items"]}),!a&&e.jsx(b,{width:"75%"})]}),e.jsx("div",{className:"Tabs",children:o.map(t=>e.jsx("div",{className:"Tab",role:"tab",onClick:u=>{u.stopPropagation(),c(t.name)},"aria-selected":l===t.name,children:e.jsxs(U,{variant:"buttonLink",children:[e.jsx(F,{icon:t.iconName})," ",t.name]})},t.name))}),e.jsx("div",{className:"TabContent",children:e.jsx(v,{children:(r=o.find(t=>l===t.name))==null?void 0:r.render})})]})}try{I.displayName="UserProfileLinks",I.__docgenInfo={description:"",displayName:"UserProfileLinks",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}export{I as U};