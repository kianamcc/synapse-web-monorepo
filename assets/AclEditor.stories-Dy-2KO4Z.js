import{a1 as o,v as s,a2 as t}from"./iframe-CbwEnKrb.js";import{A as i}from"./AclEditor-C9LTns7-.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-Br8M_PUw.js";import"./useDebouncedEffect-BaffJhTn.js";import"./useUserGroupHeader-ZU35AXfG.js";import"./UserOrTeamBadge-DXG_AKkY.js";import"./TeamBadge-CMa9hePG.js";import"./UserBadge-Cl4jYQAi.js";import"./useUserBundle-pZ8IkSgn.js";import"./SkeletonTable-BPQpmDB9.js";import"./MenuItem-D7q812IO.js";import"./Card-B5jbE4Ic.js";import"./Chip-CmhjDClg.js";import"./Autocomplete-DaOKx0WE.js";import"./usePreviousProps-DEaKdrDo.js";import"./SkeletonButton-CVSY2DZ9.js";import"./SkeletonInlineBlock-CWmuPwAO.js";import"./SkeletonParagraph-DANy215S.js";import"./IconSvgButton-Bf6QGZyy.js";import"./FormControlLabel-BZevxPBM.js";import"./Checkbox-DZpQgbr_.js";import"./SwitchBase-2hzSnv65.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
