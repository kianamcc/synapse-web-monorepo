import{a1 as o,v as s,a2 as t}from"./iframe-BO8yZwbi.js";import{A as i}from"./AclEditor-DVRgP608.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CDU6mGwp.js";import"./useDebouncedEffect-rkeBO--D.js";import"./UserBadge-DUaTP9cc.js";import"./useUserBundle-D6W7YJ3k.js";import"./SkeletonTable-pZFOgUxM.js";import"./MenuItem-CbpqHvkr.js";import"./Card-BK0RveQD.js";import"./Chip-CHXpsjrm.js";import"./UserOrTeamBadge-B2u09AIu.js";import"./TeamBadge-Ddyfgq3U.js";import"./Autocomplete-DA2l69mt.js";import"./usePreviousProps-D3abc4KG.js";import"./SkeletonButton-BjMHDMih.js";import"./SkeletonInlineBlock-DsdOdTux.js";import"./SkeletonParagraph-B75rYAhF.js";import"./IconSvgButton-CftEzUYj.js";import"./FormControlLabel-DYL89ugT.js";import"./Checkbox-Du_6kpR0.js";import"./SwitchBase-Cx_CtAYe.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const D=["Demo"];export{e as Demo,D as __namedExportsOrder,y as default};
