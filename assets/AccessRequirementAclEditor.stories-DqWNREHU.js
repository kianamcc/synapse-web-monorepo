import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BrPoS5FB.js";import{A as c}from"./AccessRequirementAclEditor-BJkDHILu.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BPxMD1gB.js";import"./index-DvTUvNEA.js";import"./_baseOrderBy-Cn_fRb0Q.js";import"./_baseIteratee-CvXiprSM.js";import"./_baseMap-DYpYkmQM.js";import"./_baseEach-C6u6dmNB.js";import"./useQueries-QoUoMS77.js";import"./useInfiniteQuery-Wta0toVI.js";import"./AclEditor-Bym8MQik.js";import"./UserSearchBoxV2-9M3xwGVq.js";import"./useDebouncedEffect-BfgveUUS.js";import"./use-deep-compare-effect.esm-DwC_8CZ3.js";import"./uniq-Dpgqo0aV.js";import"./without-5kSadi0e.js";import"./UserBadge-CZtFy4gZ.js";import"./SkeletonTable-7Ts_fDyw.js";import"./MenuItem-BrM7IBWv.js";import"./Card-By5M3Dgz.js";import"./Chip-ZRMOIwtV.js";import"./Select-aab027f3.esm-B3XtMyXH.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BMYu1Ydp.js";import"./TeamBadge-BVLB9thB.js";import"./SkeletonButton-2N5ZG66q.js";import"./SkeletonInlineBlock-CU1JeY6s.js";import"./SkeletonParagraph-BRiZwInB.js";import"./IconSvgButton-C1_Hhomh.js";import"./FormControlLabel-y0w6AE6J.js";import"./Checkbox-BvD29YM_.js";import"./SwitchBase-CMKAbFTe.js";import"./useUpdateAcl-D0rmtDEr.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
