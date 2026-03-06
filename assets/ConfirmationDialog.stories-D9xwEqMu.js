import{j as o,B as n}from"./iframe-CaNoDgkX.js";import{C as r}from"./ConfirmationDialog-CvYo2dLO.js";import"./index-Chi_LkuB.js";import"./DialogBase-ymiBsjv4.js";import"./Close-Cj8W86JB.js";import"./HelpPopover-B-vfXunY.js";import"./MarkdownPopover-Ds9kb0yD.js";import"./LightTooltip-LycdI5lW.js";import"./MarkdownSynapse-BNV4Ce-k.js";import"./SkeletonButton-Cy68UPlr.js";import"./SkeletonInlineBlock-DFgc16ha.js";import"./SkeletonTable-BK7ah3SB.js";import"./SkeletonParagraph-C3PSWy-y.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
