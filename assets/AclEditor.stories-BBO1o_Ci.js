import{a1 as o,v as s,a2 as t}from"./iframe-DhktRnIr.js";import{A as i}from"./AclEditor-DZRMuWyE.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-D_g80B3n.js";import"./useDebouncedEffect-Cu8D01ca.js";import"./useUserGroupHeader-CMPn8F8q.js";import"./UserOrTeamBadge-BOlqpvND.js";import"./TeamBadge-DtjlyZvg.js";import"./UserBadge-DE1mLr5D.js";import"./useUserBundle-Dg86kmyv.js";import"./SkeletonTable-PLxwnxI1.js";import"./MenuItem-DuPBgdii.js";import"./Card-BQOzBjnu.js";import"./Chip-yuMuQ34K.js";import"./Autocomplete-R4tK8iQ1.js";import"./usePreviousProps-CvY5kb-Y.js";import"./SkeletonButton-D2U44ACQ.js";import"./SkeletonInlineBlock-XnMenv0L.js";import"./SkeletonParagraph-BmLXaGRK.js";import"./IconSvgButton-LCRAsxGk.js";import"./FormControlLabel-D9RU6qZV.js";import"./Checkbox-DFP_HCIj.js";import"./SwitchBase-TNDfqxp2.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
