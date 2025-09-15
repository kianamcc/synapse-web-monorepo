import{g as i}from"./entityHandlers-BiCZ3cd0.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-C0LoOmO0.js";import"./VerificationSubmission-CTjJb3hu.js";import"./StringUtils-B8-nnzJN.js";import{h as d,H as l}from"./index-C5df9ohH.js";import{g as m}from"./userProfileHandlers-Bssi49lI.js";import{P as L}from"./ProjectDataAvailability-tObn2x1E.js";import"./index-CV4b5zb4.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CNCmfLlY.js";import"./mockTeam-DR2IOsDr.js";import"./SynapseConstants-CfoFd-n8.js";import"./OrientationBanner-CyUybcJl.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DM6lW6It.js";import"./index-BT3Te7jy.js";import"./iframe-Cv41k_0C.js";import"./spreadSx-CwcO6WA9.js";import"./react-DZIMwRel.js";import"./FullWidthAlert-C46Blc7T.js";import"./Alert-C-gALuMm.js";import"./createTheme-DqJWNRNb.js";import"./DefaultPropsProvider-CE0cDWzn.js";import"./useSlot-hahH59Q5.js";import"./useForkRef-DzZZey8_.js";import"./createSimplePaletteValueFilter-BlHwJuBu.js";import"./createSvgIcon-C7LBBUzT.js";import"./Close-BPE0SqZE.js";import"./IconButton-IMsN6X3k.js";import"./useTimeout-DfbxA_aO.js";import"./ButtonBase-D5lUL21Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CTJF-mZ9.js";import"./Paper-CrkBLqBb.js";import"./useTheme-C9dU6GyR.js";import"./useTheme-C9qqfxHl.js";import"./Stack-Bnq-4hY0.js";import"./extendSxProp-trW_zPov.js";import"./getThemeProps-BSuDKzCX.js";import"./Box-BvMgL0bP.js";import"./AlertTitle-D-osniwO.js";import"./Typography-BVM6JYB6.js";import"./index-B-OF_bVG.js";import"./ClickAwayListener-kfkLezti.js";import"./getReactElementRef-DJFrIvcT.js";import"./index-BVCraRaj.js";import"./index-Vw6BdwX_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BDgVFHrL.js";import"./Tooltip-BSSHHp0A.js";import"./index-CvPTgnkP.js";import"./useControlled-CS6d8DWA.js";import"./Popper-0hI24Moq.js";import"./Button-DWVOomDw.js";import"./uniqueId-CgFdmfzC.js";import"./toString-BVqGcibl.js";import"./isArray-DR6YGX7L.js";import"./isSymbol-BrnSu6PC.js";import"./times-cDhTatTd.js";import"./_Uint8Array-m1itDDcl.js";import"./identity-DKeuBCMA.js";import"./toInteger-DB0br_ER.js";import"./mockTableEntity-B2XhyBsw.js";import"./mockFileEntityACLVariants-CTg1_FCq.js";import"./fakerUtils-I4-Vl4Kn.js";import"./mockFileEntity-CKiF6mfI.js";import"./mock_file_handle-CfZD9Mvn.js";import"./mockEntity-CW_39TDB.js";import"./mockSchema-Z_ZVknX-.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-BCtm-9bF.js";import"./QueryClientProvider-DDlfMz7v.js";import"./Link-Cx68C2Qe.js";import"./Collapse-C5sDbyg3.js";import"./_baseUniq-C30p3t0W.js";import"./_getTag-Pn6cSHfz.js";import"./isEqual-BR1_83yT.js";import"./merge-BTBQOSs6.js";import"./_initCloneObject-BpTYYScw.js";import"./tinycolor-Begke6kS.js";import"./Fade-CmY1bZLi.js";import"./inputBaseClasses-Bvbevx10.js";import"./calculateFriendlyFileSize-ZofpzaZO.js";import"./CheckCircleTwoTone-BT4jI4la.js";import"./InfoTwoTone-CThHqBR0.js";import"./useMutation-7VgsCiaa.js";import"./dayjs.min-2ntpv4ZX.js";import"./chunk-AYJ5UCUI-BrDJsr6s.js";import"./cloneDeep-BYsV4Yvt.js";import"./Skeleton-B4NemE63.js";import"./HelpPopover-BMY5OA2V.js";import"./MarkdownPopover-BgVrhJTQ.js";import"./LightTooltip-DzwrYHBb.js";import"./MarkdownSynapse-BVSFNiyQ.js";import"./SkeletonButton-C2xYOOai.js";import"./SkeletonInlineBlock-Cj4Np9kH.js";import"./SkeletonTable-48HgdWyp.js";import"./SkeletonParagraph-C6G1dLYl.js";import"./HelpOutlineTwoTone-DyyDPYlf.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
