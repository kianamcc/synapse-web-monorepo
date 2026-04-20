import{S as a,E as s}from"./ErrorPage-DiAxTARt.js";import"./iframe-Bs_Prdk_.js";import"./index-Chi_LkuB.js";import"./useDOI-pkgTKnMj.js";import"./waitForAsyncResult-iLgfRtaq.js";import"./useMessage-DNDkYAFK.js";import"./useUserBundle-CXGw3t_9.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-fiIuTmNs.js";import"./DialogBase-CNTtoPKS.js";import"./Close-Dhu31KS6.js";import"./HelpPopover-DsZu1FFV.js";import"./MarkdownPopover-CEEU5Nmq.js";import"./LightTooltip-COqi4IFI.js";import"./MarkdownSynapse-BoHcENa8.js";import"./SkeletonButton-B-1H7QMA.js";import"./SkeletonInlineBlock-Djc2NMos.js";import"./SkeletonTable-Q4aEQVXF.js";import"./SkeletonParagraph-NTXhe3CA.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
