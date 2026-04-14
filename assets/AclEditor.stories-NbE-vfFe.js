import{a1 as o,v as s,a2 as t}from"./iframe-BbyAgVod.js";import{A as i}from"./AclEditor-Z6WlBlac.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-BGa8EQ8D.js";import"./useDebouncedEffect-DH3r_GOo.js";import"./useUserGroupHeader-BxByFlPX.js";import"./UserOrTeamBadge-ChP3CHKo.js";import"./TeamBadge-Bx6Pb7M1.js";import"./UserBadge-BMeyNDaA.js";import"./useUserBundle-BZrAVgQo.js";import"./SkeletonTable-8hMWU9b8.js";import"./MenuItem-BOC7yxlQ.js";import"./Card-BIlAp2RU.js";import"./Chip-DvcIhhPD.js";import"./Autocomplete-BU4fl7Bk.js";import"./usePreviousProps-Ho5tQjOf.js";import"./SkeletonButton-CvgBxsOq.js";import"./SkeletonInlineBlock-CGRSHTJp.js";import"./SkeletonParagraph-TSyA2Bdi.js";import"./IconSvgButton-mzy9xypx.js";import"./FormControlLabel-DyfmsA3D.js";import"./Checkbox-CEuzbj9w.js";import"./SwitchBase-D4_ReTEb.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
