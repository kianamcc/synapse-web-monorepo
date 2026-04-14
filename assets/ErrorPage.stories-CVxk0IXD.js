import{S as o,E as s}from"./ErrorPage-n3jliuWI.js";import"./iframe-BbyAgVod.js";import"./index-Chi_LkuB.js";import"./useDOI-BWak2hTe.js";import"./waitForAsyncResult-B2rxT93c.js";import"./useMessage-CqV0asn7.js";import"./useUserBundle-BZrAVgQo.js";import"./ConfirmationDialog-D-tV9GIR.js";import"./DialogBase-nCS3ahcQ.js";import"./Close-BBCw0Jfc.js";import"./HelpPopover-BKQ_lBJ3.js";import"./MarkdownPopover-BUo7fnkz.js";import"./LightTooltip-CjTxmPMX.js";import"./MarkdownSynapse-7KNTNWWL.js";import"./SkeletonButton-CvgBxsOq.js";import"./SkeletonInlineBlock-CGRSHTJp.js";import"./SkeletonTable-8hMWU9b8.js";import"./SkeletonParagraph-TSyA2Bdi.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
