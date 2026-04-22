import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BB1CyglU.js";import{A as i}from"./AccessRequirementAclEditor-BGcjZgK6.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BxB9372J.js";import"./index-BLt8cigd.js";import"./_baseOrderBy-CzmdTjbu.js";import"./_baseIteratee-yswP77C1.js";import"./_baseMap-CAb0E05m.js";import"./_baseEach-UzDtS0gP.js";import"./useInfiniteQuery-hdDrux36.js";import"./AclEditor-DSxAm2Qk.js";import"./UserSearchBox-DTgFr-fl.js";import"./useDebouncedEffect-6G0Ug4OG.js";import"./UserBadge-CHe7Nhbm.js";import"./useUserBundle-Bf-9hfkn.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-EsMLBsV_.js";import"./MenuItem-ChUmjrmC.js";import"./Card-M3Ee8JJT.js";import"./Chip-CF5f4rXb.js";import"./UserOrTeamBadge-CitIv8I3.js";import"./TeamBadge-C4Zmd7ex.js";import"./Autocomplete-CYtlEtNG.js";import"./usePreviousProps-ZC0xOhlJ.js";import"./SkeletonButton-q-Dp6RFE.js";import"./SkeletonInlineBlock-dhIvV08s.js";import"./SkeletonParagraph-CfPPR8eC.js";import"./IconSvgButton-t-7pXhKm.js";import"./FormControlLabel-AsYqHmfp.js";import"./Checkbox-B1LsbIzZ.js";import"./SwitchBase-DBcCC2Ae.js";import"./useUpdateAcl-Dy5bgZr_.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
