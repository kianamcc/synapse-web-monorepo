import{j as o,B as n}from"./iframe-DmIbR_r6.js";import{C as r}from"./ConfirmationDialog-Di6NNHa2.js";import"./index-Chi_LkuB.js";import"./DialogBase-ChzVu5cL.js";import"./Close-Bq87bjEk.js";import"./HelpPopover-cKaKE6m4.js";import"./MarkdownPopover-CDin4ext.js";import"./LightTooltip-CYkDKzfj.js";import"./MarkdownSynapse-DuxA3dVB.js";import"./SkeletonButton-vlFvkNkv.js";import"./SkeletonInlineBlock-DFTJODNT.js";import"./SkeletonTable-Bj3J0JYP.js";import"./SkeletonParagraph-BUZlTYNH.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
