import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-HeQVN1jZ.js";import{A as c}from"./AccessRequirementAclEditor-Be1AjjdI.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CUug7qrQ.js";import"./index-CJwnjHko.js";import"./_baseOrderBy-DUTEyv-M.js";import"./_baseIteratee-BVM6Exab.js";import"./_baseMap-Dbza7fMM.js";import"./_baseEach-Be_D6xST.js";import"./useQueries-v3Tbkcys.js";import"./useInfiniteQuery-C6LumC3A.js";import"./AclEditor-BlrZ0uD9.js";import"./UserSearchBoxV2-C8yZNZhx.js";import"./useDebouncedEffect-D63JJIyo.js";import"./use-deep-compare-effect.esm-BqIlrlNY.js";import"./uniq-DE7sbJg2.js";import"./without-VTd3I4C-.js";import"./UserBadge-BnA1hz1A.js";import"./SkeletonTable-CVLaQigb.js";import"./MenuItem-BgyGhhI7.js";import"./Card-CmXzjnFc.js";import"./Chip-Cdmctrnd.js";import"./Select-aab027f3.esm-CF1T7Z2j.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Bh5LWKpf.js";import"./TeamBadge-CtR96slL.js";import"./SkeletonButton-BHe8ofYu.js";import"./SkeletonInlineBlock-BlMS0EJx.js";import"./SkeletonParagraph-DAxVwEIJ.js";import"./IconSvgButton-tUFHFRIf.js";import"./FormControlLabel-C9w-gagr.js";import"./Checkbox-Dtmrm5DB.js";import"./SwitchBase-zArA2Cyl.js";import"./useUpdateAcl-lH7KVjPR.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var E,R,u;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(u=(R=s.parameters)==null?void 0:R.docs)==null?void 0:u.source}}};var A,_,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const ce=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ce as __namedExportsOrder,ie as default};
