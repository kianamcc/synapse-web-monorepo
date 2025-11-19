import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-C0EDAYOb.js";import{A as c}from"./AccessRequirementAclEditor-iZG_pulw.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-C5-efajy.js";import"./index-DT4yBOOW.js";import"./_baseOrderBy-CtD5rXPh.js";import"./_baseIteratee-CeH0Ppbj.js";import"./_baseMap-CEkFJX7B.js";import"./_baseEach-kVs1Rjlc.js";import"./useQueries-D0oD4fCs.js";import"./useInfiniteQuery-g2YGmReL.js";import"./AclEditor-BCdMFYkl.js";import"./UserSearchBoxV2-XdlKEaP7.js";import"./useDebouncedEffect-CI1arYuO.js";import"./use-deep-compare-effect.esm-KpsN59b5.js";import"./uniq-D40s3xcZ.js";import"./without-DN4SSwGZ.js";import"./UserBadge-cmjQhfPj.js";import"./SkeletonTable-D7smPBDi.js";import"./MenuItem-D9UPWW8O.js";import"./Card-jCkBYLfN.js";import"./Chip-C_ROoNKv.js";import"./Select-aab027f3.esm-vdFx59Ya.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CD2U-BXA.js";import"./TeamBadge-CNcbdGRg.js";import"./SkeletonButton-DQkh7W-Z.js";import"./SkeletonInlineBlock-j6WQJRAi.js";import"./SkeletonParagraph-MzkgbjcW.js";import"./IconSvgButton-BJSqOqoz.js";import"./FormControlLabel-MbC-HD77.js";import"./Checkbox-CYLG-jSh.js";import"./SwitchBase-CdmxqW8G.js";import"./useUpdateAcl-DDNfBGV0.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
