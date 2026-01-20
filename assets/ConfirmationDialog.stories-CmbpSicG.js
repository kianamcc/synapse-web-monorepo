import{j as o,B as n}from"./iframe-CekoipMQ.js";import{C as r}from"./ConfirmationDialog-nWrWU4Hp.js";import"./index-Chi_LkuB.js";import"./DialogBase-ehDwX6xB.js";import"./Close-DeFS_KGN.js";import"./HelpPopover-BpHylRT-.js";import"./MarkdownPopover-DIRfGSkQ.js";import"./LightTooltip-i2mHHM7n.js";import"./MarkdownSynapse-CORj4GTu.js";import"./SkeletonButton-DjK3K6zG.js";import"./SkeletonInlineBlock-C1cA1eyz.js";import"./SkeletonTable-BgJD-A8R.js";import"./SkeletonParagraph-9U18_kZ7.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
