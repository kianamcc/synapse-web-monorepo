import{S as o,E as s}from"./ErrorPage-Dc_32fk4.js";import"./iframe--e7tPOH7.js";import"./index-Chi_LkuB.js";import"./useDOI-BObVbmj4.js";import"./waitForAsyncResult-FypeM4e3.js";import"./useMessage-CY2Up8vs.js";import"./useUserBundle-Cvjt2mpu.js";import"./ConfirmationDialog-DPfClze9.js";import"./DialogBase-DNF9auJc.js";import"./Close-B-eQ4kzT.js";import"./HelpPopover-D1896MTn.js";import"./MarkdownPopover-DgdSpLQA.js";import"./LightTooltip-CfxxK8Nb.js";import"./MarkdownSynapse-Bzo0baHo.js";import"./SkeletonButton-_aLRz4g8.js";import"./SkeletonInlineBlock-CYh7Z-UU.js";import"./SkeletonTable-CaoeDxPi.js";import"./SkeletonParagraph-DxfKrJwN.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
