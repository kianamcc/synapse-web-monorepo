import{E as s,S as o}from"./ErrorPage-vmITzqnM.js";import"./iframe-CaNoDgkX.js";import"./index-Chi_LkuB.js";import"./useDOI-H8V2Yy2C.js";import"./waitForAsyncResult-DKQqDJ0Y.js";import"./useMessage-mxVV67Em.js";import"./useUserBundle-BaZ5uidp.js";import"./ConfirmationDialog-CvYo2dLO.js";import"./DialogBase-ymiBsjv4.js";import"./Close-Cj8W86JB.js";import"./HelpPopover-B-vfXunY.js";import"./MarkdownPopover-Ds9kb0yD.js";import"./LightTooltip-LycdI5lW.js";import"./MarkdownSynapse-BNV4Ce-k.js";import"./SkeletonButton-Cy68UPlr.js";import"./SkeletonInlineBlock-DFgc16ha.js";import"./SkeletonTable-BK7ah3SB.js";import"./SkeletonParagraph-C3PSWy-y.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
