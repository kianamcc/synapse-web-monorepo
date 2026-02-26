import{j as o,B as n}from"./iframe-D4dZwAiu.js";import{C as r}from"./ConfirmationDialog-0mvEAmvI.js";import"./index-Chi_LkuB.js";import"./DialogBase-CZmZCl2F.js";import"./Close-pxcZfnaD.js";import"./HelpPopover-COkmGEHV.js";import"./MarkdownPopover-C1RJbRCi.js";import"./LightTooltip-Cpk7XR6L.js";import"./MarkdownSynapse-_XkOqT-B.js";import"./SkeletonButton-BF6SPb4p.js";import"./SkeletonInlineBlock-BE4VGVg9.js";import"./SkeletonTable-8IE5S5u8.js";import"./SkeletonParagraph-CCi1oakt.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'My Dialog Title',
    confirmButtonProps: {
      children: 'Confirm',
      color: 'error'
    },
    maxWidth: 'lg',
    content: <>
        <p>
          Some content within the dialog, which can contain other components:
        </p>
        <Button variant="contained">Button</Button>
      </>,
    titleHelpPopoverProps: {
      helpUrl: 'https://help.synapse.org',
      markdownText: 'Option to show a _HelpPopover_ in the title bar with a link to the docs site'
    },
    onCancel: fn(),
    onConfirm: fn()
  }
}`,...t.parameters?.docs?.source}}};const w=["Demo"];export{t as Demo,w as __namedExportsOrder,x as default};
