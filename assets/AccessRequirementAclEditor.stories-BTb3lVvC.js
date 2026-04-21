import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DOWR2259.js";import{A as i}from"./AccessRequirementAclEditor-4dR1WJr-.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CqOb2q9V.js";import"./index-BQSvnnEc.js";import"./_baseOrderBy-B_OsYqF7.js";import"./_baseIteratee-D5WTHCBz.js";import"./_baseMap-CgaRb8YO.js";import"./_baseEach-v9IjSq7r.js";import"./useInfiniteQuery-Bxxw2SLJ.js";import"./AclEditor-Dm19Vtg8.js";import"./UserSearchBox-B-85fT0D.js";import"./useDebouncedEffect-CWEHFmV5.js";import"./UserBadge-BK9aqAni.js";import"./useUserBundle-HK3fngpg.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-juUGe8TZ.js";import"./MenuItem-LKT-cJqE.js";import"./Card-CxyXWyxz.js";import"./Chip-CUZVi0iR.js";import"./UserOrTeamBadge-8wxXY_TV.js";import"./TeamBadge-DTsLUZsx.js";import"./Autocomplete-CBDbHqTD.js";import"./usePreviousProps-4oQzHQnB.js";import"./SkeletonButton-CL0b5STV.js";import"./SkeletonInlineBlock-dfitKoKa.js";import"./SkeletonParagraph-tnS4LISQ.js";import"./IconSvgButton-CyzCUvJp.js";import"./FormControlLabel-wYqx77kH.js";import"./Checkbox-BEAP1Si0.js";import"./SwitchBase-CQWm8_8T.js";import"./useUpdateAcl-L3PQmwOl.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
