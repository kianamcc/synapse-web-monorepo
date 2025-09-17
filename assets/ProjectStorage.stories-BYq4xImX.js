import{g as i}from"./entityHandlers-Bpw5lL0c.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Bw0m6uSf.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DlqiY1eh.js";import{g as m}from"./userProfileHandlers-BDtgCZ4C.js";import{P as L}from"./ProjectDataAvailability-8lO4jTiA.js";import"./index-DaL1YcmC.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BxgzeyYg.js";import"./mockTeam-Dwytxbxs.js";import"./SynapseConstants-oxmSAhRt.js";import"./OrientationBanner-69jt1FeK.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-oGsaT5a9.js";import"./index-Bc8RXlNF.js";import"./iframe-DqtJT-CI.js";import"./spreadSx-CwcO6WA9.js";import"./react-CP1D827C.js";import"./FullWidthAlert-DA78l4ei.js";import"./Alert-CPCjYOjN.js";import"./createTheme-B-WGvCZV.js";import"./DefaultPropsProvider-BZTOi2Nb.js";import"./useSlot-BE5lb3ME.js";import"./useForkRef-2fHpQHUh.js";import"./createSimplePaletteValueFilter-B6DTm-vX.js";import"./createSvgIcon-C9Qu0LqJ.js";import"./Close-Bivu03FM.js";import"./IconButton-W3ZhFBsx.js";import"./useTimeout-DkJzioRi.js";import"./ButtonBase-D6Nhhqqr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BAgXRlg8.js";import"./Paper-BtBe2Ap-.js";import"./useTheme-CnLnUCUF.js";import"./useTheme-C9VVxehU.js";import"./Stack-1p_QX1Ok.js";import"./extendSxProp-eP26Hwbg.js";import"./getThemeProps-xXfwRdzB.js";import"./Box-nLN5geWp.js";import"./AlertTitle-BasMmQ31.js";import"./Typography-D9diGUsI.js";import"./index-BIlcAsR4.js";import"./ClickAwayListener-DtQh59tZ.js";import"./getReactElementRef-DBTURC4m.js";import"./index-CcY_nMfh.js";import"./index-DgNGjvVA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C-w8O3Bv.js";import"./Tooltip-D5aOZOwW.js";import"./index-DgC7vvPA.js";import"./useControlled-kiYK4enm.js";import"./Popper-Ccwyg-S0.js";import"./Button-D1_V94c4.js";import"./uniqueId-COcc66q-.js";import"./toString-CPLPrYC1.js";import"./isArray-wgyLd2Dj.js";import"./isSymbol-Bz_nq2Xo.js";import"./times-BUzBHwrf.js";import"./_Uint8Array-C2g0Y_T2.js";import"./identity-DKeuBCMA.js";import"./toInteger-DDu9OOBP.js";import"./mockTableEntity-E-muiipq.js";import"./mockFileEntityACLVariants-CygW0nQ6.js";import"./fakerUtils-DWR6jvaj.js";import"./mockFileEntity-D5AYwyDU.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-C_8KjBPq.js";import"./mockSchema-__UVr3fi.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-GKDTA9Sk.js";import"./QueryClientProvider-DmkRpa3F.js";import"./Link-Bxi0rxja.js";import"./Collapse-CMSd_lTh.js";import"./_baseUniq-6J9_uk5v.js";import"./_getTag-kNCA-Zxv.js";import"./isEqual-C1mFG84L.js";import"./merge-DJGXnCrn.js";import"./_initCloneObject-BMdnylxl.js";import"./tinycolor-Begke6kS.js";import"./Fade-Iv3fPh82.js";import"./inputBaseClasses-rlpaGauL.js";import"./calculateFriendlyFileSize-H7_KPqe_.js";import"./CheckCircleTwoTone-D-sclXL9.js";import"./InfoTwoTone-C3IyF0V8.js";import"./useMutation-DlA1__c_.js";import"./dayjs.min-SKfPruAU.js";import"./chunk-AYJ5UCUI-Ds_dHHHb.js";import"./cloneDeep-DATH6_8s.js";import"./Skeleton-xuFa_deo.js";import"./HelpPopover-WM-gkAm2.js";import"./MarkdownPopover-BFAUzOSy.js";import"./LightTooltip-D7Hf5C5J.js";import"./MarkdownSynapse-OPELaiAh.js";import"./SkeletonButton-DeljvfTk.js";import"./SkeletonInlineBlock-CmTeqA9J.js";import"./SkeletonTable-BgDKh0q7.js";import"./SkeletonParagraph-CIvCOmc3.js";import"./HelpOutlineTwoTone-BKsnjMpo.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
