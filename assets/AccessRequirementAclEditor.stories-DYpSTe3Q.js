import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DPeQX9IY.js";import{A as i}from"./AccessRequirementAclEditor-Dk7mQcb2.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BUU86gwl.js";import"./index-BW92oQn_.js";import"./_baseOrderBy-CiWbJ4fO.js";import"./_baseIteratee-CFQTp0Io.js";import"./_baseMap-B4TD45PJ.js";import"./_baseEach-CmWAzlou.js";import"./useQueries-DguaIKVw.js";import"./useInfiniteQuery-xxALfQ-J.js";import"./AclEditor-BKVFOxyp.js";import"./useRealmPrincipals-DPKusbFB.js";import"./UserSearchBoxV2-CKQ7Q-6w.js";import"./useDebouncedEffect-C6YBGmU_.js";import"./use-deep-compare-effect.esm-BGGgLhTn.js";import"./uniq-B4CZLMQR.js";import"./without-B21189xg.js";import"./UserBadge-Ds_oTg_h.js";import"./useUserBundle--Ku81fgt.js";import"./useSuspenseQuery-CVo65e5I.js";import"./SkeletonTable-BduDk56Z.js";import"./MenuItem-Bz0n2Htj.js";import"./Card-BzTjl1Pv.js";import"./Chip-CLPwGdB7.js";import"./Select-aab027f3.esm-B6gyu4Fc.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BvVaYQG2.js";import"./TeamBadge-C-cS_y1J.js";import"./SkeletonButton-BCmBwLom.js";import"./SkeletonInlineBlock-CaY9GCqL.js";import"./SkeletonParagraph-Qv67bFel.js";import"./IconSvgButton-B_lnwpBd.js";import"./FormControlLabel-BsfNF4hc.js";import"./Checkbox-Bep-teHK.js";import"./SwitchBase-BdJN6sqS.js";import"./useUpdateAcl-B0Do-HdS.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const te=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,te as __namedExportsOrder,se as default};
