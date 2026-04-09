import{S as o,E as s}from"./ErrorPage-Clh64ZKb.js";import"./iframe-FDH2xSLc.js";import"./index-Chi_LkuB.js";import"./useDOI-CbBwi-x3.js";import"./waitForAsyncResult-DsZbn-bA.js";import"./useMessage-eUP_8A_a.js";import"./useUserBundle-C0iPIx3M.js";import"./ConfirmationDialog-D1K99bC1.js";import"./DialogBase-ukX_Dfis.js";import"./Close-DbaBw_Hg.js";import"./HelpPopover-CeMxTcbY.js";import"./MarkdownPopover-BINzzL9F.js";import"./LightTooltip-BxuR9X41.js";import"./MarkdownSynapse-DubjqhF7.js";import"./SkeletonButton-xYbyYL9k.js";import"./SkeletonInlineBlock-CrGk-deJ.js";import"./SkeletonTable-BfwZdIL6.js";import"./SkeletonParagraph-BniWr4_C.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...a.parameters?.docs?.source}}};const U=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,a as Unavailable,U as __namedExportsOrder,f as default};
