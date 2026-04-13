import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe--4PIu_qy.js";import{A as i}from"./AccessRequirementAclEditor-C0e-XxtH.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Cr13h6sL.js";import"./index-CSX6v4C9.js";import"./_baseOrderBy-DJeSI1T-.js";import"./_baseIteratee-SIQo37mB.js";import"./_baseMap-g_gQXiqC.js";import"./_baseEach-BxD8QyVu.js";import"./useInfiniteQuery-BFK5ZSa-.js";import"./AclEditor-CcoVpobk.js";import"./UserSearchBox-CeYjc1TM.js";import"./useDebouncedEffect-BmrRRhyl.js";import"./useUserGroupHeader-BLsJZNZM.js";import"./UserOrTeamBadge-SQB9926a.js";import"./TeamBadge-DF4ycAVV.js";import"./UserBadge-CojLO1dw.js";import"./useUserBundle-D0IPmJJX.js";import"./SkeletonTable-6mGZvVCs.js";import"./MenuItem-B5CZnWag.js";import"./Card-Cck2UD4g.js";import"./Chip-DEb3tB_0.js";import"./Autocomplete-Dbpmp649.js";import"./usePreviousProps-Bb46F9DU.js";import"./SkeletonButton-CbJBGnT-.js";import"./SkeletonInlineBlock-FN6COppS.js";import"./SkeletonParagraph-DjKVaY8f.js";import"./IconSvgButton-8oFL6SxX.js";import"./FormControlLabel-C7P4GXE_.js";import"./Checkbox-M-8y5vkU.js";import"./SwitchBase-dr8cwp_f.js";import"./useUpdateAcl-BQFa9jRp.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
