import{g as e}from"./chatHandlers-Ce7knIKk.js";import{g as a,d as s,b as r}from"./iframe-CekoipMQ.js";import{S as o}from"./SynapseChat-DvCO5kvj.js";import"./index-Chi_LkuB.js";import"./SkeletonButton-DjK3K6zG.js";import"./SkeletonInlineBlock-C1cA1eyz.js";import"./SkeletonTable-BgJD-A8R.js";import"./SkeletonParagraph-9U18_kZ7.js";import"./DropdownSelect-C76PeVaX.js";import"./getValidReactChildren-BVdtT_fn.js";import"./MenuItem-RwAbQprV.js";import"./index-browser-esm-k-o2Qe0C.js";import"./MarkdownSynapse-CORj4GTu.js";import"./ListItem-qW2y4pi_.js";import"./listItemButtonClasses-DS1x6z0O.js";import"./ListItemText-wYrYifu4.js";import"./KeyboardArrowDown-BtdLZ3YV.js";import"./ArrowUpward-Dxm7SWGm.js";const H={title:"Synapse/Chat",component:o,parameters:{requireLogin:!0,chromatic:{viewports:[600,1200]}},argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},t={args:{initialMessage:"hello"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...e(r)]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
