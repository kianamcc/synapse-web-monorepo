import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CkxBXYUS.js";import{A as i}from"./AccessRequirementAclEditor-CyqQ_Bc3.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CbWhvGoA.js";import"./index-SFhbXU88.js";import"./_baseOrderBy-EYj17sKo.js";import"./_baseIteratee-D3hgKa38.js";import"./_baseMap-BSeajlG7.js";import"./_baseEach-BOfPgxL4.js";import"./useQueries-Yp2j9f7r.js";import"./useInfiniteQuery-GEnPT25t.js";import"./AclEditor-BhqUh4rQ.js";import"./useRealmPrincipals-BjOTp7Ah.js";import"./UserSearchBoxV2-BMsAnB-J.js";import"./useDebouncedEffect-CnSqEB5d.js";import"./use-deep-compare-effect.esm-CITT_kVX.js";import"./uniq-xfdkBigH.js";import"./without-CIQb-7Wr.js";import"./UserBadge-CJBqeQOM.js";import"./useUserBundle-r9Y7ADD5.js";import"./useSuspenseQuery-CY63kBJ7.js";import"./SkeletonTable-BxoX6BC7.js";import"./MenuItem-CEfDuclk.js";import"./Card-h-vZuF9_.js";import"./Chip-CZ1spSeI.js";import"./Select-aab027f3.esm-CFvBkQoo.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BR8gNaFS.js";import"./TeamBadge-8mUTW7Hv.js";import"./SkeletonButton-BkLf8D0r.js";import"./SkeletonInlineBlock-DEQxpJiN.js";import"./SkeletonParagraph-DYUWrGET.js";import"./IconSvgButton-c95hntOq.js";import"./FormControlLabel-DRB2gJy9.js";import"./Checkbox-BdBxDy6O.js";import"./SwitchBase-fsEWQiIL.js";import"./useUpdateAcl-y5_nlNly.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
