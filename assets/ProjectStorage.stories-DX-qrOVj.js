import{g as i}from"./entityHandlers-DKlrzmEO.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-DOVBop4s.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-_BY2npJD.js";import{h as d,H as l}from"./index-C0kNEs8X.js";import{g as m}from"./userProfileHandlers-Dtk720i8.js";import{P as L}from"./ProjectDataAvailability-5XNL7at4.js";import"./index-C77R9_9l.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BAMuoe12.js";import"./mockTeam-CYffIjN0.js";import"./SynapseConstants-C5A8J8gn.js";import"./OrientationBanner-LURESH-j.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D-PX2Hpd.js";import"./index-CYBhMOzl.js";import"./iframe-CuDDZx9Z.js";import"./spreadSx-CwcO6WA9.js";import"./react-CZzQ_yVr.js";import"./FullWidthAlert-BbNm5x9Z.js";import"./Alert-KRswuaf9.js";import"./createTheme-UDEHErQ_.js";import"./DefaultPropsProvider-DDIfh48T.js";import"./useSlot-BL4Blot2.js";import"./useForkRef-C35-TTLb.js";import"./createSimplePaletteValueFilter-D_WBzOiq.js";import"./createSvgIcon-BkFFA0uY.js";import"./Close-C1BwiOLd.js";import"./IconButton-D17trTNl.js";import"./useTimeout-BVUmv_-j.js";import"./ButtonBase-B6fNSxmE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BYOlEuL1.js";import"./Paper-CnKf9E1P.js";import"./useTheme-Dal23Fh_.js";import"./useTheme-W3ylXsbv.js";import"./Stack-RN1WeRUL.js";import"./extendSxProp-YGhkNB1w.js";import"./getThemeProps-8BAWzFC0.js";import"./Box-DnHtG_j1.js";import"./AlertTitle-BqJO1dBB.js";import"./Typography-CNeR-cPE.js";import"./index-22XR2kUJ.js";import"./ClickAwayListener-5mjrolze.js";import"./getReactElementRef-60BZXwdQ.js";import"./index-CoaIb9Ej.js";import"./index-OByBR4g1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CCBW4MLj.js";import"./Tooltip-DN0tYEHn.js";import"./index-C0rrpg4I.js";import"./useControlled-C2ML203S.js";import"./Popper-Dt-j-fXA.js";import"./Button-DrSgAP7H.js";import"./uniqueId-CNy89bM-.js";import"./toString-Cf2_mtih.js";import"./isArray-BGyiIjyu.js";import"./isSymbol-B9BIqgsG.js";import"./times-D9bMgF0B.js";import"./_Uint8Array-mjR_JKoo.js";import"./identity-DKeuBCMA.js";import"./toInteger-BDBhZXps.js";import"./mockTableEntity-B20_2bMN.js";import"./mockFileEntityACLVariants-CUdbH-oC.js";import"./fakerUtils-DaLLrPNc.js";import"./mockFileEntity-D7u-2M4I.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-imkNW7hB.js";import"./mockSchema-KtUxuz4S.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-ByJfln0Z.js";import"./QueryClientProvider-D4nt8BTL.js";import"./Link-qzIb3qG_.js";import"./Collapse-Bx3bHstz.js";import"./_baseUniq-BBovCwJQ.js";import"./_getTag-D7U8VkiW.js";import"./isEqual-CcI7tI-V.js";import"./merge-B2Hf3UCX.js";import"./_initCloneObject-BacQv0Vo.js";import"./tinycolor-Begke6kS.js";import"./Fade-C8mW4-6F.js";import"./inputBaseClasses-BQmUwsdM.js";import"./calculateFriendlyFileSize-DOnx2oHL.js";import"./CheckCircleTwoTone-sMI1OzSo.js";import"./InfoTwoTone-Cxpwfqd2.js";import"./useMutation-0kGzfmP1.js";import"./dayjs.min-CG53A_f7.js";import"./chunk-AYJ5UCUI-DEcXrblD.js";import"./cloneDeep-DvXu7W8a.js";import"./Skeleton-CZU0fRin.js";import"./HelpPopover-DBaMMHb-.js";import"./MarkdownPopover-DZlZAscM.js";import"./LightTooltip-D1Oms3X_.js";import"./MarkdownSynapse-CLoPwc-g.js";import"./SkeletonButton-BGFAlAKD.js";import"./SkeletonInlineBlock-C8fRZXPa.js";import"./SkeletonTable-DwV5ROuX.js";import"./SkeletonParagraph-BZmtgtlA.js";import"./HelpOutlineTwoTone-CIVwK2QT.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
