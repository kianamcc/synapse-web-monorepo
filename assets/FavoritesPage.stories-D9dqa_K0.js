import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{r as i}from"./index-Cu9bd8lq.js";import{S as I}from"./Sort-DSm6XQDI.js";import{D as d}from"./VerificationSubmission-DL9jxYsQ.js";import{l as w,q as L,P as O}from"./useFiles-od6qlkTh.js";import{S as P}from"./LoadingScreen-DPVCHW1G.js";import{c as b,b as k}from"./useFavorites-CVsY8btu.js";import{I as v}from"./IconSvg-D7Q47tWe.js";import{c as R,e as A}from"./RegularExpressions-CmcMRs19.js";import{E as _}from"./EntityIcon-CIHJV2Sc.js";import{a as G}from"./Form-icUcw2KK.js";import{T as $}from"./Table-gb1PtxFe.js";import{T as q}from"./Tooltip-CQm22TSO.js";import"./useQuery-BEUP4ZKU.js";import"./utils-BECe8vEQ.js";import"./OrientationBanner-BX0HvA84.js";import"./FullWidthAlert-DhexvuWd.js";import"./Alert-D00uobdd.js";import"./createTheme-CWLQ-DuD.js";import"./index-GEGPABih.js";import"./styled-BNZh1-oq.js";import"./mergeSlotProps-CZobtCgD.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon-BhV3a4Zr.js";import"./Paper-CK0RlmZk.js";import"./IconButton-DDEa3AGu.js";import"./ButtonBase-CE85FUiZ.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-Dwyinhto.js";import"./Box-D4TeY3X6.js";import"./AlertTitle-CVJKKi4h.js";import"./Typography-CaL9sKMg.js";import"./utils-DoOf4pPF.js";import"./index-zcEXKDIA.js";import"./Grow-Bq_CDIHS.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Button-CnDFdqMc.js";import"./SynapseConstants-D-PFMQZz.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-Dmc1pswj.js";import"./CheckCircleTwoTone-JZD1d26p.js";import"./calculateFriendlyFileSize-BVprIR7U.js";import"./Skeleton-D27KV3ni.js";import"./inputBaseClasses-u371dScS.js";import"./Fade-n8rayaob.js";import"./index-fnC48NPc.js";import"./Link-B86BngSw.js";import"./cloneDeep-aDrSbqZk.js";import"./_initCloneObject-CKdTzPLh.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-DvLBLCla.js";import"./dayjs.min-D1RcYm3-.js";import"./merge-CCcBxO6N.js";import"./identity-DKeuBCMA.js";import"./Backdrop-CzbJFw0E.js";import"./LinearProgress-3w3Lw59m.js";import"./useMutation-BUHlmdy0.js";import"./useInfiniteQuery-D4rsgeNc.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./LayersTwoTone-BdLgRYRO.js";import"./ErrorOutlined-T6sjfcxT.js";import"./GetAppTwoTone-mQ-VL1kM.js";import"./InfoOutlined-DlYufPXz.js";import"./DeleteTwoTone-Dev5FGll.js";import"./ThemeProvider-BS-PCUTx.js";import"./index-SDyqs4cU.js";import"./Col-1nUqr21k.js";import"./createWithBsPrefix-B-Bo-ltc.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";function z(){const{accessToken:f}=w(),[t,h]=i.useState(void 0),[s,y]=i.useState(""),[p,T]=i.useState(void 0),[x,n]=i.useState(),{data:c,isFetching:D,isError:u,error:l}=b();i.useEffect(()=>{u&&l&&n(l)},[u,l]),i.useEffect(()=>{n(f?void 0:new Error("Please sign in to access your favorites."))},[f]);const g=(e,o)=>{const a=e.toLowerCase();return o.filter(F=>F.name.toLowerCase().indexOf(a)>=0)};i.useEffect(()=>{if(c){let e=[...c.results];t&&e.sort((o,a)=>t.direction=="DESC"?o[t.field].toLowerCase()>a[t.field].toLowerCase()?1:-1:o[t.field].toLowerCase()<a[t.field].toLowerCase()?1:-1),s&&(e=g(s,e)),T(e)}},[c,s,t]);const{mutate:N}=k(),j=e=>h&&r.jsx(I,{role:"button",style:{height:"20px"},active:(t==null?void 0:t.field)===e,direction:(t==null?void 0:t.field)===e?t.direction==="DESC"?d.DESC:d.ASC:d.DESC,onClick:()=>{const o=e===(t==null?void 0:t.field)?t.direction==="ASC"?"DESC":"ASC":"DESC";h({field:e,direction:o})}});return x?r.jsx(L,{error:x}):r.jsxs("div",{className:"FavoritesPage",children:[r.jsxs("div",{className:"searchInputWithIcon",children:[r.jsx(v,{icon:"searchOutlined"}),r.jsx(G.Control,{type:"search",placeholder:"Favorite Name",value:s,onChange:e=>{y(e.target.value)}})]}),p&&p.length>0&&r.jsx("div",{className:"bootstrap-4-backport",children:r.jsxs($,{striped:!0,responsive:!0,className:"FavoritesTable",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{}),r.jsxs("th",{children:["Name",r.jsx("span",{children:j("name")})]}),r.jsxs("th",{children:["Type",r.jsx("span",{children:j("type")})]})]})}),r.jsx("tbody",{children:p.map(e=>{if(e){const o=R(e.type);return r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(q,{title:"Click the star to remove this item from your favorites",enterNextDelay:300,placement:"right",children:r.jsx("a",{onClick:()=>{N(e.id)},className:"ignoreLink",children:r.jsx(v,{icon:"fav",sx:{color:"#EDC766"}})})})}),r.jsx("td",{children:r.jsx("a",{rel:"noopener noreferrer",href:`${O.PORTAL}Synapse:${e.id}`,children:e.name})}),r.jsxs("td",{children:[r.jsx(_,{type:o,style:{marginRight:"5px"}}),A(o)]})]},e.id)}else return!1})})]})}),D&&r.jsx("div",{className:"placeholder",children:r.jsx(P,{size:30})})]})}const pe={title:"Synapse/FavoritesPage",component:z},m={};var C,S,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(E=(S=m.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const ne=["Demo"];export{m as Demo,ne as __namedExportsOrder,pe as default};