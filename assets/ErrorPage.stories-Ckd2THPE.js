import{E as s,S as a}from"./ErrorPage-BDWvo4Jh.js";import"./iframe-HhNUql8D.js";import"./index-Chi_LkuB.js";import"./useDOI-IVD4L0EB.js";import"./waitForAsyncResult-D6MYwWvo.js";import"./useMessage-DMcpC4w-.js";import"./useUserBundle-B3ONxnuI.js";import"./useSuspenseQuery-DB6yHRv0.js";import"./ConfirmationDialog-X-q5EAD5.js";import"./DialogBase-CixZag-K.js";import"./Close-DwkMpKYS.js";import"./HelpPopover-HYfG1omk.js";import"./MarkdownPopover-C0XojMIG.js";import"./LightTooltip-N2Yg4ppW.js";import"./MarkdownSynapse-Der_vikg.js";import"./SkeletonButton-CAAREen-.js";import"./SkeletonInlineBlock-Ckp06Ekm.js";import"./SkeletonTable-EUCE1WAM.js";import"./SkeletonParagraph-DMnpDLUG.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
