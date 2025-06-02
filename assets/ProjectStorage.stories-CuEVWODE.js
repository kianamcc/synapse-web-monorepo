import{g as s}from"./entityHandlers-BYRRUidI.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-CmCgIeiW.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-Cr-CdOs3.js";import{g as a}from"./userProfileHandlers-P6JRoTjy.js";import{P as N}from"./ProjectDataAvailability-yPwHwXPu.js";import"./index-BcBaCuja.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BADZdnNl.js";import"./mockTeam-Dmuk-uES.js";import"./SynapseConstants-Bc9QkOuy.js";import"./OrientationBanner-C0xDeZrc.js";import"./jsx-runtime-CmPIAL3R.js";import"./index-CPAysl28.js";import"./iframe-QVaIwGim.js";import"./index-Cfi_5BoH.js";import"./spreadSx-CwcO6WA9.js";import"./react-DdODerWs.js";import"./FullWidthAlert-CvUbrEPM.js";import"./Alert-CgoZYfUp.js";import"./createTheme-DbiXvULE.js";import"./resolveComponentProps-C_PwEHlD.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ig00w_A-.js";import"./createSvgIcon-80tXWpUn.js";import"./DefaultPropsProvider-CnfF9-Rb.js";import"./Close-CiQ4NjwL.js";import"./IconButton-BMcfXnSR.js";import"./ButtonBase-CpR5inzy.js";import"./useTimeout-yyO-i-xC.js";import"./TransitionGroupContext-BSRsHy0V.js";import"./useIsFocusVisible-BXrQNL1d.js";import"./useEventCallback-BOxHP3Qg.js";import"./Paper-r1jl6Dpp.js";import"./Stack-Ctx1XrrG.js";import"./getThemeProps-DF9R0_70.js";import"./useTheme-DZzq6rBq.js";import"./Box-kZGPzUZt.js";import"./AlertTitle-B5ZGPuqh.js";import"./Typography-DfZQX40p.js";import"./useTheme-DqGtWJHD.js";import"./Grow-DEfANa_e.js";import"./index-Be48diex.js";import"./utils-DIxQ68J5.js";import"./ClickAwayListener-DA4X__Yz.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Bv2IYlCg.js";import"./index-CYokp0Sh.js";import"./useControlled-CM8uzyV4.js";import"./useId-fgnRTItM.js";import"./Popper-BtCISb9F.js";import"./Button-YR-ir9vf.js";import"./uniqueId-Cr7PhUb0.js";import"./toString-DQNdCqKW.js";import"./isObjectLike-P-b5C6_6.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-Bfnfksep.js";import"./times-B2D-NVlp.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-zT4oQu7W.js";import"./mockTableEntity-CkiZh-qs.js";import"./mockFileEntityACLVariants-BZiU0-2m.js";import"./fakerUtils-DxZitB_B.js";import"./mockFileEntity-B051zSEi.js";import"./mock_file_handle-DwnN5i7-.js";import"./mockEntity-BtCdJCr9.js";import"./mockSchema-Bgy5YM9e.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-tUAo3_tB.js";import"./utils-B4Lkbc1h.js";import"./Link-BcZTHBP_.js";import"./Collapse-Cowqr0Rv.js";import"./isNil-mIoS0wuh.js";import"./_Uint8Array-DB8Kyaej.js";import"./_baseIsEqual-6dzMR-mO.js";import"./_getTag-DWiVyzA_.js";import"./tinycolor-Begke6kS.js";import"./Fade-BA0eqmYo.js";import"./Skeleton-CKTyZAmZ.js";import"./inputBaseClasses-BZ6K1IEd.js";import"./calculateFriendlyFileSize-aUiohfss.js";import"./CheckCircleTwoTone-D1KX2BuI.js";import"./InfoTwoTone-DJBg44qu.js";import"./useMutation-Bl5Kk_05.js";import"./isEqual-DHqGUy3F.js";import"./dayjs.min-DGPe2AkK.js";import"./chunk-AYJ5UCUI-ClSnvEhG.js";import"./cloneDeep-DR4FZuwC.js";import"./_initCloneObject-neulzZJe.js";import"./merge-dsrSF2eN.js";import"./util-BIMDO8qI.js";import"./HelpPopover-CWfJnml5.js";import"./MarkdownPopover-CcrCFwWP.js";import"./LightTooltip-BxxzEMaR.js";import"./MarkdownSynapse-ULZM-wOs.js";import"./SkeletonButton-BeGWqy-b.js";import"./SkeletonInlineBlock-s5U7u7IS.js";import"./SkeletonTable-NNXRM3SA.js";import"./SkeletonParagraph--_tl4g9l.js";import"./HelpOutlineTwoTone-BxXTvgTb.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    projectId: UNDER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,E,R;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    projectId: OVER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(R=(E=e.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var u,j,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const Lt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,Lt as __namedExportsOrder,St as default};
