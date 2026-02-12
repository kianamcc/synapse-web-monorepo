import{E as s,S as a}from"./ErrorPage-BIlULR10.js";import"./iframe-Cw2Vf6_R.js";import"./index-Chi_LkuB.js";import"./useDOI-BiBmGNxm.js";import"./waitForAsyncResult-DgUem_mP.js";import"./useMessage-CmRbhGSB.js";import"./useUserBundle-Dp6-PaGP.js";import"./useSuspenseQuery-Cn71fWAt.js";import"./ConfirmationDialog-CpDn5qEd.js";import"./DialogBase-Ch4N59fU.js";import"./Close-WUycMzMO.js";import"./HelpPopover-CVM1ST3g.js";import"./MarkdownPopover-ARMdgv36.js";import"./LightTooltip-CsZ7UZ4g.js";import"./MarkdownSynapse-Dz3rltmw.js";import"./SkeletonButton-CH7PSBg9.js";import"./SkeletonInlineBlock-BXybPdXq.js";import"./SkeletonTable-CFa2K4dK.js";import"./SkeletonParagraph-DgBCouD8.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
