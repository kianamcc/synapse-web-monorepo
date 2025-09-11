import{g as i}from"./entityHandlers-CQEreMTv.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-D9IjkbnM.js";import"./VerificationSubmission-16RBrwfH.js";import"./StringUtils-B_EIkN_W.js";import{h as d,H as l}from"./index-BKYhqAhs.js";import{g as m}from"./userProfileHandlers-BJ1kz-bz.js";import{P as L}from"./ProjectDataAvailability-Bj5dcKQt.js";import"./index-DVn6l8iX.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BMMNUQYS.js";import"./mockTeam-Ht8K2-k6.js";import"./SynapseConstants-CimKnm-8.js";import"./OrientationBanner-CzU6KDpL.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CgsjeSPa.js";import"./index-6vxeCzL4.js";import"./iframe-CjifT74g.js";import"./spreadSx-CwcO6WA9.js";import"./react-DClyoqOD.js";import"./FullWidthAlert-TY94FRna.js";import"./Alert-BDTTfspR.js";import"./createTheme-Dy0-m8-A.js";import"./DefaultPropsProvider-DuHQt5tX.js";import"./useSlot-Bh66Acib.js";import"./useForkRef-D3GN_CBh.js";import"./createSimplePaletteValueFilter-BJFb3sY0.js";import"./createSvgIcon-Bp3iCONJ.js";import"./Close-DE9Xj8OJ.js";import"./IconButton-kCilc8aH.js";import"./useTimeout-DAnP99B3.js";import"./ButtonBase-CbRzwM7N.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-oIAkzJX4.js";import"./Paper-BgoErbyD.js";import"./useTheme-DxuATEnu.js";import"./useTheme-DYfQlcXU.js";import"./Stack-CD-9J5q_.js";import"./extendSxProp-DBncvLzO.js";import"./getThemeProps-DQzIp4hW.js";import"./Box-4s3DQrSt.js";import"./AlertTitle-DjZT1bwn.js";import"./Typography-CHNd49HH.js";import"./index-BEFSRFSM.js";import"./ClickAwayListener-Dxjx-8zF.js";import"./getReactElementRef-BVECeuLd.js";import"./index-Calt9S7p.js";import"./index-CEnxySY1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-AKYW22Tv.js";import"./Tooltip-D4mylLgV.js";import"./index-D050dNpj.js";import"./useControlled-DS0tk13e.js";import"./Popper-Hnc_u6mX.js";import"./Button-BVPpZjkW.js";import"./uniqueId-a90_NqWn.js";import"./toString-DAJxseuJ.js";import"./isArray-D5p7Gkib.js";import"./isSymbol-Bx6tt6xH.js";import"./times-BIKSUyh8.js";import"./_Uint8Array-CesznVbr.js";import"./identity-DKeuBCMA.js";import"./toInteger-CDPya1oj.js";import"./mockTableEntity-DDxI8rAR.js";import"./mockFileEntityACLVariants-DuJmaYDu.js";import"./fakerUtils-3OEIuZfq.js";import"./mockFileEntity-DZKedmtT.js";import"./mock_file_handle-t2fDWYxy.js";import"./mockEntity-BSDmNZnC.js";import"./mockSchema-BhB7z3_B.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-DxAfwxuj.js";import"./QueryClientProvider-BeU9GayN.js";import"./Link-DPGwCB9W.js";import"./Collapse-Quox-cv-.js";import"./_baseUniq-Bfrtub2j.js";import"./_getTag-Dw1mXAbx.js";import"./isEqual-BRYXIgAL.js";import"./merge-DussZOY2.js";import"./_initCloneObject-CwMaFeaY.js";import"./tinycolor-Begke6kS.js";import"./Fade-BieE9Iqq.js";import"./inputBaseClasses-CWBiX7gU.js";import"./calculateFriendlyFileSize-DCRKp9Ar.js";import"./CheckCircleTwoTone-BCUKw-TQ.js";import"./InfoTwoTone-BDufQF4P.js";import"./useMutation-CW7KVecC.js";import"./dayjs.min-Bq9OIHwb.js";import"./chunk-AYJ5UCUI-DuqvUR3-.js";import"./cloneDeep-tK7GVlr1.js";import"./Skeleton-BIk9JEA-.js";import"./HelpPopover-DFXvLEgg.js";import"./MarkdownPopover-gNTXlxIu.js";import"./LightTooltip-Bvffg9Zp.js";import"./MarkdownSynapse-VCTMf1oB.js";import"./SkeletonButton-C8-3HW5_.js";import"./SkeletonInlineBlock-DLu8p9lp.js";import"./SkeletonTable-BHgP5xM2.js";import"./SkeletonParagraph-BZA5Vk9S.js";import"./HelpOutlineTwoTone-BcWivEdN.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
