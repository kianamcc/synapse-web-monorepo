import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BzzjdWy2.js";import{A as i}from"./AccessRequirementAclEditor-BcvQJBQW.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-kYJ3PYfJ.js";import"./index-1bES-Dua.js";import"./_baseOrderBy-Vveb-2oh.js";import"./_baseIteratee-B6ZKTAjZ.js";import"./_baseMap-BcYx9XOM.js";import"./_baseEach-CkA66oLy.js";import"./useInfiniteQuery-BbfstQUl.js";import"./AclEditor-CKTcAcw_.js";import"./UserSearchBox-I73bCcbb.js";import"./useDebouncedEffect-CerfYQOW.js";import"./useUserGroupHeader-D1PoIV88.js";import"./UserOrTeamBadge-BtuJ55Zc.js";import"./TeamBadge-C2J6JE3M.js";import"./UserBadge-BqcxjeKR.js";import"./useUserBundle-pMV1EYk7.js";import"./SkeletonTable-CsxmarD8.js";import"./MenuItem-BVsCkoVz.js";import"./Card-DdtvDXS4.js";import"./Chip-NSHEYu7d.js";import"./Autocomplete-BAKaVVOT.js";import"./usePreviousProps-CKXyB07W.js";import"./SkeletonButton-BhLIT0JK.js";import"./SkeletonInlineBlock-DNuGrhmv.js";import"./SkeletonParagraph-BgDI2leK.js";import"./IconSvgButton-84nD18Vy.js";import"./FormControlLabel-CPkZMGo3.js";import"./Checkbox-DssC3FEB.js";import"./SwitchBase-Cgw9rMrL.js";import"./useUpdateAcl-D2NFtsvq.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
