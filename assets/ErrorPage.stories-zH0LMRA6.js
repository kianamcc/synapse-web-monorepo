import{E as s,S as a}from"./ErrorPage-D1LgjGU-.js";import"./iframe-CAB19BbH.js";import"./index-Chi_LkuB.js";import"./useDOI-CnizOr7L.js";import"./waitForAsyncResult-DBhZcOjS.js";import"./useMessage-B0Z8jL15.js";import"./useUserBundle-D6Ieyrcj.js";import"./useSuspenseQuery-zF1b63rt.js";import"./ConfirmationDialog-M8D-sUFp.js";import"./DialogBase-Bewb0Whx.js";import"./Close-CYApig56.js";import"./HelpPopover-BWiIPGwh.js";import"./MarkdownPopover-DcK6NE8b.js";import"./LightTooltip-C9PyqNfw.js";import"./MarkdownSynapse-C75K0Q9-.js";import"./SkeletonButton-Ap83qpg-.js";import"./SkeletonInlineBlock-DsyBz5jn.js";import"./SkeletonTable-B83AcFFC.js";import"./SkeletonParagraph-Chcpv0Ew.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
