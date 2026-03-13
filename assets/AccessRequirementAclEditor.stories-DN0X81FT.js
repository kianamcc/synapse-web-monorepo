import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-B232wCNe.js";import{A as i}from"./AccessRequirementAclEditor-k4hIBg8H.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B_dVYCbZ.js";import"./index-B8EHcCSt.js";import"./_baseOrderBy-ATaEyx6N.js";import"./_baseIteratee-DYtHAtdK.js";import"./_baseMap-lOtKvTec.js";import"./_baseEach-BXg_PS_g.js";import"./useInfiniteQuery-DWrZvRU-.js";import"./AclEditor-DZTR8vWF.js";import"./UserSearchBoxV2-C_4wqn6m.js";import"./useDebouncedEffect-CpjoW1QH.js";import"./use-deep-compare-effect.esm-Bo67Fp7r.js";import"./uniq-DqbaCJ0V.js";import"./without-Bb3YqdBe.js";import"./UserBadge-p8iKlC6M.js";import"./useUserBundle-CeFUDuAK.js";import"./SkeletonTable-DsTP05oa.js";import"./MenuItem-G0IpQDVS.js";import"./Card-mT5-QQz8.js";import"./Chip-C9IsdVPl.js";import"./Select-aab027f3.esm-D24vByKR.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CCBQdta7.js";import"./TeamBadge-Ca543jzl.js";import"./SkeletonButton-BFqV1Bjq.js";import"./SkeletonInlineBlock-B1yQCAbt.js";import"./SkeletonParagraph-D6S7cLaW.js";import"./IconSvgButton-DmfSt9Ke.js";import"./FormControlLabel-9kWwTU5c.js";import"./Checkbox-BjOsasGy.js";import"./SwitchBase-DmbjsDrX.js";import"./useUpdateAcl-CQ4h48m2.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
