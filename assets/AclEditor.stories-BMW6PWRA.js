import{a1 as o,v as s,a2 as t}from"./iframe-DOWR2259.js";import{A as i}from"./AclEditor-Dm19Vtg8.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-B-85fT0D.js";import"./useDebouncedEffect-CWEHFmV5.js";import"./UserBadge-BK9aqAni.js";import"./useUserBundle-HK3fngpg.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-juUGe8TZ.js";import"./MenuItem-LKT-cJqE.js";import"./Card-CxyXWyxz.js";import"./Chip-CUZVi0iR.js";import"./UserOrTeamBadge-8wxXY_TV.js";import"./TeamBadge-DTsLUZsx.js";import"./Autocomplete-CBDbHqTD.js";import"./usePreviousProps-4oQzHQnB.js";import"./SkeletonButton-CL0b5STV.js";import"./SkeletonInlineBlock-dfitKoKa.js";import"./SkeletonParagraph-tnS4LISQ.js";import"./IconSvgButton-CyzCUvJp.js";import"./FormControlLabel-wYqx77kH.js";import"./Checkbox-BEAP1Si0.js";import"./SwitchBase-CQWm8_8T.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
