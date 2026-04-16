import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BoShs1FP.js";import{A as i}from"./AccessRequirementAclEditor-CIEAJFJV.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CwcHVqoa.js";import"./index-C5DEBePd.js";import"./_baseOrderBy-BYJRFfwz.js";import"./_baseIteratee-aOl2kpXV.js";import"./_baseMap-BJz-4MUP.js";import"./_baseEach-CEqVgz86.js";import"./useInfiniteQuery-CWe3h_-o.js";import"./AclEditor-BhwuR-HD.js";import"./UserSearchBox-BexNBsWI.js";import"./useDebouncedEffect-CTHf0SMa.js";import"./useUserGroupHeader-CC3P47ZT.js";import"./UserOrTeamBadge-BjXBs8WF.js";import"./TeamBadge-AS82XB9W.js";import"./UserBadge-BDhj17Fq.js";import"./useUserBundle-eEwiRblB.js";import"./SkeletonTable-IAUM-Obo.js";import"./MenuItem-B1xoDZlQ.js";import"./Card-CSsZocl6.js";import"./Chip-BLhbfSeY.js";import"./Autocomplete-PHs1LHi4.js";import"./usePreviousProps-BBk78ney.js";import"./SkeletonButton-DhdzaN7E.js";import"./SkeletonInlineBlock-Bqd6TYJI.js";import"./SkeletonParagraph-BFx803tv.js";import"./IconSvgButton-CFuALvoz.js";import"./FormControlLabel-h3JE9ECB.js";import"./Checkbox-DEIJ5Z9O.js";import"./SwitchBase-DwxvIWq-.js";import"./useUpdateAcl-DRpfgHAg.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
