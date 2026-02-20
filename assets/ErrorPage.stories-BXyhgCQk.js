import{E as s,S as a}from"./ErrorPage-DWjgs77k.js";import"./iframe-CkxBXYUS.js";import"./index-Chi_LkuB.js";import"./useDOI-DuRWjcMD.js";import"./waitForAsyncResult-CdMXMIam.js";import"./useMessage-CJx1Brqh.js";import"./useUserBundle-r9Y7ADD5.js";import"./useSuspenseQuery-CY63kBJ7.js";import"./ConfirmationDialog-CtJfMeS4.js";import"./DialogBase-A-L2CAQ2.js";import"./Close-CMCH1D24.js";import"./HelpPopover-8rjafscZ.js";import"./MarkdownPopover-3C7AALW8.js";import"./LightTooltip-iqHVnLEB.js";import"./MarkdownSynapse-Cl6WuhRF.js";import"./SkeletonButton-BkLf8D0r.js";import"./SkeletonInlineBlock-DEQxpJiN.js";import"./SkeletonTable-BxoX6BC7.js";import"./SkeletonParagraph-DYUWrGET.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
