import{E as s,S as a}from"./ErrorPage-CaZz6Oq2.js";import"./iframe-DPeQX9IY.js";import"./index-Chi_LkuB.js";import"./useDOI-BGvs4rIg.js";import"./waitForAsyncResult-CWRbvc49.js";import"./useMessage-DHc4buoh.js";import"./useUserBundle--Ku81fgt.js";import"./useSuspenseQuery-CVo65e5I.js";import"./ConfirmationDialog-CbSXaIL2.js";import"./DialogBase-5Fic6i17.js";import"./Close-DWJQu82H.js";import"./HelpPopover-Br--8Bfi.js";import"./MarkdownPopover-najxU_eq.js";import"./LightTooltip-Oi_KxvmH.js";import"./MarkdownSynapse-WzDgSYq4.js";import"./SkeletonButton-BCmBwLom.js";import"./SkeletonInlineBlock-CaY9GCqL.js";import"./SkeletonTable-BduDk56Z.js";import"./SkeletonParagraph-Qv67bFel.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
