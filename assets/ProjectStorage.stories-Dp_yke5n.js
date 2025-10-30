import{g as i}from"./entityHandlers-DjPd_fRB.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DU0KbIhN.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-CyDiuyBF.js";import{g as m}from"./userProfileHandlers-D2jK89As.js";import{P as L}from"./ProjectDataAvailability-CNVJyIo1.js";import"./index-C9kbviCp.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Bgm_QYle.js";import"./mockTeam-D9TCFvS5.js";import"./SynapseConstants-BvkCgq3q.js";import"./OrientationBanner-BIqxssu4.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D_I69aNJ.js";import"./index-7KdIsKFN.js";import"./iframe-CsYtrl69.js";import"./spreadSx-CwcO6WA9.js";import"./react-CSJLJtgY.js";import"./FullWidthAlert-BcjTofwJ.js";import"./Alert-CXyg9zZW.js";import"./createTheme-D99HVzHw.js";import"./DefaultPropsProvider-BDkT1_Zg.js";import"./useSlot-DDzMf-NS.js";import"./useForkRef-DdlSoLQT.js";import"./createSimplePaletteValueFilter-zzg78wfu.js";import"./createSvgIcon-BJGUPwTr.js";import"./Close-C1MGPhMz.js";import"./IconButton-hCNA1nO_.js";import"./useTimeout-C6eH0LMY.js";import"./ButtonBase-DHXgaqy8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ChNe0x20.js";import"./Paper-4XJoZFT8.js";import"./useTheme-DDJP92fw.js";import"./useTheme-BUI8t9EN.js";import"./Stack-BgPIGJBB.js";import"./useThemeProps-C-lZ45sq.js";import"./getThemeProps-UG1giO0s.js";import"./extendSxProp-D3xzd78a.js";import"./Box-CyMjV0lw.js";import"./AlertTitle-B9hh7xTw.js";import"./Typography-CgELToTR.js";import"./index-DxIYZYxe.js";import"./ClickAwayListener-qcG_xo1w.js";import"./getReactElementRef-CZMZMACG.js";import"./index-Dnc0KVG1.js";import"./index-CYG8ReaC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-COFvT4Fr.js";import"./Tooltip-TJmbofi_.js";import"./index-CCmkHAOR.js";import"./useControlled-COBnzW9o.js";import"./Popper-nifOx2HX.js";import"./Button-BlDCFaad.js";import"./uniqueId-D7TY6ev_.js";import"./toString-BDClR3lY.js";import"./isArray-BvmHQydZ.js";import"./isSymbol-DE5mZbO0.js";import"./times-CxTsb-MR.js";import"./_Uint8Array-DnaM-X-G.js";import"./identity-DKeuBCMA.js";import"./toInteger-Bpva5dYQ.js";import"./mockTableEntity-DPSkPIqm.js";import"./mockFileEntityACLVariants-_y4pjq8A.js";import"./fakerUtils-Dtp-AHGV.js";import"./mockFileEntity-D0gDlWaP.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-Cwricfwo.js";import"./mockSchema-DwuSVw6W.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-C9GAOvRL.js";import"./QueryClientProvider-BpgeQpsy.js";import"./Link-K0WQ4RJB.js";import"./Collapse-B9jEaYxB.js";import"./_baseUniq-C3nQM1t_.js";import"./_getTag-BH98QkbB.js";import"./isEqual-BR072uNX.js";import"./noop-DX6rZLP_.js";import"./merge-BiDvuW0y.js";import"./_initCloneObject-CR3nmsfR.js";import"./tinycolor-Begke6kS.js";import"./Fade-BVW8WfrF.js";import"./inputBaseClasses-DEk3SEq1.js";import"./calculateFriendlyFileSize-CPpMCUfT.js";import"./CheckCircleTwoTone-B52REKll.js";import"./InfoTwoTone-croQFE36.js";import"./useMutation-wdvmQ00s.js";import"./dayjs.min-C_S2YiE5.js";import"./chunk-AYJ5UCUI-DPYjxEGe.js";import"./cloneDeep-DtQ1Vi2m.js";import"./Skeleton-CMgleuOv.js";import"./HelpPopover-BXOnFz0Q.js";import"./MarkdownPopover-gfir6rsH.js";import"./LightTooltip-B3xopPK4.js";import"./MarkdownSynapse-MzKZnwYp.js";import"./SkeletonButton-DysiiZ24.js";import"./SkeletonInlineBlock-Dtnbmd3B.js";import"./SkeletonTable-DMXihQLH.js";import"./SkeletonParagraph-CGFX-rEj.js";import"./HelpOutlineTwoTone-BN25k66V.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
