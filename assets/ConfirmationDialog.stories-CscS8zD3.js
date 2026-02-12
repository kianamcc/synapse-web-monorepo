import{j as o,B as n}from"./iframe-Cw2Vf6_R.js";import{C as r}from"./ConfirmationDialog-CpDn5qEd.js";import"./index-Chi_LkuB.js";import"./DialogBase-Ch4N59fU.js";import"./Close-WUycMzMO.js";import"./HelpPopover-CVM1ST3g.js";import"./MarkdownPopover-ARMdgv36.js";import"./LightTooltip-CsZ7UZ4g.js";import"./MarkdownSynapse-Dz3rltmw.js";import"./SkeletonButton-CH7PSBg9.js";import"./SkeletonInlineBlock-BXybPdXq.js";import"./SkeletonTable-CFa2K4dK.js";import"./SkeletonParagraph-DgBCouD8.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
