import{a3 as o,w as t,a4 as s}from"./iframe-CekoipMQ.js";import{A as i}from"./AclEditor-BMuOPTRl.js";import"./index-Chi_LkuB.js";import"./UserSearchBoxV2-CqWJz8-B.js";import"./useDebouncedEffect-DIxmTt_E.js";import"./use-deep-compare-effect.esm-iBoQXTvh.js";import"./uniq-D3mA5g3i.js";import"./without-DYweA2pi.js";import"./UserBadge-D9eizTMK.js";import"./useUserBundle-CSEHyGRi.js";import"./useSuspenseQuery-Bo7ICQPt.js";import"./SkeletonTable-BgJD-A8R.js";import"./MenuItem-RwAbQprV.js";import"./Card-aA0MF0JQ.js";import"./Chip-Dup-72Fi.js";import"./Select-aab027f3.esm-CDHXicX3.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-ay8mNeaA.js";import"./TeamBadge-Cr6CCCrr.js";import"./SkeletonButton-DjK3K6zG.js";import"./SkeletonInlineBlock-C1cA1eyz.js";import"./SkeletonParagraph-9U18_kZ7.js";import"./IconSvgButton-PdRPLKFx.js";import"./FormControlLabel-DIv_L68F.js";import"./Checkbox-C1LBy7wi.js";import"./SwitchBase-CHYvM6e8.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:t,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:s,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
