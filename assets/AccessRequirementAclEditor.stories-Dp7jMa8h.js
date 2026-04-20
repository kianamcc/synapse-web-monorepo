import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-Bs_Prdk_.js";import{A as i}from"./AccessRequirementAclEditor-DFKJMsS4.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BiE3W169.js";import"./index-CYslwlK8.js";import"./_baseOrderBy-13wKc7Kr.js";import"./_baseIteratee-BdtYTyfi.js";import"./_baseMap-BYoRMOp3.js";import"./_baseEach-zH0fr7Ws.js";import"./useInfiniteQuery-BFUuL85S.js";import"./AclEditor-gyOBLlyM.js";import"./UserSearchBox-UYyUJ3PA.js";import"./useDebouncedEffect-EGZtbiV8.js";import"./UserBadge-DwAlTeJ-.js";import"./useUserBundle-CXGw3t_9.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-Q4aEQVXF.js";import"./MenuItem-DQ2i9Xmi.js";import"./Card-1Ir83r-T.js";import"./Chip-D6_WALXy.js";import"./UserOrTeamBadge-BBCgIxYc.js";import"./TeamBadge-DScDjw1f.js";import"./Autocomplete-DzYLqFiJ.js";import"./usePreviousProps-_O8gdq38.js";import"./SkeletonButton-B-1H7QMA.js";import"./SkeletonInlineBlock-Djc2NMos.js";import"./SkeletonParagraph-NTXhe3CA.js";import"./IconSvgButton-BWns351h.js";import"./FormControlLabel-D0PCi45L.js";import"./Checkbox-e_vFu3N4.js";import"./SwitchBase-CC1BS3iN.js";import"./useUpdateAcl-kbykoUbl.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
