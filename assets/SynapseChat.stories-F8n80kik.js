import{g as e}from"./chatHandlers-D4SAYYMC.js";import{g as a,d as s,b as r}from"./iframe-CkxBXYUS.js";import{S as o}from"./SynapseChat-ar6cHsrM.js";import"./index-Chi_LkuB.js";import"./SkeletonButton-BkLf8D0r.js";import"./SkeletonInlineBlock-DEQxpJiN.js";import"./SkeletonTable-BxoX6BC7.js";import"./SkeletonParagraph-DYUWrGET.js";import"./DropdownSelect-D_T8i6E3.js";import"./getValidReactChildren-Dd9q-w4f.js";import"./MenuItem-CEfDuclk.js";import"./index-browser-esm-k-o2Qe0C.js";import"./MarkdownSynapse-Cl6WuhRF.js";import"./ListItem-1i6bgoDx.js";import"./listItemButtonClasses-Do4tbNvZ.js";import"./ListItemText-Dw6r1FRM.js";import"./KeyboardArrowDown-B3xNO8Fe.js";import"./ArrowUpward-D8OrvKqH.js";const H={title:"Synapse/Chat",component:o,parameters:{requireLogin:!0,chromatic:{viewports:[600,1200]}},argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},t={args:{initialMessage:"hello"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...e(r)]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    initialMessage: 'hello'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getChatbotHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...t.parameters?.docs?.source}}};const M=["ChatWithSynapse"];export{t as ChatWithSynapse,M as __namedExportsOrder,H as default};
