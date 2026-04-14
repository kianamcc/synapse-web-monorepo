import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BbyAgVod.js";import{A as i}from"./AccessRequirementAclEditor-D9wGV76l.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CFq6EQey.js";import"./index-QgGURz5J.js";import"./_baseOrderBy-DycVdkpX.js";import"./_baseIteratee-Dz5jfdCx.js";import"./_baseMap-DL1JQLUY.js";import"./_baseEach-CjlXDLG7.js";import"./useInfiniteQuery-Cis8MpVG.js";import"./AclEditor-Z6WlBlac.js";import"./UserSearchBox-BGa8EQ8D.js";import"./useDebouncedEffect-DH3r_GOo.js";import"./useUserGroupHeader-BxByFlPX.js";import"./UserOrTeamBadge-ChP3CHKo.js";import"./TeamBadge-Bx6Pb7M1.js";import"./UserBadge-BMeyNDaA.js";import"./useUserBundle-BZrAVgQo.js";import"./SkeletonTable-8hMWU9b8.js";import"./MenuItem-BOC7yxlQ.js";import"./Card-BIlAp2RU.js";import"./Chip-DvcIhhPD.js";import"./Autocomplete-BU4fl7Bk.js";import"./usePreviousProps-Ho5tQjOf.js";import"./SkeletonButton-CvgBxsOq.js";import"./SkeletonInlineBlock-CGRSHTJp.js";import"./SkeletonParagraph-TSyA2Bdi.js";import"./IconSvgButton-mzy9xypx.js";import"./FormControlLabel-DyfmsA3D.js";import"./Checkbox-CEuzbj9w.js";import"./SwitchBase-D4_ReTEb.js";import"./useUpdateAcl-D2CFiSjl.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
