import{E as g,S as o}from"./ErrorPage-RYIBvzWA.js";import"./iframe-BrPoS5FB.js";import"./index-r8ZA1smB.js";import"./useDOI-n5dp3L_c.js";import"./waitForAsyncResult-DCmr7Fsf.js";import"./useMessage-WAr7xDpI.js";import"./ConfirmationDialog-Bgh6yuP1.js";import"./DialogBase-BJrucS8y.js";import"./Close-CvEU7XhU.js";import"./HelpPopover-CWV6J_Zt.js";import"./MarkdownPopover-xwCpjde8.js";import"./LightTooltip-BkLp4ozd.js";import"./MarkdownSynapse-OD1xjODX.js";import"./SkeletonButton-2N5ZG66q.js";import"./SkeletonInlineBlock-CU1JeY6s.js";import"./SkeletonTable-7Ts_fDyw.js";import"./SkeletonParagraph-BRiZwInB.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
