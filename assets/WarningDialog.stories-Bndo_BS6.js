import{j as o}from"./iframe--4PIu_qy.js";import{W as r}from"./WarningDialog-CM-3pEEg.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-hlwM9UyB.js";import"./DialogBase-KOdTuKY_.js";import"./Close-Cka8SdIA.js";import"./HelpPopover-CDKz_QnM.js";import"./MarkdownPopover-CN870fqO.js";import"./LightTooltip-CM_IaFmM.js";import"./MarkdownSynapse-g98YneNH.js";import"./SkeletonButton-CbJBGnT-.js";import"./SkeletonInlineBlock-FN6COppS.js";import"./SkeletonTable-6mGZvVCs.js";import"./SkeletonParagraph-DjKVaY8f.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Approve Request',
    content: 'Are you sure you want to approve this request?',
    onConfirmCallbackArgs: []
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Demo.args,
    title: 'Confirm Deletion',
    confirmButtonText: 'Delete Token',
    confirmButtonColor: 'error',
    content: <>
        <p>
          If you delete this token, any applications using it will stop working.
          This action cannot be undone.
        </p>
        <p className="SRC-boldText">
          Are you sure you want to delete this token?
        </p>
      </>
  }
}`,...t.parameters?.docs?.source}}};const D=["Demo","AccessTokenCardWarningDialog"];export{t as AccessTokenCardWarningDialog,e as Demo,D as __namedExportsOrder,y as default};
