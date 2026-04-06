import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BO8yZwbi.js";import{A as i}from"./AccessRequirementAclEditor-BBPsjm5_.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-8v8PXOIa.js";import"./index-DR8sCWIq.js";import"./_baseOrderBy-Dm5f2ySZ.js";import"./_baseIteratee-CTX8Podl.js";import"./_baseMap-2iTgJGE8.js";import"./_baseEach-0z5hbuaq.js";import"./useInfiniteQuery-CLrbgs3-.js";import"./AclEditor-DVRgP608.js";import"./UserSearchBox-CDU6mGwp.js";import"./useDebouncedEffect-rkeBO--D.js";import"./UserBadge-DUaTP9cc.js";import"./useUserBundle-D6W7YJ3k.js";import"./SkeletonTable-pZFOgUxM.js";import"./MenuItem-CbpqHvkr.js";import"./Card-BK0RveQD.js";import"./Chip-CHXpsjrm.js";import"./UserOrTeamBadge-B2u09AIu.js";import"./TeamBadge-Ddyfgq3U.js";import"./Autocomplete-DA2l69mt.js";import"./usePreviousProps-D3abc4KG.js";import"./SkeletonButton-BjMHDMih.js";import"./SkeletonInlineBlock-DsdOdTux.js";import"./SkeletonParagraph-B75rYAhF.js";import"./IconSvgButton-CftEzUYj.js";import"./FormControlLabel-DYL89ugT.js";import"./Checkbox-Du_6kpR0.js";import"./SwitchBase-Cx_CtAYe.js";import"./useUpdateAcl-BpEVagtK.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...s.parameters?.docs?.source}}};const z=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{s as DevDemo,r as MockDemoExistingAcl,t as MockDemoNoExistingAcl,z as __namedExportsOrder,y as default};
