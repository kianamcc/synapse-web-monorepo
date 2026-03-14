import{E as s,S as o}from"./ErrorPage-BX0_RqgR.js";import"./iframe-CZHSx5wE.js";import"./index-Chi_LkuB.js";import"./useDOI-DCewJn1d.js";import"./waitForAsyncResult-BaxXF4hG.js";import"./useMessage-S8VXTBMn.js";import"./useUserBundle-Cv-fJG41.js";import"./ConfirmationDialog-pnn_aK2g.js";import"./DialogBase-CS2gTNzV.js";import"./Close-Ds5z5nV-.js";import"./HelpPopover-AzM6-1Mr.js";import"./MarkdownPopover-_55D8pmQ.js";import"./LightTooltip-Bl7I4CQL.js";import"./MarkdownSynapse-phzYM2Y3.js";import"./SkeletonButton-BE152swZ.js";import"./SkeletonInlineBlock-BWjEXTNa.js";import"./SkeletonTable-BtPTkHAP.js";import"./SkeletonParagraph-BXCrfssX.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
