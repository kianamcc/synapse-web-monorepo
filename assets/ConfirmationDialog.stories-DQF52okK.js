import{j as o,B as n}from"./iframe-BMgfrXfb.js";import{C as r}from"./ConfirmationDialog-7Z8noB4Y.js";import"./index-Chi_LkuB.js";import"./DialogBase-D4iV4KIR.js";import"./Close-DhPVL8HB.js";import"./HelpPopover-B6gX6EfQ.js";import"./MarkdownPopover-B7JHaicc.js";import"./LightTooltip-DXrinBip.js";import"./MarkdownSynapse-CazEVfAQ.js";import"./SkeletonButton-D7PyYMMO.js";import"./SkeletonInlineBlock-DrHJKgo1.js";import"./SkeletonTable-DhKHQ1GZ.js";import"./SkeletonParagraph-B8T8hjnS.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
