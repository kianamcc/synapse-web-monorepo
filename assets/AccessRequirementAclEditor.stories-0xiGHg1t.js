import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-D4dZwAiu.js";import{A as i}from"./AccessRequirementAclEditor-BrAEj-mv.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B0iEcAuc.js";import"./index-qjOO6W60.js";import"./_baseOrderBy-Ch55E-5o.js";import"./_baseIteratee-hrWHcORH.js";import"./_baseMap-CRskOV4U.js";import"./_baseEach-Ce7kzn1Q.js";import"./useInfiniteQuery-97YTJVGW.js";import"./AclEditor-ChIPw7NL.js";import"./UserSearchBoxV2-Bgdq_b7A.js";import"./useDebouncedEffect-DBEBm7ax.js";import"./use-deep-compare-effect.esm-CZn1YOV_.js";import"./uniq-CXTi0pNt.js";import"./without-BLk6V1np.js";import"./UserBadge-C4q-1h63.js";import"./useUserBundle-DJaOK7gx.js";import"./SkeletonTable-8IE5S5u8.js";import"./MenuItem-i2UFDYLy.js";import"./Card-BgubtV-0.js";import"./Chip-BrFyeTvK.js";import"./Select-aab027f3.esm-DxOPtldD.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-D9nYBr_W.js";import"./TeamBadge-Czk6d5nD.js";import"./SkeletonButton-BF6SPb4p.js";import"./SkeletonInlineBlock-BE4VGVg9.js";import"./SkeletonParagraph-CCi1oakt.js";import"./IconSvgButton-DOa55quw.js";import"./FormControlLabel-xBFb-JxA.js";import"./Checkbox-8IZKAE9H.js";import"./SwitchBase-BC3YewNK.js";import"./useUpdateAcl-CnkTKR45.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
