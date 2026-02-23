import{E as s,S as a}from"./ErrorPage-Cj2tcLCA.js";import"./iframe-Dmz0OYQW.js";import"./index-Chi_LkuB.js";import"./useDOI-BIOCV4WX.js";import"./waitForAsyncResult-DMyxyCIC.js";import"./useMessage-mcPxLdkD.js";import"./useUserBundle-BQiPRbYK.js";import"./useSuspenseQuery-DBtfLQcz.js";import"./ConfirmationDialog-91A2i7b8.js";import"./DialogBase-D4eQljKx.js";import"./Close-DJMVqFXZ.js";import"./HelpPopover-DDEeoZql.js";import"./MarkdownPopover-BJM8rGXo.js";import"./LightTooltip-B4ee2TOH.js";import"./MarkdownSynapse-BRO4x38K.js";import"./SkeletonButton--ocR4MjZ.js";import"./SkeletonInlineBlock-DMCr-ZDU.js";import"./SkeletonTable-DZOOfuw_.js";import"./SkeletonParagraph-BbQFsbPl.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
