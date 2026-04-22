import{a1 as o,v as s,a2 as t}from"./iframe-BB1CyglU.js";import{A as i}from"./AclEditor-DSxAm2Qk.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DTgFr-fl.js";import"./useDebouncedEffect-6G0Ug4OG.js";import"./UserBadge-CHe7Nhbm.js";import"./useUserBundle-Bf-9hfkn.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-EsMLBsV_.js";import"./MenuItem-ChUmjrmC.js";import"./Card-M3Ee8JJT.js";import"./Chip-CF5f4rXb.js";import"./UserOrTeamBadge-CitIv8I3.js";import"./TeamBadge-C4Zmd7ex.js";import"./Autocomplete-CYtlEtNG.js";import"./usePreviousProps-ZC0xOhlJ.js";import"./SkeletonButton-q-Dp6RFE.js";import"./SkeletonInlineBlock-dhIvV08s.js";import"./SkeletonParagraph-CfPPR8eC.js";import"./IconSvgButton-t-7pXhKm.js";import"./FormControlLabel-AsYqHmfp.js";import"./Checkbox-B1LsbIzZ.js";import"./SwitchBase-DBcCC2Ae.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
