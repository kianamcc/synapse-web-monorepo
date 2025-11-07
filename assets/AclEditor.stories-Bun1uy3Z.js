import{a3 as o,w as p,a4 as a}from"./iframe-i1vzbyyB.js";import{A as m}from"./AclEditor-GYqR89qj.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-CQg3tJw3.js";import"./useDebouncedEffect-C1rNl5HJ.js";import"./use-deep-compare-effect.esm-DEN-S5AF.js";import"./uniq-BPWKJIgS.js";import"./without-BtyDeKgp.js";import"./UserBadge-BbrHVLhW.js";import"./SkeletonTable-B_XrK9-X.js";import"./MenuItem-tnFeCmzc.js";import"./Card-C6x5W7R6.js";import"./Chip-CnB9FDDp.js";import"./Select-aab027f3.esm-C-EuH7mP.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BkZnLJBa.js";import"./TeamBadge-BSux7N22.js";import"./SkeletonButton-BHwx8d5H.js";import"./SkeletonInlineBlock-CUOfhEKh.js";import"./SkeletonParagraph-CCi6Cu6y.js";import"./IconSvgButton-Dy0Pt4a1.js";import"./FormControlLabel-CF4egUKt.js";import"./Checkbox-CmnSISLK.js";import"./SwitchBase-gKvlxrU5.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,k as default};
