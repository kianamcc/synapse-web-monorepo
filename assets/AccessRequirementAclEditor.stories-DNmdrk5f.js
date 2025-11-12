import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CilUHbPg.js";import{A as c}from"./AccessRequirementAclEditor-DfxnDWHF.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BhNolthM.js";import"./index-C8mATgyQ.js";import"./_baseOrderBy-DNUTmal3.js";import"./_baseIteratee-aXPVtJAg.js";import"./_baseMap-ByG3mCKH.js";import"./_baseEach-ChVrrgk5.js";import"./useQueries-C86FHiXO.js";import"./useInfiniteQuery-CiMH4Vku.js";import"./AclEditor-B9Xmxo3T.js";import"./UserSearchBoxV2-BxedFlCj.js";import"./useDebouncedEffect-YjRXnNv0.js";import"./use-deep-compare-effect.esm-BSZ-nTCj.js";import"./uniq-qUh1kdV4.js";import"./without-BI-xwuld.js";import"./UserBadge-CpFSGMSz.js";import"./SkeletonTable-BBjGNDxT.js";import"./MenuItem-DRH3ELNc.js";import"./Card-BAFuavy_.js";import"./Chip-CkYJv3x0.js";import"./Select-aab027f3.esm-CjttkeWq.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BMQVHrFB.js";import"./TeamBadge-CgEp4wVL.js";import"./SkeletonButton-CSbYuARp.js";import"./SkeletonInlineBlock-CTT3cgnO.js";import"./SkeletonParagraph-Db2vPRz1.js";import"./IconSvgButton-JW6HRxek.js";import"./FormControlLabel-BDptKX7D.js";import"./Checkbox-jrzWhPpX.js";import"./SwitchBase-cymeMccA.js";import"./useUpdateAcl-vPnIIYVI.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
