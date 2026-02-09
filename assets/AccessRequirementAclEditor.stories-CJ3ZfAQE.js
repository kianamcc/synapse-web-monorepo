import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-_RRtoCIB.js";import{A as i}from"./AccessRequirementAclEditor-Clk75uB8.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BsppqOy_.js";import"./index-C48TJn2v.js";import"./_baseOrderBy-rn73G-Qt.js";import"./_baseIteratee-CgF3Cfek.js";import"./_baseMap-BBX37T8P.js";import"./_baseEach-B8sjjX0y.js";import"./useQueries-BYmqsWy-.js";import"./useInfiniteQuery-DgvZk44b.js";import"./AclEditor-CdTFFlvB.js";import"./UserSearchBoxV2-pMhrR0fp.js";import"./useDebouncedEffect-CYWPKiJB.js";import"./use-deep-compare-effect.esm-BJMH-Hbm.js";import"./uniq-DHs7XRsC.js";import"./without-PbGQccI8.js";import"./UserBadge-B42BZ6Mr.js";import"./useUserBundle-B0qXkO2d.js";import"./useSuspenseQuery-IQfUTR9I.js";import"./SkeletonTable-S1zm26Db.js";import"./MenuItem-CGSEVSsQ.js";import"./Card-HzydnlVv.js";import"./Chip-jVD26EQu.js";import"./Select-aab027f3.esm-BObPBgCO.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DUIkYeL-.js";import"./TeamBadge-BU3UNtFy.js";import"./SkeletonButton-CqYg87XU.js";import"./SkeletonInlineBlock-C6vP7s5M.js";import"./SkeletonParagraph-D0b3NNq9.js";import"./IconSvgButton-DM8CicDB.js";import"./FormControlLabel-B8atO_7D.js";import"./Checkbox-D1j8OgqE.js";import"./SwitchBase-Dsoh1EuZ.js";import"./useUpdateAcl-C6toB-ao.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
