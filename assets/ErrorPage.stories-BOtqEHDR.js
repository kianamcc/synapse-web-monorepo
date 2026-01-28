import{E as s,S as a}from"./ErrorPage-Bkl4wEKW.js";import"./iframe-DmIbR_r6.js";import"./index-Chi_LkuB.js";import"./useDOI-CkMMxImv.js";import"./waitForAsyncResult-1g8ktSSM.js";import"./useMessage-C0s--yD7.js";import"./useUserBundle-B2LL3X0c.js";import"./useSuspenseQuery-Bb68RTLn.js";import"./ConfirmationDialog-Di6NNHa2.js";import"./DialogBase-ChzVu5cL.js";import"./Close-Bq87bjEk.js";import"./HelpPopover-cKaKE6m4.js";import"./MarkdownPopover-CDin4ext.js";import"./LightTooltip-CYkDKzfj.js";import"./MarkdownSynapse-DuxA3dVB.js";import"./SkeletonButton-vlFvkNkv.js";import"./SkeletonInlineBlock-DFTJODNT.js";import"./SkeletonTable-Bj3J0JYP.js";import"./SkeletonParagraph-BUZlTYNH.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
