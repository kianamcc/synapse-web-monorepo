import{g as i}from"./entityHandlers-ChYsCdqO.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-DdHsz3Ne.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-n8IElAqs.js";import{g as m}from"./userProfileHandlers-D8iaU99d.js";import{P as L}from"./ProjectDataAvailability-Di8j9xRp.js";import"./index-CIVLbZyL.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CWsBBSTR.js";import"./mockTeam-DgHJc02p.js";import"./SynapseConstants-C0V-yF4N.js";import"./OrientationBanner-CWZ4uhwN.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-1EupSe8l.js";import"./index-DFbrmaLj.js";import"./iframe-ClOHDTQ8.js";import"./spreadSx-CwcO6WA9.js";import"./react-iHEMVxNs.js";import"./FullWidthAlert-DamwWrK5.js";import"./Alert-h22u6Df8.js";import"./createTheme-Ekw01Cd6.js";import"./DefaultPropsProvider-COP98Tys.js";import"./useSlot-CZOdYNet.js";import"./useForkRef-Di1p2pFl.js";import"./createSimplePaletteValueFilter-b3PFnJ3S.js";import"./createSvgIcon-BJ9wLsbu.js";import"./Close-D-xVDQiM.js";import"./IconButton-CWJ89n76.js";import"./useTimeout-DQLWHDDq.js";import"./ButtonBase-Dv7UPqQY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BncuO5rQ.js";import"./Paper-CBfZTx7u.js";import"./useTheme-CZyH-rHk.js";import"./useTheme-Cyy4koW7.js";import"./Stack-B4TEDxbG.js";import"./extendSxProp-BhcPt3ae.js";import"./getThemeProps-CteZ3phJ.js";import"./Box-Dk6g9q4u.js";import"./AlertTitle-D80L3F0L.js";import"./Typography-DifSQpMI.js";import"./index-ChqGY4w9.js";import"./ClickAwayListener-6OEA5dkK.js";import"./getReactElementRef-CB2a6i92.js";import"./index-BZyFJE8-.js";import"./index-BxG809-V.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C78Bid7u.js";import"./Tooltip-BXHxDATm.js";import"./index-_d4MODJg.js";import"./useControlled-i8mzpvgl.js";import"./Popper-C3O6RvEu.js";import"./Button-V89ycX9v.js";import"./uniqueId-RQ0j9yaJ.js";import"./toString-DmO8Iv0v.js";import"./isArray-CHZlswhx.js";import"./isSymbol-Ma6LFywi.js";import"./times-b4490pJh.js";import"./_Uint8Array-C9Gs_6C5.js";import"./identity-DKeuBCMA.js";import"./toInteger-ENQqM5aA.js";import"./mockTableEntity-QGojUdNH.js";import"./mockFileEntityACLVariants-D2IVuPbF.js";import"./fakerUtils-N7GiG2OM.js";import"./mockFileEntity-mYBMjQlq.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-CsBB0c_q.js";import"./mockSchema-CwdB-fj6.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-CwkAPKzS.js";import"./QueryClientProvider-DlwRL2mt.js";import"./Link-_RVTQFab.js";import"./Collapse-Bk1dswbo.js";import"./_baseUniq-DYTm6Rs2.js";import"./_getTag-Dpjn8z1N.js";import"./isEqual-C5gfjHSy.js";import"./merge-BetqcGtu.js";import"./_initCloneObject-Qs3evXab.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dtm0XdCW.js";import"./inputBaseClasses-D-YCeq8p.js";import"./calculateFriendlyFileSize-BJVx0UpD.js";import"./CheckCircleTwoTone-DJCDdOi1.js";import"./InfoTwoTone-BCf-igzE.js";import"./useMutation-CYss3V98.js";import"./dayjs.min-AWPNLm8a.js";import"./chunk-AYJ5UCUI-C0isJnrA.js";import"./cloneDeep-DFXU4Y17.js";import"./Skeleton-BVJB5DIE.js";import"./HelpPopover-BRUdrnUn.js";import"./MarkdownPopover-DgHjUty9.js";import"./LightTooltip-DArRNXYH.js";import"./MarkdownSynapse-Dp8ksI7c.js";import"./SkeletonButton-DrN7gFah.js";import"./SkeletonInlineBlock-BcSgYyMK.js";import"./SkeletonTable-CBeHM_C6.js";import"./SkeletonParagraph-YbSjhuCj.js";import"./HelpOutlineTwoTone-B8abGD0b.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
