import{g as i}from"./entityHandlers-iomaS-LY.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-B6vegzDl.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-csDdk4hT.js";import{g as m}from"./userProfileHandlers-Cyhe3N93.js";import{P as L}from"./ProjectDataAvailability-DbhpvlLc.js";import"./index-8vrNiuAd.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-By--vfxh.js";import"./mockTeam-DDNUP265.js";import"./SynapseConstants-BtPK8Xf5.js";import"./OrientationBanner-DkmEu8ww.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BiABM7zM.js";import"./index-jL26_Tdg.js";import"./iframe-C7ZZ0tJ9.js";import"./spreadSx-CwcO6WA9.js";import"./react-Q48zzpqQ.js";import"./FullWidthAlert-KH7-cPlx.js";import"./Alert-BYyjJPXO.js";import"./createTheme-CYqCSXBz.js";import"./DefaultPropsProvider-BaJQA2z9.js";import"./useSlot-DtyCmT7o.js";import"./useForkRef-COfB-m0m.js";import"./createSimplePaletteValueFilter-B4WcSHb2.js";import"./createSvgIcon-3ocGpMNh.js";import"./Close-D02RjwJU.js";import"./IconButton-Ccbi1Krc.js";import"./useTimeout-Q5NueQY6.js";import"./ButtonBase-Cpa2hZQw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-rSba4AH8.js";import"./Paper-BBhN9Li4.js";import"./useTheme-DLyZrVj1.js";import"./useTheme-CCBKYA_N.js";import"./Stack-Bnhis5DF.js";import"./extendSxProp-CyXZT-CH.js";import"./getThemeProps-qLDLSUkn.js";import"./Box-CElDN2lR.js";import"./AlertTitle-Bg93ACEw.js";import"./Typography-sIVWjIv7.js";import"./index-DzEjapEh.js";import"./ClickAwayListener-DBCnr4i9.js";import"./getReactElementRef-BpSyMuG3.js";import"./index-PB3v-e0n.js";import"./index-CXUQQ7NY.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CyxMG2Lo.js";import"./Tooltip-B8Ca4h6r.js";import"./index-Beyie8vy.js";import"./useControlled-IUjrSiMK.js";import"./Popper-BsmYiSO_.js";import"./Button-Bfd3_aE-.js";import"./uniqueId-BsjarHhf.js";import"./toString-CfbYm880.js";import"./isArray-YIKNzQ6l.js";import"./isSymbol-BzOFySpl.js";import"./times-BfyVqzQb.js";import"./_Uint8Array-B0WjZf3K.js";import"./identity-DKeuBCMA.js";import"./toInteger-Bs0lvEuP.js";import"./mockTableEntity-DVCZaFWn.js";import"./mockFileEntityACLVariants-CvHcttGi.js";import"./fakerUtils-B6AChHrG.js";import"./mockFileEntity-34J6Lt-X.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-mP2Ghzp0.js";import"./mockSchema-2jMuLiEp.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DT4b9CON.js";import"./QueryClientProvider-DvweCRTp.js";import"./Link-DulGgx7_.js";import"./Collapse-kXTM2RiY.js";import"./_baseUniq-CbUydBEl.js";import"./_getTag-ohfK-TjG.js";import"./isEqual-dhI3ZA9D.js";import"./merge-DqYA71tY.js";import"./_initCloneObject-Cz9cO3Kh.js";import"./tinycolor-Begke6kS.js";import"./Fade-s5_xMiSm.js";import"./inputBaseClasses-kkvSt9vt.js";import"./calculateFriendlyFileSize-DX_Sn0UC.js";import"./CheckCircleTwoTone-BQ0LZxD5.js";import"./InfoTwoTone-CNBCB-S5.js";import"./useMutation-B1e0RvlB.js";import"./dayjs.min-Bvvs6Fr9.js";import"./chunk-AYJ5UCUI-D-jAjeB5.js";import"./cloneDeep-G_YIi0g_.js";import"./Skeleton-CIkEHEVl.js";import"./HelpPopover-D8QCIYSZ.js";import"./MarkdownPopover-Chfvt8-7.js";import"./LightTooltip-CA2rONac.js";import"./MarkdownSynapse-An2c1n22.js";import"./SkeletonButton-CgoNMEcM.js";import"./SkeletonInlineBlock-D6Bz1bda.js";import"./SkeletonTable-FSXrOnyY.js";import"./SkeletonParagraph-CPcrTDx3.js";import"./HelpOutlineTwoTone-CkFSfgTR.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
