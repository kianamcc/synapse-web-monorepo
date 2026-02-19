import{j as o,B as n}from"./iframe-DPeQX9IY.js";import{C as r}from"./ConfirmationDialog-CbSXaIL2.js";import"./index-Chi_LkuB.js";import"./DialogBase-5Fic6i17.js";import"./Close-DWJQu82H.js";import"./HelpPopover-Br--8Bfi.js";import"./MarkdownPopover-najxU_eq.js";import"./LightTooltip-Oi_KxvmH.js";import"./MarkdownSynapse-WzDgSYq4.js";import"./SkeletonButton-BCmBwLom.js";import"./SkeletonInlineBlock-CaY9GCqL.js";import"./SkeletonTable-BduDk56Z.js";import"./SkeletonParagraph-Qv67bFel.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
