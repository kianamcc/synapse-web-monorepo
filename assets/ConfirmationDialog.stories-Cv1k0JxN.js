import{j as o,B as n}from"./iframe-CbwEnKrb.js";import{C as r}from"./ConfirmationDialog-o72spyHe.js";import"./index-Chi_LkuB.js";import"./DialogBase-D6FQY60e.js";import"./Close-tQx-wqp_.js";import"./HelpPopover-Dtzy2cbb.js";import"./MarkdownPopover-BlyA42oU.js";import"./LightTooltip-CLO2ZiPK.js";import"./MarkdownSynapse-CV3-JJWu.js";import"./SkeletonButton-CVSY2DZ9.js";import"./SkeletonInlineBlock-CWmuPwAO.js";import"./SkeletonTable-BPQpmDB9.js";import"./SkeletonParagraph-DANy215S.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
