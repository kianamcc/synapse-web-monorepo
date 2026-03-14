import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CZHSx5wE.js";import{A as i}from"./AccessRequirementAclEditor-Dth9Rx0h.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B2ui8s-s.js";import"./index-BdE-IeMQ.js";import"./_baseOrderBy-Rq4XcVNX.js";import"./_baseIteratee-DCncjzSw.js";import"./_baseMap-C7oJPype.js";import"./_baseEach-D3LyP7M6.js";import"./useInfiniteQuery-CS833kDM.js";import"./AclEditor-DOcjmVKF.js";import"./UserSearchBoxV2-DnujxB7O.js";import"./useDebouncedEffect-BYXY3gWL.js";import"./use-deep-compare-effect.esm-BTQljnhV.js";import"./uniq-BLDAgS8z.js";import"./without-C_x_GdL6.js";import"./UserBadge-BrFwZcdF.js";import"./useUserBundle-Cv-fJG41.js";import"./SkeletonTable-BtPTkHAP.js";import"./MenuItem-9G2m_4hr.js";import"./Card-CTm-897L.js";import"./Chip-DRM-PW0Q.js";import"./Select-aab027f3.esm-7w82rK3w.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Bi9ctn4G.js";import"./TeamBadge-ClaI6dpD.js";import"./SkeletonButton-BE152swZ.js";import"./SkeletonInlineBlock-BWjEXTNa.js";import"./SkeletonParagraph-BXCrfssX.js";import"./IconSvgButton-UOohxoY-.js";import"./FormControlLabel-DcwvPxSI.js";import"./Checkbox-qPdo7eWH.js";import"./SwitchBase-DkO8c4je.js";import"./useUpdateAcl-Dad6YxBe.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
