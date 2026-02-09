import{E as s,S as a}from"./ErrorPage-Cu5jSCLB.js";import"./iframe-_RRtoCIB.js";import"./index-Chi_LkuB.js";import"./useDOI-CSeFjDbg.js";import"./waitForAsyncResult-DZTAAb8n.js";import"./useMessage-DOGxeHpj.js";import"./useUserBundle-B0qXkO2d.js";import"./useSuspenseQuery-IQfUTR9I.js";import"./ConfirmationDialog-ClTxt1UC.js";import"./DialogBase-Df86xRKf.js";import"./Close-B1mFQnan.js";import"./HelpPopover-BaNB0Qm4.js";import"./MarkdownPopover-Bys0kR41.js";import"./LightTooltip-CsErXMAn.js";import"./MarkdownSynapse-BNNvc1Ls.js";import"./SkeletonButton-CqYg87XU.js";import"./SkeletonInlineBlock-C6vP7s5M.js";import"./SkeletonTable-S1zm26Db.js";import"./SkeletonParagraph-D0b3NNq9.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...o.parameters?.docs?.source}}};const A=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,o as Unavailable,A as __namedExportsOrder,U as default};
