import{j as o,B as n}from"./iframe-q5BnJc5S.js";import{C as r}from"./ConfirmationDialog-cK5dtH2n.js";import"./index-Chi_LkuB.js";import"./DialogBase-TxfBJQdL.js";import"./Close-BFioOlv8.js";import"./HelpPopover-D18uwdic.js";import"./MarkdownPopover-Cs7UCNrh.js";import"./LightTooltip-Q1_0_6h6.js";import"./MarkdownSynapse-DexZcVsN.js";import"./SkeletonButton-CD8U5Nrp.js";import"./SkeletonInlineBlock-Ci-yqlbg.js";import"./SkeletonTable-BfI5L8UG.js";import"./SkeletonParagraph-CBm7mA9i.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
