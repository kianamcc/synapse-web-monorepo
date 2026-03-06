import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BMgfrXfb.js";import{A as i}from"./AccessRequirementAclEditor-B55x1wDz.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DjjUGyyf.js";import"./index-DVKuYuST.js";import"./_baseOrderBy-BXE4YCND.js";import"./_baseIteratee-5eLKOOqR.js";import"./_baseMap-CqqPaLqj.js";import"./_baseEach-j47pxew3.js";import"./useInfiniteQuery-Cbz01EgT.js";import"./AclEditor-bCY6thIb.js";import"./UserSearchBoxV2-Cgxyglec.js";import"./useDebouncedEffect-DZ2gqiSz.js";import"./use-deep-compare-effect.esm-DGvQ55C3.js";import"./uniq-4WzyR3VV.js";import"./without-BSdGpAcc.js";import"./UserBadge-AJCe_aZw.js";import"./useUserBundle-DHT6W9rd.js";import"./SkeletonTable-DhKHQ1GZ.js";import"./MenuItem-Dxe8Sczu.js";import"./Card-D0xZuJv-.js";import"./Chip-Bg1Tm2ZJ.js";import"./Select-aab027f3.esm-DITOJm8G.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C4ygSLJL.js";import"./TeamBadge-DRBhN9Lx.js";import"./SkeletonButton-D7PyYMMO.js";import"./SkeletonInlineBlock-DrHJKgo1.js";import"./SkeletonParagraph-B8T8hjnS.js";import"./IconSvgButton-BT3oWZjy.js";import"./FormControlLabel-CMUY3YKI.js";import"./Checkbox-C5g82_9m.js";import"./SwitchBase-C3j3eoH9.js";import"./useUpdateAcl-Dcmz08aN.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
