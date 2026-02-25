import{j as o,B as n}from"./iframe-HhNUql8D.js";import{C as r}from"./ConfirmationDialog-X-q5EAD5.js";import"./index-Chi_LkuB.js";import"./DialogBase-CixZag-K.js";import"./Close-DwkMpKYS.js";import"./HelpPopover-HYfG1omk.js";import"./MarkdownPopover-C0XojMIG.js";import"./LightTooltip-N2Yg4ppW.js";import"./MarkdownSynapse-Der_vikg.js";import"./SkeletonButton-CAAREen-.js";import"./SkeletonInlineBlock-Ckp06Ekm.js";import"./SkeletonTable-EUCE1WAM.js";import"./SkeletonParagraph-DMnpDLUG.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
