import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DcJpmp1V.js";import{A as c}from"./AccessRequirementAclEditor-BYRxq846.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BxiIunOF.js";import"./index-Cg17DPBV.js";import"./_baseOrderBy-CyUXqQnG.js";import"./_baseIteratee-BxQYWf9f.js";import"./_baseMap-DUb_jyqf.js";import"./_baseEach-Da2adyxG.js";import"./useQueries-GjC1PRXV.js";import"./useInfiniteQuery-Btt3ZcbH.js";import"./AclEditor-2t8zMfXq.js";import"./UserSearchBoxV2-D5BCjYUs.js";import"./useDebouncedEffect-D9v4yJgt.js";import"./use-deep-compare-effect.esm-COZa2kPC.js";import"./uniq-ChWLIqBD.js";import"./without-iAMJTkRA.js";import"./UserBadge-B6L3dVNq.js";import"./SkeletonTable-B6OGgiWA.js";import"./MenuItem-CbRug303.js";import"./Card-BbDWwTKw.js";import"./Chip-C_u6PkYz.js";import"./Select-aab027f3.esm-BD9hNMb4.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Cx3E1eWa.js";import"./TeamBadge-CeavigKu.js";import"./SkeletonButton-DkRzYKJ9.js";import"./SkeletonInlineBlock-D7vcjj_c.js";import"./SkeletonParagraph-nIFCADcu.js";import"./IconSvgButton-GPSxcQe0.js";import"./FormControlLabel-BABdeTL-.js";import"./Checkbox-DxwjfKtk.js";import"./SwitchBase-D-XqqAph.js";import"./useUpdateAcl-D5waMfxM.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
