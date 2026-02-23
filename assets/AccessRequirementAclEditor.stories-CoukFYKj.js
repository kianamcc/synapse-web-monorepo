import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-Dmz0OYQW.js";import{A as i}from"./AccessRequirementAclEditor-C4rSaM8I.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C0sn9x1x.js";import"./index-Bgq-5rD6.js";import"./_baseOrderBy-DYeVekv1.js";import"./_baseIteratee-OyrRg5lQ.js";import"./_baseMap-BMU-1V4v.js";import"./_baseEach-CX1KcIpU.js";import"./useQueries-Gj-Mwc6j.js";import"./useInfiniteQuery-BvWsAshg.js";import"./AclEditor-Bcpu0WWQ.js";import"./useRealmPrincipals-B2GYlSoD.js";import"./UserSearchBoxV2-DST74M4_.js";import"./useDebouncedEffect-DF2pF4ZU.js";import"./use-deep-compare-effect.esm-B67s_ENK.js";import"./uniq-CrR8L-o2.js";import"./without-DDZQXX8R.js";import"./UserBadge-Dn0Lha6s.js";import"./useUserBundle-BQiPRbYK.js";import"./useSuspenseQuery-DBtfLQcz.js";import"./SkeletonTable-DZOOfuw_.js";import"./MenuItem-CDWx0QZm.js";import"./Card-BwP6E97B.js";import"./Chip-CDOlQzO-.js";import"./Select-aab027f3.esm-BOawVjRe.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BuTeXB-Q.js";import"./TeamBadge-BKwoQdV3.js";import"./SkeletonButton--ocR4MjZ.js";import"./SkeletonInlineBlock-DMCr-ZDU.js";import"./SkeletonParagraph-BbQFsbPl.js";import"./IconSvgButton-XqMOoakn.js";import"./FormControlLabel-CyZL3MkF.js";import"./Checkbox-DYbJ9vmj.js";import"./SwitchBase-94QFIekX.js";import"./useUpdateAcl-QVRWxVPt.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const te=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,te as __namedExportsOrder,se as default};
