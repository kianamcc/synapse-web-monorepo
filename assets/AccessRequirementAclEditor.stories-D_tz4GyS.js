import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DhktRnIr.js";import{A as i}from"./AccessRequirementAclEditor-C87jIpXD.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-T5gXkMsQ.js";import"./index-Bnjaz154.js";import"./_baseOrderBy-CNqQo0rK.js";import"./_baseIteratee-j03d5HAz.js";import"./_baseMap-DQ2ohJqA.js";import"./_baseEach-BF0Qvnln.js";import"./useInfiniteQuery-CS92RVBN.js";import"./AclEditor-DZRMuWyE.js";import"./UserSearchBox-D_g80B3n.js";import"./useDebouncedEffect-Cu8D01ca.js";import"./useUserGroupHeader-CMPn8F8q.js";import"./UserOrTeamBadge-BOlqpvND.js";import"./TeamBadge-DtjlyZvg.js";import"./UserBadge-DE1mLr5D.js";import"./useUserBundle-Dg86kmyv.js";import"./SkeletonTable-PLxwnxI1.js";import"./MenuItem-DuPBgdii.js";import"./Card-BQOzBjnu.js";import"./Chip-yuMuQ34K.js";import"./Autocomplete-R4tK8iQ1.js";import"./usePreviousProps-CvY5kb-Y.js";import"./SkeletonButton-D2U44ACQ.js";import"./SkeletonInlineBlock-XnMenv0L.js";import"./SkeletonParagraph-BmLXaGRK.js";import"./IconSvgButton-LCRAsxGk.js";import"./FormControlLabel-D9RU6qZV.js";import"./Checkbox-DFP_HCIj.js";import"./SwitchBase-TNDfqxp2.js";import"./useUpdateAcl-CblWbbxs.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
