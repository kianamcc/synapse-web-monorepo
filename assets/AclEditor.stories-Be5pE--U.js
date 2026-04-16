import{a1 as o,v as s,a2 as t}from"./iframe-BzzjdWy2.js";import{A as i}from"./AclEditor-CKTcAcw_.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-I73bCcbb.js";import"./useDebouncedEffect-CerfYQOW.js";import"./useUserGroupHeader-D1PoIV88.js";import"./UserOrTeamBadge-BtuJ55Zc.js";import"./TeamBadge-C2J6JE3M.js";import"./UserBadge-BqcxjeKR.js";import"./useUserBundle-pMV1EYk7.js";import"./SkeletonTable-CsxmarD8.js";import"./MenuItem-BVsCkoVz.js";import"./Card-DdtvDXS4.js";import"./Chip-NSHEYu7d.js";import"./Autocomplete-BAKaVVOT.js";import"./usePreviousProps-CKXyB07W.js";import"./SkeletonButton-BhLIT0JK.js";import"./SkeletonInlineBlock-DNuGrhmv.js";import"./SkeletonParagraph-BgDI2leK.js";import"./IconSvgButton-84nD18Vy.js";import"./FormControlLabel-CPkZMGo3.js";import"./Checkbox-DssC3FEB.js";import"./SwitchBase-Cgw9rMrL.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
