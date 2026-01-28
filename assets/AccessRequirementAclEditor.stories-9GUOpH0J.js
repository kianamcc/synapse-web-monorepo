import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DmIbR_r6.js";import{A as i}from"./AccessRequirementAclEditor-C3FERwFt.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CQfwC5jP.js";import"./index-Cbto9jav.js";import"./_baseOrderBy-B685EpFZ.js";import"./_baseIteratee-DGiWPmRT.js";import"./_baseMap-CMpD4lY6.js";import"./_baseEach-BQnbae_L.js";import"./useQueries-LRi5eBel.js";import"./useInfiniteQuery-CI1b4wGw.js";import"./AclEditor-DGujOEjN.js";import"./UserSearchBoxV2-dFGVowRg.js";import"./useDebouncedEffect-D6e_8jOD.js";import"./use-deep-compare-effect.esm-CJglqS1P.js";import"./uniq-DzOHloOS.js";import"./without-BSOkDosU.js";import"./UserBadge-BHBKP-iC.js";import"./useUserBundle-B2LL3X0c.js";import"./useSuspenseQuery-Bb68RTLn.js";import"./SkeletonTable-Bj3J0JYP.js";import"./MenuItem-BnZD-coi.js";import"./Card-DxCpoD8K.js";import"./Chip-BRJez_-q.js";import"./Select-aab027f3.esm-DRYArQML.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CEz3_8Ny.js";import"./TeamBadge-CQjBBlal.js";import"./SkeletonButton-vlFvkNkv.js";import"./SkeletonInlineBlock-DFTJODNT.js";import"./SkeletonParagraph-BUZlTYNH.js";import"./IconSvgButton-CgIdGnaZ.js";import"./FormControlLabel-F84xQZnV.js";import"./Checkbox-BkqDpdYQ.js";import"./SwitchBase-CUTqoSBF.js";import"./useUpdateAcl-r4gtIpRO.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...t.parameters?.docs?.source}}};const se=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,se as __namedExportsOrder,re as default};
