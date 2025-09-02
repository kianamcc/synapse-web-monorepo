import{g as i}from"./entityHandlers-kkuWA92l.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-BGhw6sr7.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-_BY2npJD.js";import{h as d,H as l}from"./index-DSwlEixK.js";import{g as m}from"./userProfileHandlers-DWvqogAF.js";import{P as L}from"./ProjectDataAvailability-BVBG3q4m.js";import"./index-CaQasaGY.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CTpqf2TH.js";import"./mockTeam-CoVfxV8W.js";import"./SynapseConstants-DQOFKbIW.js";import"./OrientationBanner-DfoOiSsv.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BOQSUwlj.js";import"./index-BLkVaqQU.js";import"./iframe-D1OUWgU8.js";import"./spreadSx-CwcO6WA9.js";import"./react-DkLhILX5.js";import"./FullWidthAlert-B1Qrucih.js";import"./Alert-C1CocLRY.js";import"./createTheme-WgZwGEUU.js";import"./DefaultPropsProvider-CH3a_DkB.js";import"./useSlot-Dq2qON5u.js";import"./useForkRef-Ig4Zmx52.js";import"./createSimplePaletteValueFilter-Dndo3dQe.js";import"./createSvgIcon-GnSjhHwe.js";import"./Close-CO74w9jz.js";import"./IconButton-CVSYLB8I.js";import"./useTimeout-ClfH_HF0.js";import"./ButtonBase-CKvKduXZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C3fM0KPH.js";import"./Paper-CNOpQakA.js";import"./useTheme-DCyIfbaq.js";import"./useTheme-DMtfHtJq.js";import"./Stack-FYlEw4fq.js";import"./extendSxProp-CcNmwxbI.js";import"./getThemeProps-DmkHaZxY.js";import"./Box-BWGLgO_L.js";import"./AlertTitle-BRRtgJhi.js";import"./Typography-CnElUjJF.js";import"./index-DDGHBRu9.js";import"./ClickAwayListener-DeeCbT0O.js";import"./getReactElementRef-CIFt_A8T.js";import"./index-IrKQg-yb.js";import"./index-BLl-bmD9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DhrVRGR6.js";import"./Tooltip-CkaNIw4Q.js";import"./index-BscvuTv2.js";import"./useControlled-yelixl_y.js";import"./Popper-D7cy8wUq.js";import"./Button-CosI4lZc.js";import"./uniqueId-Byxi7FUU.js";import"./toString-Co3PphKq.js";import"./isArray-FdqKaHoJ.js";import"./isSymbol-BnbpIT-h.js";import"./times-DkppwrTQ.js";import"./_Uint8Array-BoNxe12X.js";import"./identity-DKeuBCMA.js";import"./toInteger-BnqeyTgZ.js";import"./mockTableEntity-HketdnJ5.js";import"./mockFileEntityACLVariants-BATWdgHT.js";import"./fakerUtils-CoUZZJZc.js";import"./mockFileEntity-WA2DcVzh.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-Ac9KuirI.js";import"./mockSchema-3UkizY31.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-BU8-CzGU.js";import"./QueryClientProvider-MDp9J6mw.js";import"./Link-CmfYylf_.js";import"./Collapse-CuvsxGh1.js";import"./_baseUniq-ICRME_SG.js";import"./_getTag-BMcHv2ST.js";import"./isEqual-CxX9_Jry.js";import"./merge-CWElKNDQ.js";import"./_initCloneObject-Davy6xDh.js";import"./tinycolor-Begke6kS.js";import"./Fade-DL6kU-O8.js";import"./inputBaseClasses-D2062J26.js";import"./calculateFriendlyFileSize-Cujvwhz9.js";import"./CheckCircleTwoTone-o604Y7DM.js";import"./InfoTwoTone-D9JUoD_z.js";import"./useMutation-CQn0gxgX.js";import"./dayjs.min-z0YraemM.js";import"./chunk-AYJ5UCUI-IQN6yzis.js";import"./cloneDeep-DfwkV2VA.js";import"./Skeleton-CpZbRh6J.js";import"./HelpPopover-CwbU-1xk.js";import"./MarkdownPopover-n6KJdKFu.js";import"./LightTooltip-BXWsbAZL.js";import"./MarkdownSynapse-DCJf78gp.js";import"./SkeletonButton-COmwrDmK.js";import"./SkeletonInlineBlock-BvQ7dWo1.js";import"./SkeletonTable-D5pTnLTk.js";import"./SkeletonParagraph-DutvnqNQ.js";import"./HelpOutlineTwoTone-DMmUoJRS.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const ur=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,ur as __namedExportsOrder,Er as default};
