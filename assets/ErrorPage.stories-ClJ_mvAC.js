import{E as g,S as o}from"./ErrorPage-CBh0B6ap.js";import"./iframe-CilUHbPg.js";import"./index-r8ZA1smB.js";import"./useDOI-CsjY5jnw.js";import"./waitForAsyncResult-I8jff6SS.js";import"./useMessage-BVI5l_RY.js";import"./ConfirmationDialog-CmKdHCN4.js";import"./DialogBase-C-nhtl71.js";import"./Close-C47av42V.js";import"./HelpPopover-C4EQhFdh.js";import"./MarkdownPopover-CXrifCK2.js";import"./LightTooltip-CnXLnWLu.js";import"./MarkdownSynapse-BIpeO25x.js";import"./SkeletonButton-CSbYuARp.js";import"./SkeletonInlineBlock-CTT3cgnO.js";import"./SkeletonTable-BBjGNDxT.js";import"./SkeletonParagraph-Db2vPRz1.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
