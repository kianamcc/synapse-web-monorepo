import{g as i}from"./entityHandlers-DVw-j349.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-wWQ53W6F.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-CqPTR_9w.js";import{g as m}from"./userProfileHandlers-eybwIuhs.js";import{P as L}from"./ProjectDataAvailability-dGZ-A7OY.js";import"./index-CmHqmxJc.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Dvrw4C2F.js";import"./mockTeam-Bu_tswXZ.js";import"./SynapseConstants-DLUag6lU.js";import"./OrientationBanner-CRkLOFNV.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DmEjL0gl.js";import"./index-Fvy6OXvx.js";import"./iframe-B8dXxRrz.js";import"./spreadSx-CwcO6WA9.js";import"./react-DidY2G1Y.js";import"./FullWidthAlert-DR77ctOw.js";import"./Alert-DpkG2eKm.js";import"./createTheme-Bqan8iSd.js";import"./DefaultPropsProvider-CvOM3crP.js";import"./useSlot-OhfiPf_i.js";import"./useForkRef-BeT6GA-1.js";import"./createSimplePaletteValueFilter-BCFu5tCD.js";import"./createSvgIcon-BgHtG-ZK.js";import"./Close-CJ1hBDqs.js";import"./IconButton-C_XoYKbu.js";import"./useTimeout-BI-r7Chh.js";import"./ButtonBase-DHedW4PR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-wOG2gwEP.js";import"./Paper-CNcRBNAa.js";import"./useTheme-LIw16y-R.js";import"./useTheme-ITUjA_qS.js";import"./Stack-DU1ForPl.js";import"./extendSxProp-D-vpv-1y.js";import"./getThemeProps-D7jKhtgM.js";import"./Box-CbSz_dhW.js";import"./AlertTitle-DTLD6v1o.js";import"./Typography-6dkO2MTM.js";import"./index-DK62uATf.js";import"./ClickAwayListener-D1GBWBlV.js";import"./getReactElementRef-CVCbp7Cp.js";import"./index-BcRRWnYW.js";import"./index-BDgQoSql.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-wuCwDJHH.js";import"./Tooltip-DX-SU6uL.js";import"./index-Cq9dyCaH.js";import"./useControlled-uX7GhbF6.js";import"./Popper-CXqOJrMB.js";import"./Button-BHN8_UXu.js";import"./uniqueId-C63vPQoj.js";import"./toString-PWlAtk46.js";import"./isArray-BFuLipFc.js";import"./isSymbol-BIKvGbkU.js";import"./times-Bb7GOkht.js";import"./_Uint8Array-Do_yUrdE.js";import"./identity-DKeuBCMA.js";import"./toInteger-BxMRen59.js";import"./mockTableEntity-BG79Jqxd.js";import"./mockFileEntityACLVariants-CCOphiJx.js";import"./fakerUtils-BH9tBFz0.js";import"./mockFileEntity-7fxTQ350.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-o3EcMEBn.js";import"./mockSchema-DthuWgVi.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DkveStrn.js";import"./QueryClientProvider-DztE-yrs.js";import"./Link-8X1p5eq_.js";import"./Collapse-BMTa6CBd.js";import"./_baseUniq-CyW2Nhvq.js";import"./_getTag-BUH8RGR_.js";import"./isEqual-Bo9V0Syl.js";import"./merge-CmfNHmTH.js";import"./_initCloneObject-CyhAal79.js";import"./tinycolor-Begke6kS.js";import"./Fade-CUSl01b3.js";import"./inputBaseClasses-CcplBV6_.js";import"./calculateFriendlyFileSize-CUQjNl6R.js";import"./CheckCircleTwoTone-CdZKEvy8.js";import"./InfoTwoTone-qc6Tvhs0.js";import"./useMutation-DONRoSE-.js";import"./dayjs.min-CYR_2A92.js";import"./chunk-AYJ5UCUI-D3aPapOi.js";import"./cloneDeep-BihnUe_D.js";import"./Skeleton-Bc_aNlp6.js";import"./HelpPopover-f7HTKnpo.js";import"./MarkdownPopover-PmZrVsmE.js";import"./LightTooltip-bKds78nH.js";import"./MarkdownSynapse-Cfvn8zZg.js";import"./SkeletonButton-BC_eVRko.js";import"./SkeletonInlineBlock-nRuvAxLc.js";import"./SkeletonTable-CddpqJYO.js";import"./SkeletonParagraph-CbuD9cfx.js";import"./HelpOutlineTwoTone-suwU6zMB.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
