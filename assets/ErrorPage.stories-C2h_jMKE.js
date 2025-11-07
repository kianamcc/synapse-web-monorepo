import{E as g,S as o}from"./ErrorPage-Bg9Kg7Ix.js";import"./iframe-i1vzbyyB.js";import"./index-r8ZA1smB.js";import"./useDOI-B6jRE8yQ.js";import"./waitForAsyncResult-CKWl8OLu.js";import"./useMessage-BGpWdHR2.js";import"./ConfirmationDialog-CjCOKckI.js";import"./DialogBase-CnzJW4Vm.js";import"./Close-BcpwEnYM.js";import"./HelpPopover-D6TWnFMx.js";import"./MarkdownPopover-BjxGRa1i.js";import"./LightTooltip-DG7_ftuI.js";import"./MarkdownSynapse-ofrcwXhb.js";import"./SkeletonButton-BHwx8d5H.js";import"./SkeletonInlineBlock-CUOfhEKh.js";import"./SkeletonTable-B_XrK9-X.js";import"./SkeletonParagraph-CCi6Cu6y.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...(p=(t=r.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var n,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,y,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...(d=(y=a.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const v=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,a as Unavailable,v as __namedExportsOrder,k as default};
