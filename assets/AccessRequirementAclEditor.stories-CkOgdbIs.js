import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-q5BnJc5S.js";import{A as i}from"./AccessRequirementAclEditor-DLU3a5CD.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D5FB2rSM.js";import"./index-CnWYiVZi.js";import"./_baseOrderBy-BiXnBJL2.js";import"./_baseIteratee-Bf6jJ8a4.js";import"./_baseMap-wSNPYFWY.js";import"./_baseEach-C5BYqVlA.js";import"./useInfiniteQuery-D5XkbWpS.js";import"./AclEditor-DTg39-Px.js";import"./UserSearchBoxV2-Cd0Nfqxl.js";import"./useDebouncedEffect-7dDiiClE.js";import"./use-deep-compare-effect.esm-JmWNPEdm.js";import"./uniq-CkK5D4gv.js";import"./without-2E9fiaN6.js";import"./UserBadge-ByUch6Am.js";import"./useUserBundle-DzfGQjuz.js";import"./SkeletonTable-BfI5L8UG.js";import"./MenuItem-Dyp2z-uJ.js";import"./Card-Dv6tDWJX.js";import"./Chip-DEZ4NRsM.js";import"./Select-aab027f3.esm-BayROsmm.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Vd5bqdmG.js";import"./TeamBadge-B6QQN_Lc.js";import"./SkeletonButton-CD8U5Nrp.js";import"./SkeletonInlineBlock-Ci-yqlbg.js";import"./SkeletonParagraph-CBm7mA9i.js";import"./IconSvgButton-CQryi12u.js";import"./FormControlLabel-DANY_K9i.js";import"./Checkbox-IAG2j8Ku.js";import"./SwitchBase-BdkhONOe.js";import"./useUpdateAcl-CYUTYdAx.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ee=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ee as __namedExportsOrder,$ as default};
