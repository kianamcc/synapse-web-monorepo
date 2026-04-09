import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-FDH2xSLc.js";import{A as i}from"./AccessRequirementAclEditor-Dkz2yKUM.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DVu5cb0o.js";import"./index-CzuvZxX2.js";import"./_baseOrderBy-CTk-QBsA.js";import"./_baseIteratee-BrA6Zoce.js";import"./_baseMap-A80CCfax.js";import"./_baseEach-DawTZUlN.js";import"./useInfiniteQuery-B-tinRUO.js";import"./AclEditor-CHIF2-af.js";import"./UserSearchBox-6qlMdxGM.js";import"./useDebouncedEffect-BzNxdHf3.js";import"./useUserGroupHeader-DQ8vb17b.js";import"./UserOrTeamBadge-B8cVGyFZ.js";import"./TeamBadge-DdSnOzUm.js";import"./UserBadge-BTH9G2vn.js";import"./useUserBundle-C0iPIx3M.js";import"./SkeletonTable-BfwZdIL6.js";import"./MenuItem-Cv9z9awV.js";import"./Card-Cp-G3rzT.js";import"./Chip-CzpLZLiP.js";import"./Autocomplete-t_5KhxxP.js";import"./usePreviousProps-DMYUt7tk.js";import"./SkeletonButton-xYbyYL9k.js";import"./SkeletonInlineBlock-CrGk-deJ.js";import"./SkeletonParagraph-BniWr4_C.js";import"./IconSvgButton-B4-Gtk6P.js";import"./FormControlLabel-BnPk5lfl.js";import"./Checkbox-BctxXkIC.js";import"./SwitchBase-B8j7JnXc.js";import"./useUpdateAcl-DKgq36Qh.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...s.parameters?.docs?.source}}};const J=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{s as DevDemo,r as MockDemoExistingAcl,t as MockDemoNoExistingAcl,J as __namedExportsOrder,z as default};
