import{g as i}from"./entityHandlers-B3nepCOU.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BohibOw-.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-Djs4z110.js";import{g as m}from"./userProfileHandlers-losCIA-d.js";import{P as L}from"./ProjectDataAvailability-ml-M0YIA.js";import"./index-Q3bd8nzu.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Dclk0Eou.js";import"./mockTeam-DlAB-TLf.js";import"./SynapseConstants-a2f1ATGs.js";import"./OrientationBanner-dBolsJnn.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DVi4Wje5.js";import"./index-CkFnR4ru.js";import"./iframe-CKvnnJhq.js";import"./spreadSx-CwcO6WA9.js";import"./react-A7vIHcfb.js";import"./FullWidthAlert-BEFsW73f.js";import"./Alert-DDc39lQe.js";import"./createTheme-DcsDOw1A.js";import"./DefaultPropsProvider-CGqxt6ob.js";import"./useSlot-Bju1dyXB.js";import"./useForkRef-BJQkitpf.js";import"./createSimplePaletteValueFilter-B9aGn8G9.js";import"./createSvgIcon-364Lzn_b.js";import"./Close-LykhWtmH.js";import"./IconButton-CsuOJx-T.js";import"./useTimeout-BqUVErKz.js";import"./ButtonBase-CGWLsOy4.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DK0_NXfb.js";import"./Paper-Bxri_9-b.js";import"./useTheme-bpf5HOw7.js";import"./useTheme-VJ2j0frp.js";import"./Stack-Br4KC0Ob.js";import"./extendSxProp-B2jDyka1.js";import"./getThemeProps-CmXJJfNS.js";import"./Box-CDBIpvwF.js";import"./AlertTitle-5zvJDzzp.js";import"./Typography-DUXOvTJX.js";import"./index-BDhwziWJ.js";import"./ClickAwayListener-BpdWOejG.js";import"./getReactElementRef-JptPm9gh.js";import"./index-BqxOl3YS.js";import"./index-BPjGFZ8d.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DqmkwxJ5.js";import"./Tooltip-DC2q4Wz4.js";import"./index-CHLvizmL.js";import"./useControlled-BvqV3f_O.js";import"./Popper-cjOWIAbd.js";import"./Button-BdFuUL1S.js";import"./uniqueId-BMwRhlYS.js";import"./toString-DNkdMUwa.js";import"./isArray-C533p3iE.js";import"./isSymbol-BA2WHEYX.js";import"./times-Bj5oruIi.js";import"./_Uint8Array-B8U-SItt.js";import"./identity-DKeuBCMA.js";import"./toInteger-OMhOm0aB.js";import"./mockTableEntity-CZlZbe2d.js";import"./mockFileEntityACLVariants-U6j5xkKi.js";import"./fakerUtils-5gF0aoJH.js";import"./mockFileEntity-BrSlKQfO.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-B6E3fqbl.js";import"./mockSchema-BpvrcSaH.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BfSgOaRc.js";import"./QueryClientProvider-zm0Ye9sy.js";import"./Link-vbf7MeOq.js";import"./Collapse-BQIg35cI.js";import"./_baseUniq-DU7r3f6n.js";import"./_getTag-DiNzJEZe.js";import"./isEqual-B0Qaz4yZ.js";import"./merge-fz5rfo0a.js";import"./_initCloneObject-hL9_bpDH.js";import"./tinycolor-Begke6kS.js";import"./Fade-DvSChFD7.js";import"./inputBaseClasses-DP9QiBNX.js";import"./calculateFriendlyFileSize-Bf2PELXV.js";import"./CheckCircleTwoTone-DasE1-rH.js";import"./InfoTwoTone-BlO9HkXx.js";import"./useMutation-S7okSP_K.js";import"./dayjs.min-DWt_l-v8.js";import"./chunk-AYJ5UCUI-C6uHKJSQ.js";import"./cloneDeep-CrgHvOoP.js";import"./Skeleton-21P9iDr7.js";import"./HelpPopover-BMjMLXCo.js";import"./MarkdownPopover-ol1C8EEe.js";import"./LightTooltip-C_wtrI3_.js";import"./MarkdownSynapse-BQYeZRhx.js";import"./SkeletonButton-eZRutsFo.js";import"./SkeletonInlineBlock-B0LGpiC4.js";import"./SkeletonTable-BBQWjS0A.js";import"./SkeletonParagraph-Dc5gR7bE.js";import"./HelpOutlineTwoTone-B28k7bNY.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
