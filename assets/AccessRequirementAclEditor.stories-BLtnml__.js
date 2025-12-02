import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-D2BiYAJm.js";import{A as c}from"./AccessRequirementAclEditor-wsbHo5Xu.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CqTXspdJ.js";import"./index-B3O79Ih6.js";import"./_baseOrderBy-NSrYaCdk.js";import"./_baseIteratee-DJIGxw8_.js";import"./_baseMap-wsin_ybF.js";import"./_baseEach-lVBn3sji.js";import"./useQueries--e6O_A4l.js";import"./useInfiniteQuery-Sh2g8CYk.js";import"./AclEditor-DvRVpTOL.js";import"./UserSearchBoxV2-Dmhq7ipR.js";import"./useDebouncedEffect-BXvugtXE.js";import"./use-deep-compare-effect.esm-B5fo4BFf.js";import"./uniq-DNDVbKGE.js";import"./without-CKeaJtJX.js";import"./UserBadge-kZIqHyCo.js";import"./SkeletonTable-Deli_bNc.js";import"./MenuItem-DHvtuYhK.js";import"./Card-Dy_ZNw9D.js";import"./Chip-c69jX1Rh.js";import"./Select-aab027f3.esm-DdxE8ntg.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-mzUKPM24.js";import"./TeamBadge-CunxNi0a.js";import"./SkeletonButton-B12Q1It5.js";import"./SkeletonInlineBlock-BQ13hP2k.js";import"./SkeletonParagraph-BT8-dcZm.js";import"./IconSvgButton-DbEcfzj1.js";import"./FormControlLabel-qTCtrOZ6.js";import"./Checkbox-aIn5SsHz.js";import"./SwitchBase-DTUTBpjJ.js";import"./useUpdateAcl-DKRpEwvQ.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
