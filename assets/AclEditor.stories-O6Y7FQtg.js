import{a3 as o,w as p,a4 as a}from"./iframe-BXWMp6Ce.js";import{A as m}from"./AclEditor-BqE52ZfH.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-ll7qi3IQ.js";import"./useDebouncedEffect-192asUuV.js";import"./use-deep-compare-effect.esm-5It3HpKk.js";import"./uniq-D5B3zGmk.js";import"./without-iHOmdpB0.js";import"./UserBadge-BX3dmPcL.js";import"./SkeletonTable-fAq5iwau.js";import"./MenuItem-CaHzOUpM.js";import"./Card-CJycqTtX.js";import"./Chip-r_XzcIen.js";import"./Select-aab027f3.esm-CV6D3IOI.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DiNWhzoh.js";import"./TeamBadge-CZRad4Nq.js";import"./SkeletonButton-D-O8A1CK.js";import"./SkeletonInlineBlock-B2BP_SJl.js";import"./SkeletonParagraph-BJcHUZ4o.js";import"./IconSvgButton-C5zIfzUQ.js";import"./FormControlLabel-Jukgt1aX.js";import"./Checkbox-BhF27RVr.js";import"./SwitchBase-bVvO_LRY.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
