import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-Cw2Vf6_R.js";import{A as i}from"./AccessRequirementAclEditor-orEz2AYl.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BpWpW5MC.js";import"./index-DoVT484J.js";import"./_baseOrderBy-2w_U_jVo.js";import"./_baseIteratee-HWCsHMt3.js";import"./_baseMap-CKoRPIBA.js";import"./_baseEach-90T_6CtV.js";import"./useQueries-BVGbZrQM.js";import"./useInfiniteQuery-L_gif3jU.js";import"./AclEditor-oABSZ9SL.js";import"./UserSearchBoxV2-DEjkQhuw.js";import"./useDebouncedEffect-D41uxcAp.js";import"./use-deep-compare-effect.esm-CwINeFcQ.js";import"./uniq-D3dQOcLt.js";import"./without-Bp1Fbkhy.js";import"./UserBadge-CyekxS7f.js";import"./useUserBundle-Dp6-PaGP.js";import"./useSuspenseQuery-Cn71fWAt.js";import"./SkeletonTable-CFa2K4dK.js";import"./MenuItem-y3yB9tRp.js";import"./Card-DTlMPEDT.js";import"./Chip-BqceZA6q.js";import"./Select-aab027f3.esm-Cn-3p13B.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-24h34Zv0.js";import"./TeamBadge-Cipzd2A0.js";import"./SkeletonButton-CH7PSBg9.js";import"./SkeletonInlineBlock-BXybPdXq.js";import"./SkeletonParagraph-DgBCouD8.js";import"./IconSvgButton-Cp58SGB_.js";import"./FormControlLabel-Cit7svP9.js";import"./Checkbox-BEgs4XO-.js";import"./SwitchBase-Dwgs0une.js";import"./useUpdateAcl-BWlLPMD8.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
