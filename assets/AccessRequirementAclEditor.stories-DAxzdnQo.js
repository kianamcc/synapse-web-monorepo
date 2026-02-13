import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CAB19BbH.js";import{A as i}from"./AccessRequirementAclEditor-Dv7ZRYnj.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BVbOYYkR.js";import"./index-4rOGAnCi.js";import"./_baseOrderBy-DMWw8kqr.js";import"./_baseIteratee-BDojqQeK.js";import"./_baseMap-CnNy9Vcy.js";import"./_baseEach-DkPOUSOa.js";import"./useQueries-ChXbUcWa.js";import"./useInfiniteQuery-CE_gTuUj.js";import"./AclEditor-DiypQeHp.js";import"./UserSearchBoxV2-DpLEZwmC.js";import"./useDebouncedEffect-D3I8Q5In.js";import"./use-deep-compare-effect.esm-CJphMZrM.js";import"./uniq-tAg4_KIk.js";import"./without-ztkTiXBj.js";import"./UserBadge-BmLtYB6u.js";import"./useUserBundle-D6Ieyrcj.js";import"./useSuspenseQuery-zF1b63rt.js";import"./SkeletonTable-B83AcFFC.js";import"./MenuItem-CF0OPkSJ.js";import"./Card-C4eY6NNN.js";import"./Chip-DBDLRQBv.js";import"./Select-aab027f3.esm-nL5vKTZ2.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-EweMIDs6.js";import"./TeamBadge-DG3GgG1J.js";import"./SkeletonButton-Ap83qpg-.js";import"./SkeletonInlineBlock-DsyBz5jn.js";import"./SkeletonParagraph-Chcpv0Ew.js";import"./IconSvgButton-BV7FnNbS.js";import"./FormControlLabel-D9uxq7_c.js";import"./Checkbox-CNIkB2C5.js";import"./SwitchBase-DcWVvmI0.js";import"./useUpdateAcl-CdrfBWhR.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
