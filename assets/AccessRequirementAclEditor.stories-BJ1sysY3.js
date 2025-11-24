import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BXWMp6Ce.js";import{A as c}from"./AccessRequirementAclEditor-DJjmrRZd.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CECAzFll.js";import"./index-CfxawqaX.js";import"./_baseOrderBy-IE-2_fKu.js";import"./_baseIteratee-9dv7RfxS.js";import"./_baseMap-D34HiNXT.js";import"./_baseEach-BVzTx-E1.js";import"./useQueries-DqcM-HR_.js";import"./useInfiniteQuery-CyFXXCnn.js";import"./AclEditor-BqE52ZfH.js";import"./UserSearchBoxV2-ll7qi3IQ.js";import"./useDebouncedEffect-192asUuV.js";import"./use-deep-compare-effect.esm-5It3HpKk.js";import"./uniq-D5B3zGmk.js";import"./without-iHOmdpB0.js";import"./UserBadge-BX3dmPcL.js";import"./SkeletonTable-fAq5iwau.js";import"./MenuItem-CaHzOUpM.js";import"./Card-CJycqTtX.js";import"./Chip-r_XzcIen.js";import"./Select-aab027f3.esm-CV6D3IOI.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DiNWhzoh.js";import"./TeamBadge-CZRad4Nq.js";import"./SkeletonButton-D-O8A1CK.js";import"./SkeletonInlineBlock-B2BP_SJl.js";import"./SkeletonParagraph-BJcHUZ4o.js";import"./IconSvgButton-C5zIfzUQ.js";import"./FormControlLabel-Jukgt1aX.js";import"./Checkbox-BhF27RVr.js";import"./SwitchBase-bVvO_LRY.js";import"./useUpdateAcl-DDUUcOfc.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
