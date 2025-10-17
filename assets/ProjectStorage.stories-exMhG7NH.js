import{g as i}from"./entityHandlers-DlELjePu.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-6UDrmTYG.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-_B2cjVH7.js";import{g as m}from"./userProfileHandlers-BuV0T6A-.js";import{P as L}from"./ProjectDataAvailability-ihMurT-C.js";import"./index-CQIKHfII.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DrSqjodK.js";import"./mockTeam-5zf4Oyrn.js";import"./SynapseConstants-hypBLRKL.js";import"./OrientationBanner-D-Ad_KzJ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DO9i5fSP.js";import"./index-0Exjkr72.js";import"./iframe-DaXup4WN.js";import"./spreadSx-CwcO6WA9.js";import"./react-CP4ZqcKH.js";import"./FullWidthAlert-tLGyCqCx.js";import"./Alert-CoPbwJdQ.js";import"./createTheme-0xQbh0hV.js";import"./DefaultPropsProvider-Bvki0pxK.js";import"./useSlot-Dq0xnqmg.js";import"./useForkRef-vAoaxSvE.js";import"./createSimplePaletteValueFilter-Dn2ZSDDm.js";import"./createSvgIcon-D_tiKqbD.js";import"./Close-Cpm6LQZy.js";import"./IconButton-DjNjSMkw.js";import"./useTimeout-DxKu314J.js";import"./ButtonBase-CxDf0Iya.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BrXv9hhK.js";import"./Paper-D8dnleYW.js";import"./useTheme-D8-A-0a-.js";import"./useTheme-CtlMRJLD.js";import"./Stack-DRTbJTt6.js";import"./useThemeProps-C1t7O8fM.js";import"./getThemeProps-CRJRiPRc.js";import"./extendSxProp-DKGbTOnE.js";import"./Box-CFRP72jt.js";import"./AlertTitle-Cez2UsjB.js";import"./Typography-CCOQQgSX.js";import"./index-CbCbsN5e.js";import"./ClickAwayListener-DWpjaqTE.js";import"./getReactElementRef-CCy5tafl.js";import"./index-CQx7vtrI.js";import"./index-Bo63NWas.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-a2S7IfBI.js";import"./Tooltip-BNN4uyZR.js";import"./index-DGgpv3HQ.js";import"./useControlled-DViJgbiZ.js";import"./Popper-EPaPs2kP.js";import"./Button-iINO5mWw.js";import"./uniqueId-Cz-Rang1.js";import"./toString-BmMu2Lx8.js";import"./isArray-PqDzEjBo.js";import"./isSymbol-Dk6RgkrU.js";import"./times-CyQws5oo.js";import"./_Uint8Array-Bup5ZD9h.js";import"./identity-DKeuBCMA.js";import"./toInteger-DUAzEtRR.js";import"./mockTableEntity-CTQZGJyn.js";import"./mockFileEntityACLVariants-BdTiWHyp.js";import"./fakerUtils-C4fyrE2n.js";import"./mockFileEntity-Ci7Nwf55.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BTVZp9Qd.js";import"./mockSchema-DlzVmVsM.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-lQ2tabsY.js";import"./QueryClientProvider-BqxA2MMk.js";import"./Link-BZBSuM24.js";import"./Collapse-BuJTwuq3.js";import"./_baseUniq-D2qgl31R.js";import"./_getTag-DAcmkE1f.js";import"./isEqual-DTMJ7tsS.js";import"./noop-DX6rZLP_.js";import"./merge-eG4gq0oP.js";import"./_initCloneObject-w3_8_Tro.js";import"./tinycolor-Begke6kS.js";import"./Fade-BoYFynpn.js";import"./inputBaseClasses-Cp73c6Jl.js";import"./calculateFriendlyFileSize-dtY2LNqn.js";import"./CheckCircleTwoTone-CBnB5HgO.js";import"./InfoTwoTone-C0kEYjXG.js";import"./useMutation-DhZrwB6t.js";import"./dayjs.min-AYuUP0Eh.js";import"./chunk-AYJ5UCUI-CCUScnZb.js";import"./cloneDeep-C09cW0zA.js";import"./Skeleton-mTacaXMJ.js";import"./HelpPopover-CLOhBhNC.js";import"./MarkdownPopover-CBRQSR8q.js";import"./LightTooltip-Wz7xglKT.js";import"./MarkdownSynapse-BCRx685q.js";import"./SkeletonButton-DwX0p5i7.js";import"./SkeletonInlineBlock-BES5B5FB.js";import"./SkeletonTable-CT3hQViZ.js";import"./SkeletonParagraph-fFi7wt0S.js";import"./HelpOutlineTwoTone-B46Hwbo5.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
