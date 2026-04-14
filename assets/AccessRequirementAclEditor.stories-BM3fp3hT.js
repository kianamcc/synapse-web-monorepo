import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-CbwEnKrb.js";import{A as i}from"./AccessRequirementAclEditor-B5fJiLmD.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DyAeaSvz.js";import"./index-DKdIbvc8.js";import"./_baseOrderBy-BDueZygm.js";import"./_baseIteratee-D2fQYW4o.js";import"./_baseMap-BHK-7f7f.js";import"./_baseEach-YW957Zpj.js";import"./useInfiniteQuery-B3BSk6H4.js";import"./AclEditor-C9LTns7-.js";import"./UserSearchBox-Br8M_PUw.js";import"./useDebouncedEffect-BaffJhTn.js";import"./useUserGroupHeader-ZU35AXfG.js";import"./UserOrTeamBadge-DXG_AKkY.js";import"./TeamBadge-CMa9hePG.js";import"./UserBadge-Cl4jYQAi.js";import"./useUserBundle-pZ8IkSgn.js";import"./SkeletonTable-BPQpmDB9.js";import"./MenuItem-D7q812IO.js";import"./Card-B5jbE4Ic.js";import"./Chip-CmhjDClg.js";import"./Autocomplete-DaOKx0WE.js";import"./usePreviousProps-DEaKdrDo.js";import"./SkeletonButton-CVSY2DZ9.js";import"./SkeletonInlineBlock-CWmuPwAO.js";import"./SkeletonParagraph-DANy215S.js";import"./IconSvgButton-Bf6QGZyy.js";import"./FormControlLabel-BZevxPBM.js";import"./Checkbox-DZpQgbr_.js";import"./SwitchBase-2hzSnv65.js";import"./useUpdateAcl-DhR6Qrro.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const J=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{s as DevDemo,r as MockDemoExistingAcl,t as MockDemoNoExistingAcl,J as __namedExportsOrder,z as default};
