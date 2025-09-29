import{g as i}from"./entityHandlers-CekWiG8O.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-B2N2HPUY.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-BSPW9gBS.js";import{g as m}from"./userProfileHandlers-BAAp9Zet.js";import{P as L}from"./ProjectDataAvailability-uVdw4pod.js";import"./index-CoN_nJ0h.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CNolZGgZ.js";import"./mockTeam-CiNjzBR5.js";import"./SynapseConstants-Dgxzyngc.js";import"./OrientationBanner-CM4mQahX.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Ckx9wA1o.js";import"./index-DTNlVjJ7.js";import"./iframe-HyGsmOq6.js";import"./spreadSx-CwcO6WA9.js";import"./react-C-ZrivrO.js";import"./FullWidthAlert-rFqRmBje.js";import"./Alert-8d9H3zz9.js";import"./createTheme-D1BQx7_9.js";import"./DefaultPropsProvider-C_zNEI2X.js";import"./useSlot-D3K8A8w7.js";import"./useForkRef-U0ZDp63e.js";import"./createSimplePaletteValueFilter-cVSg-Kao.js";import"./createSvgIcon-RS-D48a7.js";import"./Close-CvE2AhfC.js";import"./IconButton-pZgQcOFK.js";import"./useTimeout-DtwR2-Vy.js";import"./ButtonBase-36aZ1yix.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-oD9nUD2d.js";import"./Paper-CaF42frr.js";import"./useTheme-f5o2sVxe.js";import"./useTheme-BfaqaQGF.js";import"./Stack-DqCCF0aZ.js";import"./extendSxProp-iklfMelH.js";import"./getThemeProps-vMGdrB_u.js";import"./Box-BgNFQW5j.js";import"./AlertTitle-DbhJsyCT.js";import"./Typography-CdQn_xVC.js";import"./index-ChnvbaPR.js";import"./ClickAwayListener-DoRduBrz.js";import"./getReactElementRef-DwpSRZ2i.js";import"./index-C38Velpb.js";import"./index-DROQPanT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-h00VdCaE.js";import"./Tooltip-CF7TWlNa.js";import"./index-DFvo03aM.js";import"./useControlled-C_0taDzB.js";import"./Popper-CTII9iKp.js";import"./Button-N-1HkUGf.js";import"./uniqueId-BLhD58vE.js";import"./toString-Cr7dBLXl.js";import"./isArray-BNDnJ0cX.js";import"./isSymbol-aUcSGGGb.js";import"./times-CvPrAAzW.js";import"./_Uint8Array-DPNJR1BB.js";import"./identity-DKeuBCMA.js";import"./toInteger-DlQw8do_.js";import"./mockTableEntity-B2OUm_XS.js";import"./mockFileEntityACLVariants-eSJORrcx.js";import"./fakerUtils-CNKeDNyi.js";import"./mockFileEntity-Cxg9um71.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-D6nsNF7R.js";import"./mockSchema-C6E7qbAF.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BeZx-JBU.js";import"./QueryClientProvider-CqRxmNge.js";import"./Link-B84UpXKP.js";import"./Collapse-D024h2Tt.js";import"./_baseUniq-DEewYuYN.js";import"./_getTag-DxTQRKYo.js";import"./isEqual-Dv-V6DIZ.js";import"./merge-NB7svOIH.js";import"./_initCloneObject-DHMeHRbH.js";import"./tinycolor-Begke6kS.js";import"./Fade-ByYPi2--.js";import"./inputBaseClasses-V0GV_T2d.js";import"./calculateFriendlyFileSize-C_Xem63m.js";import"./CheckCircleTwoTone-Dp5ZcmDN.js";import"./InfoTwoTone-BTeFVGl3.js";import"./useMutation-B0RPERva.js";import"./dayjs.min-2wFo7hOi.js";import"./chunk-AYJ5UCUI-CW1esgOs.js";import"./cloneDeep-i-w8KGzX.js";import"./Skeleton-BEqAEI4M.js";import"./HelpPopover-6gxibe46.js";import"./MarkdownPopover-DDo4uK2-.js";import"./LightTooltip-B55yGuug.js";import"./MarkdownSynapse-BCMxM1kf.js";import"./SkeletonButton-Du7Cwqqe.js";import"./SkeletonInlineBlock-C4wn7iqx.js";import"./SkeletonTable-Bfy4useK.js";import"./SkeletonParagraph-DpFaUc_o.js";import"./HelpOutlineTwoTone-BIoZtyOL.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
