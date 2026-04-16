import{a1 as o,v as s,a2 as t}from"./iframe--e7tPOH7.js";import{A as i}from"./AclEditor-D7Mzdylq.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-J6-nDvfU.js";import"./useDebouncedEffect-Htxr2mzk.js";import"./useUserGroupHeader-s0veRE4v.js";import"./UserOrTeamBadge-bUKUxpGX.js";import"./TeamBadge-C2HNtI-1.js";import"./UserBadge-BS9OSWR1.js";import"./useUserBundle-Cvjt2mpu.js";import"./SkeletonTable-CaoeDxPi.js";import"./MenuItem-ClPLR1c1.js";import"./Card-BExoznwr.js";import"./Chip-BjLa75DM.js";import"./Autocomplete-CwBzqZJ8.js";import"./usePreviousProps-C2VjmU0C.js";import"./SkeletonButton-_aLRz4g8.js";import"./SkeletonInlineBlock-CYh7Z-UU.js";import"./SkeletonParagraph-DxfKrJwN.js";import"./IconSvgButton-POorAYx3.js";import"./FormControlLabel-DIFOv5rN.js";import"./Checkbox-BZ_kVbRn.js";import"./SwitchBase-xd1f4aUc.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
