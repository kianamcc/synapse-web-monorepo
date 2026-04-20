import{a1 as o,v as s,a2 as t}from"./iframe-Bs_Prdk_.js";import{A as i}from"./AclEditor-gyOBLlyM.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-UYyUJ3PA.js";import"./useDebouncedEffect-EGZtbiV8.js";import"./UserBadge-DwAlTeJ-.js";import"./useUserBundle-CXGw3t_9.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-Q4aEQVXF.js";import"./MenuItem-DQ2i9Xmi.js";import"./Card-1Ir83r-T.js";import"./Chip-D6_WALXy.js";import"./UserOrTeamBadge-BBCgIxYc.js";import"./TeamBadge-DScDjw1f.js";import"./Autocomplete-DzYLqFiJ.js";import"./usePreviousProps-_O8gdq38.js";import"./SkeletonButton-B-1H7QMA.js";import"./SkeletonInlineBlock-Djc2NMos.js";import"./SkeletonParagraph-NTXhe3CA.js";import"./IconSvgButton-BWns351h.js";import"./FormControlLabel-D0PCi45L.js";import"./Checkbox-e_vFu3N4.js";import"./SwitchBase-CC1BS3iN.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
