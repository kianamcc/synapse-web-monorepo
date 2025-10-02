import{g as i}from"./entityHandlers-D-Oqe84I.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-fwRLhGbr.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-Cl5WHg4v.js";import{g as m}from"./userProfileHandlers-BzKQUfHA.js";import{P as L}from"./ProjectDataAvailability-DwXPzUOM.js";import"./index-DdNW8vZ5.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BK2U1EcH.js";import"./mockTeam-DxeGOaeI.js";import"./SynapseConstants-B8l2OMPk.js";import"./OrientationBanner-Bby0TFFa.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BxuR_vo1.js";import"./index-Y2_7qyTT.js";import"./iframe-CiPNy815.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dtfv9P2B.js";import"./FullWidthAlert-B-BMAEeS.js";import"./Alert-oytxK5Je.js";import"./createTheme-RUiFmI_W.js";import"./DefaultPropsProvider-FS1r-X2U.js";import"./useSlot-BV5ZvQmJ.js";import"./useForkRef-C-dtH7pD.js";import"./createSimplePaletteValueFilter-DztsWVw_.js";import"./createSvgIcon-v4WwopeH.js";import"./Close-CEyDtX3Y.js";import"./IconButton-AczJCmvj.js";import"./useTimeout-BA5R3DOd.js";import"./ButtonBase-BWviD6tE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DWQtTghH.js";import"./Paper-B7Y-Q-HP.js";import"./useTheme-BsulMRaf.js";import"./useTheme-0IisDZIx.js";import"./Stack-ZVBUd5J3.js";import"./extendSxProp-gXFVNC4Y.js";import"./getThemeProps-plWpQ3Lq.js";import"./Box-BHsZ7Z3g.js";import"./AlertTitle-3qVJhO4S.js";import"./Typography-KbDqkm-r.js";import"./index-sXDbKBZ3.js";import"./ClickAwayListener-Bz9xyM5k.js";import"./getReactElementRef-xHZTpTG3.js";import"./index-pTUyDkO4.js";import"./index-7gQlUqDb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-xPbtW7qM.js";import"./Tooltip-C8s8txK1.js";import"./index-PsXj0yzt.js";import"./useControlled-Qtb3VGc2.js";import"./Popper-BmbmkZCj.js";import"./Button-CnNmkRun.js";import"./uniqueId-BH7hVDmm.js";import"./toString-CdTzKmJz.js";import"./isArray-DEOD9vUq.js";import"./isSymbol-D5i-ZS4K.js";import"./times-DYTup6yP.js";import"./_Uint8Array-C-s0epD8.js";import"./identity-DKeuBCMA.js";import"./toInteger-C15E4fEB.js";import"./mockTableEntity-C6S-XgBq.js";import"./mockFileEntityACLVariants-X6M7JYld.js";import"./fakerUtils-BfIwCW_p.js";import"./mockFileEntity-q1S9zC86.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-civGKI8d.js";import"./mockSchema-DGfLEmYe.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BpAlhGD_.js";import"./QueryClientProvider-C5kb4OB9.js";import"./Link-CT9hiCy-.js";import"./Collapse-DlQYoAVS.js";import"./_baseUniq-BabFNIaN.js";import"./_getTag-Cw3MvDSQ.js";import"./isEqual-CUm5pL-b.js";import"./merge-P1u9Z5mp.js";import"./_initCloneObject-BhXh6Epx.js";import"./tinycolor-Begke6kS.js";import"./Fade-CwUMTnIH.js";import"./inputBaseClasses-gUC_vYKI.js";import"./calculateFriendlyFileSize-CEXKEGgc.js";import"./CheckCircleTwoTone-Gfdrryy2.js";import"./InfoTwoTone-lxJmBppl.js";import"./useMutation-DU_qR7xN.js";import"./dayjs.min-CLS8WRHo.js";import"./chunk-AYJ5UCUI-BAH5wvuu.js";import"./cloneDeep-C8vY3ckw.js";import"./Skeleton-BWv50vL0.js";import"./HelpPopover-C8oLwXhg.js";import"./MarkdownPopover-BZAQfzkN.js";import"./LightTooltip-smFE3cEg.js";import"./MarkdownSynapse-CnS1lzrb.js";import"./SkeletonButton-B5wN6HLM.js";import"./SkeletonInlineBlock-tf8x05Ru.js";import"./SkeletonTable-BEuOTJME.js";import"./SkeletonParagraph-GreXnCdC.js";import"./HelpOutlineTwoTone-Dl5YpQmx.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
