import{g as i}from"./entityHandlers-B7_BE4Dm.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Bzh7cwSR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-AzTTHwA2.js";import{g as m}from"./userProfileHandlers-DlRlsduB.js";import{P as L}from"./ProjectDataAvailability-U8MYOJO6.js";import"./index-BZnS-248.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CvvAoBuf.js";import"./mockTeam-MvU1z-Zr.js";import"./SynapseConstants-Cfptkbxn.js";import"./OrientationBanner-BRaa9FhH.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-5nsOKCAP.js";import"./index-e0gfIe59.js";import"./iframe-BykbFxtt.js";import"./spreadSx-CwcO6WA9.js";import"./react-Tbf_FGby.js";import"./FullWidthAlert-lqqowgmg.js";import"./Alert-DJWPc08H.js";import"./createTheme-DZ5nL_rD.js";import"./DefaultPropsProvider-BXO4TWC4.js";import"./useSlot-Tl_LvtWA.js";import"./useForkRef-Da1jJIxy.js";import"./createSimplePaletteValueFilter-CF7npJyo.js";import"./createSvgIcon-DHoJCVf_.js";import"./Close-Dn-7A1g-.js";import"./IconButton-jukvnqEw.js";import"./useTimeout-CPA5u6a1.js";import"./ButtonBase-BnHn_Q7I.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-8WX2PHjm.js";import"./Paper-lhCzxmF6.js";import"./useTheme-DvD79klM.js";import"./useTheme-BofUFEde.js";import"./Stack-DRojLg_k.js";import"./extendSxProp-B3-VAj6h.js";import"./getThemeProps-CK3Siddv.js";import"./Box-D2JVrGlt.js";import"./AlertTitle-9gNSrwOn.js";import"./Typography-CBY8PIjO.js";import"./index-ZPl0cf62.js";import"./ClickAwayListener-DNzX9DT0.js";import"./getReactElementRef-BYc5C6-D.js";import"./index-DmqEK8gc.js";import"./index-CG2KDzrf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-djj4PY0Q.js";import"./Tooltip-DBn857d-.js";import"./index-VFqd6hI8.js";import"./useControlled-B6WrK4gM.js";import"./Popper-CF8GC9gQ.js";import"./Button-BfMqvXfX.js";import"./uniqueId-CE9PZnRI.js";import"./toString-DyRFYDkN.js";import"./isArray-BWZ6pEjw.js";import"./isSymbol-D-1NPp5r.js";import"./times-azXudsOe.js";import"./_Uint8Array-DRwdx9zQ.js";import"./identity-DKeuBCMA.js";import"./toInteger-D9rqAmgT.js";import"./mockTableEntity-Cj2RJTiN.js";import"./mockFileEntityACLVariants-WkJQhzNc.js";import"./fakerUtils-BWnGWuIR.js";import"./mockFileEntity-DXSdasSd.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CXlDejWe.js";import"./mockSchema-DDfOHe5I.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-UseW8DYW.js";import"./QueryClientProvider-BFHjxVWG.js";import"./Link-Ci0L2TZX.js";import"./Collapse-DRGIUl1p.js";import"./_baseUniq-BWniF09F.js";import"./_getTag-Ba0gOkA8.js";import"./isEqual-DY4B9NNb.js";import"./merge-CTHP0e9H.js";import"./_initCloneObject-DcJdSeqq.js";import"./tinycolor-Begke6kS.js";import"./Fade-DeZ64Lam.js";import"./inputBaseClasses-nogW3mFW.js";import"./calculateFriendlyFileSize-EaC3OCDx.js";import"./CheckCircleTwoTone-CMZ5_-d0.js";import"./InfoTwoTone-C9bnm_ar.js";import"./useMutation-CC6bXeSn.js";import"./dayjs.min-CQRDHmGP.js";import"./chunk-AYJ5UCUI-BdnfJrS7.js";import"./cloneDeep-DUWVacao.js";import"./Skeleton-BKSNtuOK.js";import"./HelpPopover-CEa8R0K3.js";import"./MarkdownPopover-VN0aQIX_.js";import"./LightTooltip-DcM4JtFH.js";import"./MarkdownSynapse-kBQmD0l_.js";import"./SkeletonButton-D_0jUgRB.js";import"./SkeletonInlineBlock-DclyN6bf.js";import"./SkeletonTable-LHUvyu-g.js";import"./SkeletonParagraph-DNfcAtBK.js";import"./HelpOutlineTwoTone-Dai2NBAZ.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
