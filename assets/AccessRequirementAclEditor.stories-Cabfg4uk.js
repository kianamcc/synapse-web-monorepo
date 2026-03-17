import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-I8dsMSSM.js";import{A as i}from"./AccessRequirementAclEditor-DUWkFN7u.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BGfKgwXs.js";import"./index-Ds_sxz32.js";import"./_baseOrderBy-BUciiYyg.js";import"./_baseIteratee-BjtSyD36.js";import"./_baseMap-0mYeZW-r.js";import"./_baseEach-hv5x2_iZ.js";import"./useInfiniteQuery-ByZ3F9Pg.js";import"./AclEditor-Coho3GrC.js";import"./UserSearchBoxV2-BHOGXLzT.js";import"./useDebouncedEffect-vfTrqwBk.js";import"./use-deep-compare-effect.esm-DAOMflz-.js";import"./uniq-WWN9NeNB.js";import"./without-4WJZNm7D.js";import"./UserBadge-CqQgn6ht.js";import"./useUserBundle-BguAd_7C.js";import"./SkeletonTable-DFj9MMPK.js";import"./MenuItem-DD1mfKVc.js";import"./Card-BWxAw1G0.js";import"./Chip-6EemW15k.js";import"./Select-aab027f3.esm-Eh80rwqJ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-TMHZyU2T.js";import"./TeamBadge-CsyW2Gn2.js";import"./SkeletonButton-CmYn4uiY.js";import"./SkeletonInlineBlock-C0iISjKy.js";import"./SkeletonParagraph-CBxS9HL2.js";import"./IconSvgButton-Bf1uV2lU.js";import"./FormControlLabel-UUCY9bEv.js";import"./Checkbox-D9-_Jrd6.js";import"./SwitchBase-QianSKJh.js";import"./useUpdateAcl-5vHhBNSs.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
