import{a3 as o,w as t,a4 as s}from"./iframe-DmIbR_r6.js";import{A as i}from"./AclEditor-DGujOEjN.js";import"./index-Chi_LkuB.js";import"./UserSearchBoxV2-dFGVowRg.js";import"./useDebouncedEffect-D6e_8jOD.js";import"./use-deep-compare-effect.esm-CJglqS1P.js";import"./uniq-DzOHloOS.js";import"./without-BSOkDosU.js";import"./UserBadge-BHBKP-iC.js";import"./useUserBundle-B2LL3X0c.js";import"./useSuspenseQuery-Bb68RTLn.js";import"./SkeletonTable-Bj3J0JYP.js";import"./MenuItem-BnZD-coi.js";import"./Card-DxCpoD8K.js";import"./Chip-BRJez_-q.js";import"./Select-aab027f3.esm-DRYArQML.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CEz3_8Ny.js";import"./TeamBadge-CQjBBlal.js";import"./SkeletonButton-vlFvkNkv.js";import"./SkeletonInlineBlock-DFTJODNT.js";import"./SkeletonParagraph-BUZlTYNH.js";import"./IconSvgButton-CgIdGnaZ.js";import"./FormControlLabel-F84xQZnV.js";import"./Checkbox-BkqDpdYQ.js";import"./SwitchBase-CUTqoSBF.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:t,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:s,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,k as default};
