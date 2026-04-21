import{S as a,E as s}from"./ErrorPage-9cfkBFN-.js";import"./iframe-DOWR2259.js";import"./index-Chi_LkuB.js";import"./useDOI-5fdAJCLU.js";import"./waitForAsyncResult-CSCNGY1O.js";import"./useMessage-3s_0Zzex.js";import"./useUserBundle-HK3fngpg.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-Cb77eqVv.js";import"./DialogBase-BOtiLYHN.js";import"./Close-MTVASP6e.js";import"./HelpPopover-COj67R4q.js";import"./MarkdownPopover-D_jfDB0b.js";import"./LightTooltip-DEgnKIbO.js";import"./MarkdownSynapse-CZF-zxeL.js";import"./SkeletonButton-CL0b5STV.js";import"./SkeletonInlineBlock-dfitKoKa.js";import"./SkeletonTable-juUGe8TZ.js";import"./SkeletonParagraph-tnS4LISQ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
