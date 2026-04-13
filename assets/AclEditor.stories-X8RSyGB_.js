import{a1 as o,v as s,a2 as t}from"./iframe--4PIu_qy.js";import{A as i}from"./AclEditor-CcoVpobk.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CeYjc1TM.js";import"./useDebouncedEffect-BmrRRhyl.js";import"./useUserGroupHeader-BLsJZNZM.js";import"./UserOrTeamBadge-SQB9926a.js";import"./TeamBadge-DF4ycAVV.js";import"./UserBadge-CojLO1dw.js";import"./useUserBundle-D0IPmJJX.js";import"./SkeletonTable-6mGZvVCs.js";import"./MenuItem-B5CZnWag.js";import"./Card-Cck2UD4g.js";import"./Chip-DEb3tB_0.js";import"./Autocomplete-Dbpmp649.js";import"./usePreviousProps-Bb46F9DU.js";import"./SkeletonButton-CbJBGnT-.js";import"./SkeletonInlineBlock-FN6COppS.js";import"./SkeletonParagraph-DjKVaY8f.js";import"./IconSvgButton-8oFL6SxX.js";import"./FormControlLabel-C7P4GXE_.js";import"./Checkbox-M-8y5vkU.js";import"./SwitchBase-dr8cwp_f.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
