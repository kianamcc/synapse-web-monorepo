import{S as o,E as s}from"./ErrorPage-BflnBTFu.js";import"./iframe--4PIu_qy.js";import"./index-Chi_LkuB.js";import"./useDOI-ezahaMcF.js";import"./waitForAsyncResult-B5IDsFzt.js";import"./useMessage-DkbbiRSH.js";import"./useUserBundle-D0IPmJJX.js";import"./ConfirmationDialog-hlwM9UyB.js";import"./DialogBase-KOdTuKY_.js";import"./Close-Cka8SdIA.js";import"./HelpPopover-CDKz_QnM.js";import"./MarkdownPopover-CN870fqO.js";import"./LightTooltip-CM_IaFmM.js";import"./MarkdownSynapse-g98YneNH.js";import"./SkeletonButton-CbJBGnT-.js";import"./SkeletonInlineBlock-FN6COppS.js";import"./SkeletonTable-6mGZvVCs.js";import"./SkeletonParagraph-DjKVaY8f.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
