import{j as o}from"./iframe-CaNoDgkX.js";import{W as r}from"./WarningDialog-BDEevfzn.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-CvYo2dLO.js";import"./DialogBase-ymiBsjv4.js";import"./Close-Cj8W86JB.js";import"./HelpPopover-B-vfXunY.js";import"./MarkdownPopover-Ds9kb0yD.js";import"./LightTooltip-LycdI5lW.js";import"./MarkdownSynapse-BNV4Ce-k.js";import"./SkeletonButton-Cy68UPlr.js";import"./SkeletonInlineBlock-DFgc16ha.js";import"./SkeletonTable-BK7ah3SB.js";import"./SkeletonParagraph-C3PSWy-y.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
