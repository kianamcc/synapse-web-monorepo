import{S as a,E as s}from"./ErrorPage-DUjbB1LG.js";import"./iframe-BB1CyglU.js";import"./index-Chi_LkuB.js";import"./useDOI-BjvxUC3T.js";import"./waitForAsyncResult-vZXU6LSu.js";import"./useMessage-Dp_nNLvb.js";import"./useUserBundle-Bf-9hfkn.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-c8z7MNMM.js";import"./DialogBase-ZmMylcay.js";import"./Close-Bm3BYI87.js";import"./HelpPopover-DpOHdoba.js";import"./MarkdownPopover-DUEIEIHd.js";import"./LightTooltip-B9cGyM6Q.js";import"./MarkdownSynapse-Bp46o5vr.js";import"./SkeletonButton-q-Dp6RFE.js";import"./SkeletonInlineBlock-dhIvV08s.js";import"./SkeletonTable-EsMLBsV_.js";import"./SkeletonParagraph-CfPPR8eC.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
