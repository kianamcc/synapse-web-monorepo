import{E as s,S as o}from"./ErrorPage-CB7KTDuE.js";import"./iframe-D4dZwAiu.js";import"./index-Chi_LkuB.js";import"./useDOI-ugSBOuPA.js";import"./waitForAsyncResult-Ce-jWYH-.js";import"./useMessage-BPj7144t.js";import"./useUserBundle-DJaOK7gx.js";import"./ConfirmationDialog-0mvEAmvI.js";import"./DialogBase-CZmZCl2F.js";import"./Close-pxcZfnaD.js";import"./HelpPopover-COkmGEHV.js";import"./MarkdownPopover-C1RJbRCi.js";import"./LightTooltip-Cpk7XR6L.js";import"./MarkdownSynapse-_XkOqT-B.js";import"./SkeletonButton-BF6SPb4p.js";import"./SkeletonInlineBlock-BE4VGVg9.js";import"./SkeletonTable-8IE5S5u8.js";import"./SkeletonParagraph-CCi1oakt.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
