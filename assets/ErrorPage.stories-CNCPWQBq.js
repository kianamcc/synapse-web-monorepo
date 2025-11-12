import{E as g,S as o}from"./ErrorPage-DKSnlSB3.js";import"./iframe-Bvv4ID9O.js";import"./index-r8ZA1smB.js";import"./useDOI-CEy8R18-.js";import"./waitForAsyncResult-CaQ4j6ac.js";import"./useMessage-BbRMg3yz.js";import"./ConfirmationDialog-BWepRO3O.js";import"./DialogBase-DI9hpM3M.js";import"./Close-gfuBCl1y.js";import"./HelpPopover-KjW2Liz1.js";import"./MarkdownPopover-DtkdEBJk.js";import"./LightTooltip-BbQfoeul.js";import"./MarkdownSynapse-BqihxWd0.js";import"./SkeletonButton-CX_iqB-U.js";import"./SkeletonInlineBlock-B4dGOeql.js";import"./SkeletonTable-CrAxGwqy.js";import"./SkeletonParagraph-BrF-J-9t.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...(p=(t=r.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var n,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,y,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...(d=(y=a.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const v=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,a as Unavailable,v as __namedExportsOrder,k as default};
