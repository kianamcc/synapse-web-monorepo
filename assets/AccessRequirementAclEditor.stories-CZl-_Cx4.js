import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe--e7tPOH7.js";import{A as i}from"./AccessRequirementAclEditor-Cmon-7FD.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DsgkyaSY.js";import"./index-B0hb1_FS.js";import"./_baseOrderBy-D_ZC_Cyk.js";import"./_baseIteratee-DiAJV_uA.js";import"./_baseMap-Dq1V0zb5.js";import"./_baseEach-g2_Zy4Dj.js";import"./useInfiniteQuery-DhFcZOnt.js";import"./AclEditor-D7Mzdylq.js";import"./UserSearchBox-J6-nDvfU.js";import"./useDebouncedEffect-Htxr2mzk.js";import"./useUserGroupHeader-s0veRE4v.js";import"./UserOrTeamBadge-bUKUxpGX.js";import"./TeamBadge-C2HNtI-1.js";import"./UserBadge-BS9OSWR1.js";import"./useUserBundle-Cvjt2mpu.js";import"./SkeletonTable-CaoeDxPi.js";import"./MenuItem-ClPLR1c1.js";import"./Card-BExoznwr.js";import"./Chip-BjLa75DM.js";import"./Autocomplete-CwBzqZJ8.js";import"./usePreviousProps-C2VjmU0C.js";import"./SkeletonButton-_aLRz4g8.js";import"./SkeletonInlineBlock-CYh7Z-UU.js";import"./SkeletonParagraph-DxfKrJwN.js";import"./IconSvgButton-POorAYx3.js";import"./FormControlLabel-DIFOv5rN.js";import"./Checkbox-BZ_kVbRn.js";import"./SwitchBase-xd1f4aUc.js";import"./useUpdateAcl-DTG4pYXU.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
