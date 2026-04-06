import{S as o,E as s}from"./ErrorPage-Di_dQvlX.js";import"./iframe-BO8yZwbi.js";import"./index-Chi_LkuB.js";import"./useDOI-BA_yTV3V.js";import"./waitForAsyncResult-BzI7v0OA.js";import"./useMessage-BAijxOhF.js";import"./useUserBundle-D6W7YJ3k.js";import"./ConfirmationDialog-BhoxDMnX.js";import"./DialogBase-C85pq0MZ.js";import"./Close-BzejB7Wi.js";import"./HelpPopover-fFTFNAOq.js";import"./MarkdownPopover-Dp1_UHGA.js";import"./LightTooltip-NUD2olvk.js";import"./MarkdownSynapse-BvDWhdGZ.js";import"./SkeletonButton-BjMHDMih.js";import"./SkeletonInlineBlock-DsdOdTux.js";import"./SkeletonTable-pZFOgUxM.js";import"./SkeletonParagraph-B75rYAhF.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
