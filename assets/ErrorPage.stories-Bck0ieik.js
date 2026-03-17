import{E as s,S as o}from"./ErrorPage-B4JJAO3Q.js";import"./iframe-I8dsMSSM.js";import"./index-Chi_LkuB.js";import"./useDOI-Cm-fd4B9.js";import"./waitForAsyncResult-TOSMjQOK.js";import"./useMessage-Cs9lD5zI.js";import"./useUserBundle-BguAd_7C.js";import"./ConfirmationDialog-DLGB6ehz.js";import"./DialogBase-mHGOMstB.js";import"./Close-D1LcmWDM.js";import"./HelpPopover-BxQCnu74.js";import"./MarkdownPopover-Hp3QtlvD.js";import"./LightTooltip-DuvS2K_c.js";import"./MarkdownSynapse-CuDNblsf.js";import"./SkeletonButton-CmYn4uiY.js";import"./SkeletonInlineBlock-C0iISjKy.js";import"./SkeletonTable-DFj9MMPK.js";import"./SkeletonParagraph-CBxS9HL2.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
