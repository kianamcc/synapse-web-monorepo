import{E as s,S as o}from"./ErrorPage-CFoxdVcQ.js";import"./iframe-B232wCNe.js";import"./index-Chi_LkuB.js";import"./useDOI--TkEcPMh.js";import"./waitForAsyncResult-qP6KOG6F.js";import"./useMessage-3AUw4jn7.js";import"./useUserBundle-CeFUDuAK.js";import"./ConfirmationDialog-BvIFxS0n.js";import"./DialogBase-CdGKFNop.js";import"./Close-B-DQ6RtW.js";import"./HelpPopover-0TadkfCC.js";import"./MarkdownPopover-DhG8HMhS.js";import"./LightTooltip-krKtsD_O.js";import"./MarkdownSynapse-C0MRPwg8.js";import"./SkeletonButton-BFqV1Bjq.js";import"./SkeletonInlineBlock-B1yQCAbt.js";import"./SkeletonTable-DsTP05oa.js";import"./SkeletonParagraph-D6S7cLaW.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
