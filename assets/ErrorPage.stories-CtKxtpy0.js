import{S as o,E as s}from"./ErrorPage-CNjppOMS.js";import"./iframe-DhktRnIr.js";import"./index-Chi_LkuB.js";import"./useDOI-KP4UwsD_.js";import"./waitForAsyncResult-BsukL3T9.js";import"./useMessage-CNETtoVV.js";import"./useUserBundle-Dg86kmyv.js";import"./ConfirmationDialog-JblNvnag.js";import"./DialogBase-BCDCVbM5.js";import"./Close-B6SaOhzQ.js";import"./HelpPopover-BkWnk-uM.js";import"./MarkdownPopover-xKre6e2Q.js";import"./LightTooltip-BNr3uAC-.js";import"./MarkdownSynapse-CedqB2vR.js";import"./SkeletonButton-D2U44ACQ.js";import"./SkeletonInlineBlock-XnMenv0L.js";import"./SkeletonTable-PLxwnxI1.js";import"./SkeletonParagraph-BmLXaGRK.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
