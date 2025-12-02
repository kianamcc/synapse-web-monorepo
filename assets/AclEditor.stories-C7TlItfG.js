import{a3 as o,w as p,a4 as a}from"./iframe-D2BiYAJm.js";import{A as m}from"./AclEditor-DvRVpTOL.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-Dmhq7ipR.js";import"./useDebouncedEffect-BXvugtXE.js";import"./use-deep-compare-effect.esm-B5fo4BFf.js";import"./uniq-DNDVbKGE.js";import"./without-CKeaJtJX.js";import"./UserBadge-kZIqHyCo.js";import"./SkeletonTable-Deli_bNc.js";import"./MenuItem-DHvtuYhK.js";import"./Card-Dy_ZNw9D.js";import"./Chip-c69jX1Rh.js";import"./Select-aab027f3.esm-DdxE8ntg.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-mzUKPM24.js";import"./TeamBadge-CunxNi0a.js";import"./SkeletonButton-B12Q1It5.js";import"./SkeletonInlineBlock-BQ13hP2k.js";import"./SkeletonParagraph-BT8-dcZm.js";import"./IconSvgButton-DbEcfzj1.js";import"./FormControlLabel-qTCtrOZ6.js";import"./Checkbox-aIn5SsHz.js";import"./SwitchBase-DTUTBpjJ.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
