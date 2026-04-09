import{a1 as o,v as s,a2 as t}from"./iframe-FDH2xSLc.js";import{A as i}from"./AclEditor-CHIF2-af.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-6qlMdxGM.js";import"./useDebouncedEffect-BzNxdHf3.js";import"./useUserGroupHeader-DQ8vb17b.js";import"./UserOrTeamBadge-B8cVGyFZ.js";import"./TeamBadge-DdSnOzUm.js";import"./UserBadge-BTH9G2vn.js";import"./useUserBundle-C0iPIx3M.js";import"./SkeletonTable-BfwZdIL6.js";import"./MenuItem-Cv9z9awV.js";import"./Card-Cp-G3rzT.js";import"./Chip-CzpLZLiP.js";import"./Autocomplete-t_5KhxxP.js";import"./usePreviousProps-DMYUt7tk.js";import"./SkeletonButton-xYbyYL9k.js";import"./SkeletonInlineBlock-CrGk-deJ.js";import"./SkeletonParagraph-BniWr4_C.js";import"./IconSvgButton-B4-Gtk6P.js";import"./FormControlLabel-BnPk5lfl.js";import"./Checkbox-BctxXkIC.js";import"./SwitchBase-B8j7JnXc.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    resourceAccessList: [{
      principalId: MOCK_USER_ID,
      accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS]
    }, {
      principalId: MOCK_TEAM_ID,
      accessType: [ACCESS_TYPE.EXEMPTION_ELIGIBLE]
    }]
  },
  parameters: {
    stack: 'mock'
  }
}`,...e.parameters?.docs?.source}}};const f=["Demo"];export{e as Demo,f as __namedExportsOrder,D as default};
