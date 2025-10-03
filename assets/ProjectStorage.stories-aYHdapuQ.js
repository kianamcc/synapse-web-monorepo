import{g as i}from"./entityHandlers-CtOE3qxS.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DsV7Uqwg.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-_oJM0qQX.js";import{g as m}from"./userProfileHandlers-EAVWcZLK.js";import{P as L}from"./ProjectDataAvailability-DD5LkCcW.js";import"./index-BNt_TbCr.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-B2V1oVYx.js";import"./mockTeam-DRf4roD8.js";import"./SynapseConstants-DL5YhH4S.js";import"./OrientationBanner-mORNTher.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CP2flBOM.js";import"./index-iHqCGgSD.js";import"./iframe-B7lNEjCA.js";import"./spreadSx-CwcO6WA9.js";import"./react-C8gp6qo_.js";import"./FullWidthAlert-hDDl8tGl.js";import"./Alert-Blqd_fNk.js";import"./createTheme-DVjZoLcM.js";import"./DefaultPropsProvider-Cyw12EVv.js";import"./useSlot-Co92EhaQ.js";import"./useForkRef-QOk-agIc.js";import"./createSimplePaletteValueFilter-BiBnMtNg.js";import"./createSvgIcon-zcikS4QR.js";import"./Close-DTFq5PlQ.js";import"./IconButton-MRX9Tl10.js";import"./useTimeout-BDErO9dO.js";import"./ButtonBase-CpibtBKw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CSoU-aEZ.js";import"./Paper-l2vU89bV.js";import"./useTheme-DdAf-Ccq.js";import"./useTheme-BpTHkjke.js";import"./Stack-D4AYLr5g.js";import"./useThemeProps-BtqvP0WI.js";import"./getThemeProps-D1SG0DsT.js";import"./extendSxProp-C7d5w1mF.js";import"./Box-CDAuR3Sa.js";import"./AlertTitle-DxXMQd8X.js";import"./Typography-DBnwRkQ7.js";import"./index--3ZaasC4.js";import"./ClickAwayListener-DrGahT-8.js";import"./getReactElementRef-Deaobhwy.js";import"./index-CuVSgrUP.js";import"./index-BqdGDFpd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D_bI5i2G.js";import"./Tooltip-lUCmHMJ3.js";import"./index-Do8mbRFX.js";import"./useControlled-CTTwHfL4.js";import"./Popper-DbiyN3lk.js";import"./Button-D1Zc7cY5.js";import"./uniqueId-CJSnTSFd.js";import"./toString-B7qVd2uL.js";import"./isArray-BVc5tk0h.js";import"./isSymbol-DxIswJ5e.js";import"./times-C2V6Ker1.js";import"./_Uint8Array-4Fua8vo1.js";import"./identity-DKeuBCMA.js";import"./toInteger-T3Rot4a2.js";import"./mockTableEntity-jWhI_jHQ.js";import"./mockFileEntityACLVariants-B3Bg2AxF.js";import"./fakerUtils-BJwQjnCS.js";import"./mockFileEntity-D40PT4_O.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-1a0VDMuY.js";import"./mockSchema-CtJGeEdS.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DQoxcdop.js";import"./QueryClientProvider-DZo2I7_f.js";import"./Link-8oHfVMM1.js";import"./Collapse-PeaT3Cz9.js";import"./_baseUniq-BioGUUFG.js";import"./_getTag-DMNH3Rat.js";import"./isEqual-DVzAcMpg.js";import"./noop-DX6rZLP_.js";import"./merge-DN43w6rZ.js";import"./_initCloneObject-D074hTky.js";import"./tinycolor-Begke6kS.js";import"./Fade-BrjpvEaI.js";import"./inputBaseClasses-CZKuk046.js";import"./calculateFriendlyFileSize-ChX25_t7.js";import"./CheckCircleTwoTone-Ck5csnvz.js";import"./InfoTwoTone-C4STztOF.js";import"./useMutation-BNmK4RdG.js";import"./dayjs.min-4LP4YV8J.js";import"./chunk-AYJ5UCUI-C7xelVKS.js";import"./cloneDeep-C13AQJD-.js";import"./Skeleton-BOqcwHCi.js";import"./HelpPopover-Dr56S06n.js";import"./MarkdownPopover-Dygx-4QT.js";import"./LightTooltip-B-qfkzgD.js";import"./MarkdownSynapse-DNhl0cBY.js";import"./SkeletonButton-BF5SBREW.js";import"./SkeletonInlineBlock-JMyIX4aF.js";import"./SkeletonTable-qfkj7msZ.js";import"./SkeletonParagraph-DiUeZz7j.js";import"./HelpOutlineTwoTone-CgVanTZ9.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var _,P,R;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var E,u,j;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const yr=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,yr as __namedExportsOrder,jr as default};
