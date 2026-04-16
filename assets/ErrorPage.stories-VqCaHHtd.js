import{S as o,E as s}from"./ErrorPage-CNv6g7NY.js";import"./iframe-BzzjdWy2.js";import"./index-Chi_LkuB.js";import"./useDOI-DZepQ3Ct.js";import"./waitForAsyncResult-DK-s6NML.js";import"./useMessage-DXveCgnD.js";import"./useUserBundle-pMV1EYk7.js";import"./ConfirmationDialog--Me4EPSq.js";import"./DialogBase-CGfYT4BU.js";import"./Close-D2aGDGHY.js";import"./HelpPopover-BVPs66Bt.js";import"./MarkdownPopover-BIgmn6Ru.js";import"./LightTooltip-BMWg9unl.js";import"./MarkdownSynapse-17VbQenC.js";import"./SkeletonButton-BhLIT0JK.js";import"./SkeletonInlineBlock-DNuGrhmv.js";import"./SkeletonTable-CsxmarD8.js";import"./SkeletonParagraph-BgDI2leK.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
